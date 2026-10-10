import express from "express";
import { chatbot } from "../controllers/chatbotController.js";
import { chatbotLimiter } from "../middleware/rateLimiters.js";

const router = express.Router();

router.post("/", chatbotLimiter, chatbot);

export default router;
