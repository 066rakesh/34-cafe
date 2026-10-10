import express from "express";
import { checkDelivery } from "../controllers/deliveryController.js";
import { deliveryLimiter } from "../middleware/rateLimiters.js";

const router = express.Router();

router.post("/check", deliveryLimiter, checkDelivery);

export default router;