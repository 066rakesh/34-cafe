import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    connectTimeout: 5000,
    reconnectStrategy: (retries) => Math.min(retries * 500, 10000),
  },
});

redisClient.on("error", (error) => console.log("Redis Error", error));
redisClient.on("ready", () => console.log("Redis connected successfully"));

redisClient
  .connect()
  .catch((error) =>
    console.error("Redis initial connection failed:", error.message)
  );

export default redisClient;
