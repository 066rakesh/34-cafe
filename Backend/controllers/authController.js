import User from "../models/user.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendOtpEmail } from "../services/emailService.js";
import { signupSchema } from "../validation/authSchema.js";

const OTP_VALID_MS = 5 * 60 * 1000;
const OTP_RESEND_COOLDOWN_MS = 60 * 1000;
const MAX_OTP_ATTEMPTS = 5;

export const signup = async (req, res) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result?.error?.issues?.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return res.status(400).json({
      success: false,
      errors,
    });
  }

  try {
    const { phone, name, email } = result.data;

    const existingUser = await User.findOne({
      $or: [{ phone }, { email }],
    });

    if (existingUser) {
      if (existingUser.phone === phone) {
        return res.status(409).json({
          success: false,
          field: "phone",
          message: "Phone number already exists",
        });
      } else if (existingUser.email === email) {
        return res.status(409).json({
          success: false,
          field: "email",
          message: "Email already registered",
        });
      }
    }

    await User.create({
      phone,
      email,
      name,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to create your account. Please try again later.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email } = req.body;

    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Valid email is required",
      });
    }

    const existingUser = await User.findOne({ email: email.trim() });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please sign up first.",
      });
    }

    if (existingUser.otp && existingUser.otpExpiry) {
      const issuedAt = existingUser.otpExpiry.getTime() - OTP_VALID_MS;
      if (Date.now() - issuedAt < OTP_RESEND_COOLDOWN_MS) {
        return res.status(429).json({
          success: false,
          message: "Please wait a minute before requesting another OTP.",
        });
      }
    }

    const otp = crypto.randomInt(100000, 1000000).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);

    existingUser.otp = hashedOtp;
    existingUser.otpExpiry = new Date(Date.now() + OTP_VALID_MS);
    existingUser.otpAttempts = 0;

    await existingUser.save();

    await sendOtpEmail(existingUser.email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to process login. Please try again later.",
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof otp !== "string" ||
      !/^\d{6}$/.test(otp.trim())
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid email and OTP",
      });
    }

    const user = await User.findOneAndUpdate(
      { email: email.trim() },
      { $inc: { otpAttempts: 1 } },
      { returnDocument: "after" }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.otp || !user.otpExpiry) {
      return res.status(400).json({
        success: false,
        message: "No active OTP. Please request a new one.",
      });
    }

    if (Date.now() > user.otpExpiry.getTime()) {
      user.otp = null;
      user.otpExpiry = null;
      await user.save();

      return res.status(400).json({
        success: false,
        message: "OTP expired. Please request a new one.",
      });
    }

    if (user.otpAttempts > MAX_OTP_ATTEMPTS) {
      user.otp = null;
      user.otpExpiry = null;
      await user.save();

      return res.status(429).json({
        success: false,
        message: "Too many attempts. Please request a new OTP.",
      });
    }

    const isValid = await bcrypt.compare(String(otp), user.otp);

    if (!isValid) {
      const left = Math.max(MAX_OTP_ATTEMPTS - user.otpAttempts, 0);
      return res.status(400).json({
        success: false,
        message:
          left > 0
            ? `Invalid OTP. ${left} attempt${left === 1 ? "" : "s"} left.`
            : "Invalid OTP. Please request a new one.",
      });
    }

    user.otp = null;
    user.otpExpiry = null;
    user.otpAttempts = 0;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to verify OTP. Please try again later.",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch user details. Please try again later.",
    });
  }
};
