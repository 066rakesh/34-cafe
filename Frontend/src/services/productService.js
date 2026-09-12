import API from "./api";

export const getAllProducts = async () => {
  return API.get("/api/products");
};
