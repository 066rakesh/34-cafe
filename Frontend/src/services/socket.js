import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_BASE_API_URL, {
  autoConnect: false,
  auth: (cb) => cb({ token: localStorage.getItem("token") }),
});
