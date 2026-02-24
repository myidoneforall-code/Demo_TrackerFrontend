// export const stopDetails = [
//   {
//     stopName: "Gandhipuram Bus Stand",
//     direction: "Avinashi to GP",
//     Route: "YELLOW",// change to Route
//     displayId: "1234567890123",
//     lat: 11.0171,
//     lon: 76.9561
//   },
//   {
//     stopName: "Gandhipuram Bus Stand",
//     direction: "GP to Avinashi",
//     Route: "BLUE",// change to Route
//     displayId: "1234567890456",
//     lat: 11.0168,
//     lon: 76.9558
//   },

//   {
//     stopName: "Oppanakara Street",
//     direction: "Ukkadam to GP",
//     Route: "YELLOW",
//     displayId: "2234567890123",
//     lat: 11.0142,
//     lon: 76.9601
//   },
//   {
//     stopName: "Oppanakara Street",
//     direction: "GP to Ukkadam",
//     Route: "BLUE",
//     displayId: "2234567890456",
//     lat: 11.0139,
//     lon: 76.9605
//   },

//   {
//     stopName: "Ukkadam Bus Stand",
//     direction: "GP to Ukkadam (Return)",
//     Route: "YELLOW",
//     displayId: "3234567890123",
//     lat: 11.0078,
//     lon: 76.9637
//   },
//   {
//     stopName: "Ukkadam Bus Stand",
//     direction: "Ukkadam to GP",
//     Route: "BLUE",
//     displayId: "3234567890456",
//     lat: 11.0074,
//     lon: 76.9633
//   }
// ];

// export const stopDetails = [
//   {
//     stopName: "Gandhipuram Bus Stand",
//     direction: "Avinashi to GP",
//     Route: "YELLOW",
//     displayId: "1234567890123",
//     lat: 11.0171,
//     lon: 76.9561,
//     state: "Tamil Nadu",
//     district: "Coimbatore"
//   },
//   {
//     stopName: "Gandhipuram Bus Stand",
//     direction: "GP to Avinashi",
//     Route: "BLUE",
//     displayId: "1234567890456",
//     lat: 11.0168,
//     lon: 76.9558,
//     state: "Tamil Nadu",
//     district: "Coimbatore"
//   },

//   {
//     stopName: "Oppanakara Street",
//     direction: "Ukkadam to GP",
//     Route: "YELLOW",
//     displayId: "2234567890123",
//     lat: 11.0142,
//     lon: 76.9601,
//     state: "Tamil Nadu",
//     district: "Coimbatore"
//   },
//   {
//     stopName: "Oppanakara Street",
//     direction: "GP to Ukkadam",
//     Route: "BLUE",
//     displayId: "2234567890456",
//     lat: 11.0139,
//     lon: 76.9605,
//     state: "Tamil Nadu",
//     district: "Coimbatore"
//   },

//   {
//     stopName: "Ukkadam Bus Stand",
//     direction: "GP to Ukkadam (Return)",
//     Route: "YELLOW",
//     displayId: "3234567890123",
//     lat: 11.0078,
//     lon: 76.9637,
//     state: "Tamil Nadu",
//     district: "Coimbatore"
//   },
//   {
//     stopName: "Ukkadam Bus Stand",
//     direction: "Ukkadam to GP",
//     Route: "BLUE",
//     displayId: "3234567890456",
//     lat: 11.0074,
//     lon: 76.9633,
//     state: "Tamil Nadu",
//     district: "Coimbatore"
//   }
// ];

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

