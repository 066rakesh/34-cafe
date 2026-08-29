import API from "./api";

export const signupUser = (userData) => {
  return API.post("/auth/signup", userData);
};

export const loginUser = (userData) => {
  return API.post("/auth/login", userData);
};

export const verifyOtp = (otpData) => {
  return API.post("/auth/verify-otp", otpData);
};

export const getMe = () => {
  return API.get("auth/me");
};

export const updateMe = (userData) => {
  return API.put("auth/me", userData);
};
