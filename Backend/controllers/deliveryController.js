import { getRoadDistance } from "../services/distanceService.js";
import { MAX_DELIVERY_DISTANCE_KM } from "../constants/delivery.js";
import { reverseGeocode } from "../services/geocodingService.js";

export const checkDelivery = async (req, res) => {
  try {
    const { latitude: lat, longitude: lng } = req.body;

    if (
      lat === null ||
      lat === undefined ||
      lng === null ||
      lng === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Latitude and longitude are required",
      });
    }

    if (
      (typeof lat === "string" && lat.trim() === "") ||
      (typeof lng === "string" && lng.trim() === "")
    ) {
      return res.status(400).json({
        success: false,
        message: "Latitude and longitude are required",
      });
    }

    const latitude = Number(lat);
    const longitude = Number(lng);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return res.status(400).json({
        success: false,
        message: "Invalid coordinates",
      });
    }

    if (latitude < -90 || latitude > 90) {
      return res.status(400).json({
        success: false,
        message: "Invalid latitude",
      });
    }

    if (longitude < -180 || longitude > 180) {
      return res.status(400).json({
        success: false,
        message: "Invalid longitude",
      });
    }

    const [distanceInKm, address] = await Promise.all([
      getRoadDistance({
        latitude,
        longitude,
      }),
      reverseGeocode({
        latitude,
        longitude,
      }),
    ]);

    if (distanceInKm === null) {
      return res.status(500).json({
        success: false,
        message:
          "Unable to check delivery availability. Please try again later.",
      });
    }

    if (address === null) {
      return res.status(500).json({
        success: false,
        message: "Unable to find your location. Please try again later.",
      });
    }

    if (distanceInKm > MAX_DELIVERY_DISTANCE_KM) {
      return res.status(200).json({
        success: true,
        available: false,
        message: "Sorry, delivery is not available at your location.",
        distance: distanceInKm,
        location: address,
      });
    }

    return res.status(200).json({
      success: true,
      available: true,
      message: "Delivery is available at your location.",
      distance: distanceInKm,
      location: address,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Unable to check delivery availability. Please try again later.",
    });
  }
};
