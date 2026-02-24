import { fetchBusesApi } from "../../Services/api/addBus.api";

export const getBusesData = async () => {
  try {
    const res = await fetchBusesApi();

    // Case 1: axios standard response
    if (Array.isArray(res?.data)) {
      return res.data;
    }

    // Case 2: backend returns array directly
    if (Array.isArray(res)) {
      return res;
    }

    return [];
  } catch (error) {
    console.error("Error fetching buses:", error);
    return [];
  }
};
