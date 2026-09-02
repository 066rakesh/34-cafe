import API from "./api";

export const checkDelivery = async (userLocation, signal) => {
  return API.post("/api/delivery/check", userLocation, {
    signal,
  });
};
