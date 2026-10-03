import API from "./api";

export const signupUser = (userData) => {
  return API.post("/api/auth/signup", userData);
};

export const loginUser = (userData) => {
  return API.post("/api/auth/login", userData);
};

export const verifyOtp = (otpData) => {
  return API.post("/api/auth/verify-otp", otpData);
};

export const getMe = () => {
  return API.get("/api/auth/me");
};
