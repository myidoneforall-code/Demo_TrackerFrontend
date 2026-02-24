import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses centrally
api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error("API Error:", err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;
