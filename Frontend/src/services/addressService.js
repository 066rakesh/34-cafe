import API from "./api";

export const createAddress = async (addressData) => {
  return API.post("/api/addresses", addressData);
};

export const getAddressesApi = async () => {
  return API.get("/api/addresses");
};

export const deleteAddressApi = async (addressId) => {
  return API.delete(`/api/addresses/${addressId}`);
};
