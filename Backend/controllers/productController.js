import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

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
