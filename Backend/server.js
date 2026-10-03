import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import redisClient from "./config/redisClient.js";
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

const app = express();

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
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("joinOrderRoom", (orderId) => {
    socket.join(orderId);
    console.log(`Socket ${socket.id} joined room: ${orderId}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
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
