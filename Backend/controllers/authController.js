import User from "../models/user.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { sendOtpEmail } from "../services/emailService.js";

export const signup = async (req, res) => {
  try {
    const { phone, name, email } = req.body;

    const existingUser = await User.findOne({
      $or: [{ phone }, { email }],
    });

    if (existingUser) {
      if (existingUser.phone === phone) {
        return res.status(409).json({
          success: false,
          message: "Phone number already exists",
        });
      }

      if (existingUser.email === email) {
        return res.status(409).json({
          success: false,
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

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please sign up first.",
      });
    }

    const otp = crypto.randomInt(100000, 1000000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    existingUser.otp = otp;
    existingUser.otpExpiry = otpExpiry;

    await existingUser.save();

    await sendOtpEmail(email, otp);

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

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (existingUser.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (Date.now() > existingUser.otpExpiry) {
      existingUser.otp = null;
      existingUser.otpExpiry = null;

      await existingUser.save();

      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    existingUser.otp = null;
    existingUser.otpExpiry = null;

    await existingUser.save();

    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

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

export const updateMe = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      const existingEmail = await User.findOne({
        email: email,
        _id: { $ne: userId },
      });

      if (existingEmail) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }

      user.email = email;
    }

    await user.save();

    return res.status(200).json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Update user error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to update your profile. Please try again later.",
    });
  }
};
