import API from "./api";

export const chatbot = (message) => {
  return API.post("/api/chatbot", { message });
};
