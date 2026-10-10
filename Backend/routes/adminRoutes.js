import expres from "express";
import ratelimit from "express-rate-limit";
import { getAllProducts } from "../controllers/productController.js";
import { uploadSingleImage } from "../middleware/multer.js";
import {
  adminLogin,
  createProduct,
  deleteProduct,
  getAllOrders,
  getAllUsers,
  updateOrderStatus,
  updateProduct,
  uploadProductImage,
} from "../controllers/adminController.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = expres.Router();

const loginLimiter = ratelimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Please try again in 15 minutes",
  },
});

router.post("/login", loginLimiter, adminLogin);

router.use(isAdmin);

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/users", getAllUsers);
router.post("/upload", uploadSingleImage, uploadProductImage);
router.get("/orders", getAllOrders);
router.patch("/orders/:id/status", updateOrderStatus);

export default router;
