import { fetchStopsApi } from "../../Services/api/addStop.api";

export const getStopsData = async () => {
  try {
    const res = await fetchStopsApi();

    if (Array.isArray(res?.data)) return res.data;
    if (Array.isArray(res)) return res;

    return [];
  } catch (error) {
    console.error("Error fetching stops:", error);
    return [];
  }
};
