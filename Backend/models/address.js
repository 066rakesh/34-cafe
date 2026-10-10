import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    houseNumber: {
      type: String,
      required: true,
      trim: true,
    },

    locality: {
      type: String,
      trim: true,
      required: true,
    },

    landmark: {
      type: String,
      trim: true,
      required: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    addressType: {
      type: String,
      enum: ["Home", "Work", "Other"],
      required: true,
    },

    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

addressSchema.index({ user: 1 });
const Address = mongoose.model("Address", addressSchema);

export default Address;
