import API from "./api";

export const createOrder = async (orderData) => {
  return API.post("/api/payment/create-order", orderData);
};

export const verifyPayment = async (verificationData) => {
  return API.post("/api/payment/verify-payment", verificationData);
};
