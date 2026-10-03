import redisClient from "../config/redisClient.js";
import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const cacheKey = "all_products";

    const cachedProducts = await redisClient.get(cacheKey);

    if (cachedProducts) {
      return res.status(200).json({
        success: true,
        products: JSON.parse(cachedProducts),
      });
    }

    const products = await Product.find();

    await redisClient.set(cacheKey, JSON.stringify(products), {
      EX: 3600,
    });

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error fetching products", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};
