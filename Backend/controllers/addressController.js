import User from "../models/user.js";
import Address from "../models/address.js";
import mongoose from "mongoose";
import { checkDeliverable } from "../services/deliveryService.js";
import { reverseGeocode } from "../services/geocodingService.js";

const MAX_ADDRESSES_PER_USER = 10;

export const createAddress = async (req, res) => {
  try {
    const {
      houseNumber,
      locality,
      landmark,
      addressType,
      isDefault,
      longitude,
      latitude,
    } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (typeof houseNumber !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid house / flat number",
      });
    }

    if (!houseNumber.trim()) {
      return res.status(400).json({
        success: false,
        message: "House / Flat No. is required",
      });
    }

    if (typeof locality !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid Area / Street / Society",
      });
    }

    if (!locality.trim()) {
      return res.status(400).json({
        success: false,
        message: "Area / Street / Society is required",
      });
    }

    if (typeof landmark !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid landmark",
      });
    }

    if (!landmark.trim()) {
      return res.status(400).json({
        success: false,
        message: "Landmark is required",
      });
    }

    if (
      typeof addressType !== "string" ||
      !["Home", "Work", "Other"].includes(addressType)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid addressType",
      });
    }

    if (typeof isDefault !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Invalid default address value",
      });
    }

    if (
      typeof longitude !== "number" ||
      !Number.isFinite(longitude) ||
      longitude < -180 ||
      longitude > 180
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid longitude",
      });
    }

    if (
      typeof latitude !== "number" ||
      !Number.isFinite(latitude) ||
      latitude < -90 ||
      latitude > 90
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid latitude",
      });
    }

    const addressCount = await Address.countDocuments({ user: userId });

    if (addressCount >= MAX_ADDRESSES_PER_USER) {
      return res.status(400).json({
        success: false,
        message: `You can save up to ${MAX_ADDRESSES_PER_USER} addresses.`,
      });
    }

    // Delivery check + address text, dono server pe coordinates se
    let location;

    try {
      const delivery = await checkDeliverable({ latitude, longitude });

      if (!delivery.available) {
        return res.status(400).json({
          success: false,
          message: "Sorry, delivery is not available at this location.",
        });
      }

      location = await reverseGeocode({ latitude, longitude });
    } catch (err) {
      console.error("Address verification failed:", err.message);

      return res.status(503).json({
        success: false,
        message: "Unable to verify this location right now. Please try again.",
      });
    }

    if (!location?.address) {
      return res.status(400).json({
        success: false,
        message: "We couldn't verify this location. Please pick it again.",
      });
    }

    const existingAddresses = await Address.findOne({ user: userId });
    let shouldBeDefault = isDefault;
    if (!existingAddresses) {
      shouldBeDefault = true;
    }

    if (existingAddresses && shouldBeDefault) {
      await Address.updateMany(
        { user: userId, isDefault: true },
        { $set: { isDefault: false } }
      );
    }

    const userAddress = await Address.create({
      user: userId,
      houseNumber,
      locality,
      landmark,
      addressType,
      isDefault: shouldBeDefault,
      address: location.address,
      longitude,
      latitude,
    });

    return res.status(201).json({
      success: true,
      userAddress,
      message: "Address created successfully",
    });
  } catch (error) {
    console.error("Address error", error);

    return res.status(500).json({
      success: false,
      message: "Unable to save your details. please try again",
    });
  }
};

export const getAddresses = async (req, res) => {
  try {
    const userId = req.user.id;
    const addresses = await Address.find({ user: userId });

    res.status(200).json({
      success: true,
      addresses,
    });
  } catch (error) {
    console.error("Address error", error);

    return res.status(500).json({
      success: false,
      message: "Unable to get your address. please try again",
    });
  }
};

export const deleteAddress = async (req, res) => {
  const session = await mongoose.startSession();

  try {
    const { addressId } = req.params;
    const userId = req.user.id;

    await session.startTransaction();

    const user = await User.findById(userId).session(session);

    if (!user) {
      await session.abortTransaction();

      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const address = await Address.findOne({
      user: userId,
      _id: addressId,
    }).session(session);

    if (!address) {
      await session.abortTransaction();

      return res.status(404).json({
        success: false,
        message: "User address not found",
      });
    }

    if (address.isDefault) {
      const remainingAddresses = await Address.find({
        user: userId,
        _id: { $ne: addressId },
      }).session(session);

      if (remainingAddresses.length > 0) {
        remainingAddresses[0].isDefault = true;
        await remainingAddresses[0].save({ session });
      }
    }

    await Address.deleteOne({ user: userId, _id: addressId }).session(session);
    await session.commitTransaction();

    return res.status(200).json({
      success: true,
      message: "Address deleted successfully",
    });
  } catch (error) {
    await session.abortTransaction();
    console.error("Address error", error);

    return res.status(500).json({
      success: false,
      message: "Unable to delete your address, please try again.",
    });
  } finally {
    await session.endSession();
  }
};
