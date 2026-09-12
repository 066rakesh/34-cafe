import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getMyOrders, getOrderById } from "../controllers/orderController.js";

const router = express.Router();

router.get("/my-orders", authMiddleware, getMyOrders);

router.get("/:orderId", authMiddleware, getOrderById);

export default router;
