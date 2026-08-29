import API from "./api";

export const checkDelivery = async (userLocation, signal) => {
  return API.post("/delivery/check", userLocation, {
    signal,
  });
};
