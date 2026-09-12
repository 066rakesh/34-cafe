import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getMe,
  login,
  signup,
  verifyOtp,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-otp", verifyOtp);

router.get("/me", authMiddleware, getMe);

export default router;