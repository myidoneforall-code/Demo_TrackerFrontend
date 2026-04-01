// Services/api/led.api.js

import api from "./api";

export const fetchLedDisplayApi = async () => {
  return await api.get("/api/led-display");
};