import { getRoadDistance } from "./distanceService.js";
import { CAFE_LOCATION } from "../constants/location.js";
import { MAX_DELIVERY_DISTANCE_KM } from "../constants/delivery.js";

const toRad = (deg) => (deg * Math.PI) / 180;

export const straightLineKm = (a, b) => {
  const R = 6371;
  const dLat = toRad(b.latitude - a.latitude);
  const dLng = toRad(b.longitude - a.longitude);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.latitude)) *
      Math.cos(toRad(b.latitude)) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

export const checkDeliverable = async ({ latitude, longitude }) => {
  const straight = straightLineKm(CAFE_LOCATION, { latitude, longitude });
  if (straight > MAX_DELIVERY_DISTANCE_KM) {
    return { available: false, distance: straight };
  }

  const distance = await getRoadDistance({ latitude, longitude });
  if (distance === null) throw new Error("Distance unavailable");

  return { available: distance <= MAX_DELIVERY_DISTANCE_KM, distance };
};
