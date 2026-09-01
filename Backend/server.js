import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/delivery", deliveryRoutes);

app.use("/api/addresses", addressRoutes);

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
