import cloudinary from "../config/cloudinary.js";
import redisClient from "../config/redisClient.js";
import Order from "../models/order.js";
import Product from "../models/product.js";
import User from "../models/user.js";

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

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { role: "admin", email },
      process.env.JWT_ADMIN_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.error("Admin login failed", error);
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    await redisClient.del("all_products");

    return res.status(201).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    console.error("Failed to create product", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

export const uploadProductImage = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const uploadFromBuffer = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "cafe-menu" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        stream.end(file.buffer);
      });
    };

    const result = await uploadFromBuffer();

    if (!result || !result.secure_url) {
      return res.status(500).json({
        success: false,
        message: "Upload failed please try again",
      });
    }

    return res.status(200).json({
      success: true,
      url: result.secure_url,
    });
  } catch (error) {
    console.error("Image upload failed", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload image",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const product = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await redisClient.del("all_products");

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Failed to update product", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await redisClient.del("all_products");

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete product", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("name email phone role createdAt")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Failed to fetch users details", error);

    return res.status(500).json({
      success: false,
      message: "Failed fo fetch users details",
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Failed to fetch orders details", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders details",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { deliveryStatus } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { deliveryStatus },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    req.io.to(id).emit("orderStatusUpdated", order);

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Failed to update order status:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update order status",
    });
  }
};
