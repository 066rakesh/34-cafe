import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import redisClient from "./config/redisClient.js";
import Order from "./models/order.js";
import authRoutes from "./routes/authRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import prodctRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { handleRazorpayWebhook } from "./controllers/paymentController.js";
import rateLimit from "express-rate-limit";

const app = express();

app.set("trust proxy", 1);

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://34-cafe.vercel.app",
  "https://34admin.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
  })
);

app.post(
  "/api/payment/webhook",
  express.raw({ type: "application/json" }),
  handleRazorpayWebhook
);

app.use(express.json());
app.use(globalLimiter);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

io.use((socket, next) => {
  try {
    const token = socket.handshake.auth?.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.id;
    next();
  } catch {
    next(new Error("unauthorized"));
  }
});

io.on("connection", (socket) => {
  console.log("SOCKET connected | id:", socket.id, "| user:", socket.userId);

  socket.on("joinOrderRoom", async (orderId) => {
    try {
      const order = await Order.findOne({
        _id: orderId,
        user: socket.userId,
      }).select("_id");

      console.log("JOIN", String(orderId), order ? "OK" : "DENIED");

      if (order) socket.join(orderId);
    } catch (err) {
      console.error("joinOrderRoom failed:", err.message);
    }
  });

  socket.on("disconnect", (reason) => {
    console.log("SOCKET disconnected | id:", socket.id, "| reason:", reason);
  });
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/products", prodctRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("server is running...");
});

const startServer = async () => {
  await connectDB();

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
