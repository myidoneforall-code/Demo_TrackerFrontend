import api from "./api"; // your axios instance

/* =========================
   ➕ ADD BUS
   POST /api/add-bus
========================= */
export const addBusApi = (payload) => {
  return api.post("/api/add-bus", payload);
};

/* =========================
   📥 FETCH ALL BUSES
   GET /api/add-bus
========================= */
export const fetchBusesApi = () => {
  return api.get("/api/add-bus");
};

/* =========================
   ✏️ UPDATE BUS
   PUT /api/add-bus/:id
========================= */
export const updateBusApi = (id, payload) => {
  return api.put(`/api/add-bus/${id}`, payload);
};

/* =========================
   ❌ DELETE BUS
   DELETE /api/add-bus/:id
========================= */
export const deleteBusApi = (id) => {
  return api.delete(`/api/add-bus/${id}`);
};

export const fetchRoutesApi = () => {
  return api.get("/api/add-bus/routes");
};