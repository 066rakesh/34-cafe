import API from "./api";

export const getMyOrders = async () => {
  return API.get("/api/orders/my-orders");
};

export const getOrderById = async (orderId) => {
  return API.get(`/api/orders/${orderId}`);
};
