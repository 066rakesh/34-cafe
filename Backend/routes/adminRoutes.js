import express from "express";
import {
  getAllOrdersAdmin,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { adminAuthMiddleware } from "../middleware/adminAuthMiddleware.js";
import { adminLogin } from "../controllers/adminAuthController.js";

const router = express.Router();

router.get("/orders", adminAuthMiddleware, getAllOrdersAdmin);

router.patch("/orders/:orderId/status", adminAuthMiddleware, updateOrderStatus);

router.post("/login", adminLogin);

export default router;
