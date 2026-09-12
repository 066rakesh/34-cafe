import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import prodctRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/api/payment/webhook", express.raw({ type: "application/json" }));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/products", prodctRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/admin", adminRoutes);
app.use("/api/admin/auth", adminRoutes);

app.get("/", (req, res) => {
  res.send("server is running...");
});

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
