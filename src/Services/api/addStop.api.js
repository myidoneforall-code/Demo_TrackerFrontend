import api from "./api";

/* =========================
   ➕ ADD STOP
   POST /api/add-stop
========================= */
export const addStopApi = async (payload) => {
  return await api.post("/api/add-stop", payload);
};

/* =========================
   📥 FETCH ALL STOPS
   GET /api/add-stop
========================= */
export const fetchStopsApi = async () => {
  return await api.get("/api/add-stop");
};

/* =========================
   ✏️ UPDATE STOP
   PUT /api/add-stop/:id
========================= */
export const updateStopApi = async (id, payload) => {
  if (!id) throw new Error("Stop ID is required for update");
  return await api.put(`/api/add-stop/${id}`, payload);
};

/* =========================
   ❌ DELETE STOP
   DELETE /api/add-stop/:id
========================= */
export const deleteStopApi = async (id) => {
  if (!id) throw new Error("Stop ID is required for delete");
  return await api.delete(`/api/add-stop/${id}`);
};
