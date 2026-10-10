import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40,
    },
    
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    prepTime: {
      type: Number,
      min: 0,
    },

    isVeg: {
      type: Boolean,
      default: true,
    },

    category: {
      type: String,
      trim: true,
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
