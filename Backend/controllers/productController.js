import redisClient from "../config/redisClient.js";
import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  const cacheKey = "all_products";

  try {
    if (redisClient.isReady) {
      try {
        const cached = await redisClient.get(cacheKey);

        if (cached) {
          return res.status(200).json({
            success: true,
            products: JSON.parse(cached),
          });
        }
      } catch (err) {
        console.error("Redis read failed, falling back to DB:", err.message);
      }
    }

    const products = await Product.find();

    if (redisClient.isReady) {
      try {
        await redisClient.set(cacheKey, JSON.stringify(products), { EX: 3600 });
      } catch (err) {
        console.error("Redis write failed:", err.message);
      }
    }

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};
