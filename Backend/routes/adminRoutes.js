import expres from "express";
import { getAllProducts } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
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

router.post("/login", adminLogin);
router.get("/products", isAdmin, getAllProducts);
router.post("/products", isAdmin, createProduct);
router.put("/products/:id", isAdmin, updateProduct);
router.delete("/products/:id", isAdmin, deleteProduct);

router.get("/users", getAllUsers);
router.post("/upload", isAdmin, upload.single("image"), uploadProductImage);
router.get("/orders", isAdmin, getAllOrders);
router.patch("/orders/:id/status", isAdmin, updateOrderStatus);

export default router;
