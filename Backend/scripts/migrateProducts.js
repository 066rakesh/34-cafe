import path from "path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import Product from "../models/product.js";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const menuData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/menu-data.json"), "utf-8")
);

const IMAGES_FOLDER = path.join(__dirname, "../../Frontend/src/assets/images");

const migrateProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const productToInsert = [];

    for (const item of menuData) {
      const imagePath = path.join(IMAGES_FOLDER, item.image);
      console.log(`uploading: ${item.title} (${item.image})...`);

      const uploadResult = await cloudinary.uploader.upload(imagePath, {
        folder: "cafe-menu",
      });

      productToInsert.push({
        title: item.title,
        description: item.description,
        image: uploadResult.secure_url,
        price: item.price,
        rating: item.rating,
        prepTime: item.prepTime,
        isVeg: item.isVeg,
        category: item.category,
        isChefSpecial: item.isChefSpecial,
        isCraving: item.isCraving,
        isPopular: item.isPopular,
        variants: item.variants.map((v) => ({
          label: v.label,
          price: v.price,
        })),
      });

      console.log(`✔ Done: ${item.title}`);
    }

    await Product.insertMany(productToInsert);
    console.log(`\n${productToInsert.length} products successfully migrated!`);

    process.exit(0);
  } catch (error) {
    console.error("Migration failed", error);
    process.exit(1);
  }
};

migrateProducts();
