import API from "./api";

export const createAddress = async (addressData) => {
  return API.post("/addresses", addressData);
};

export const getAddressesApi = async () => {
  return API.get("/addresses");
};

export const deleteAddressApi = async (addressId) => {
  return API.delete(`/addresses/${addressId}`);
};
