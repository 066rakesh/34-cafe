import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getMe,
  login,
  signup,
  verifyOtp,
} from "../controllers/authController.js";
import rateLimit from "express-rate-limit";

const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again in 15 minutes.",
  },
});

const router = express.Router();

router.post("/signup", signup);
router.post("/login", otpLimiter, login);
router.post("/verify-otp", otpLimiter, verifyOtp);
router.get("/me", authMiddleware, getMe);

export default router;
