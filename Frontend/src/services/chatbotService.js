import API from "./api";

export const chatbot = (message) => {
  return API.post("/chatbot", { message });
};
