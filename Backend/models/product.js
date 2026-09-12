import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { _id: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    prepTime: {
      type: Number,
    },
    isVeg: {
      type: Boolean,
      default: true,
    },

    category: {
      type: String,
    },

    isChefSpecial: {
      type: Boolean,
      default: false,
    },
    isCraving: {
      type: Boolean,
      default: false,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },

    variants: [variantSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
