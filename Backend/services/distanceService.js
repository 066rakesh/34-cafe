import axios from "axios";
import { CAFE_LOCATION } from "../constants/location.js";

export const getRoadDistance = async ({ latitude, longitude }) => {
  try {
    const response = await axios.post(
      "https://routes.googleapis.com/directions/v2:computeRoutes",
      {
        origin: {
          location: {
            latLng: {
              latitude: CAFE_LOCATION.latitude,
              longitude: CAFE_LOCATION.longitude,
            },
          },
        },

        destination: {
          location: {
            latLng: {
              latitude,
              longitude,
            },
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
          "X-Goog-FieldMask": "routes.distanceMeters",
        },
      }
    );

    const distanceMeters = response.data?.routes?.[0]?.distanceMeters;

    if (distanceMeters === null || distanceMeters === undefined) return null;

    const distanceInKm = distanceMeters / 1000;
    return distanceInKm;
  } catch (error) {
    console.error("Google Routes API error:", error);
    throw error;
  }
};
