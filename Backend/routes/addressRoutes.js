import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createAddress, deleteAddress, getAddresses } from "../controllers/addressController.js";

const router = express.Router();

router.post("/", authMiddleware, createAddress);

router.get("/", authMiddleware, getAddresses);

router.delete("/:addressId", authMiddleware, deleteAddress);

export default router;