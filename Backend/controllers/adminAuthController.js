import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASh
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      success: true,
      token,
      admin: { email },
    });
  } catch (error) {
    console.error("Admin login error", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};
