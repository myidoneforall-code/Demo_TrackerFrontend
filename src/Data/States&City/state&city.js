// import { State, City } from "country-state-city";

// // ✅ Get all states (India)
// export const getStates = () => {
//   return State.getStatesOfCountry("IN");
// };

// // ✅ Get districts (cities) based on state
// export const getDistricts = (stateCode) => {
//   if (!stateCode) return [];
//   return City.getCitiesOfState("IN", stateCode);
// };

import { getAllStates, getDistricts as getDistrictsByState } from "india-state-district";

export const getStates = () => {
  return getAllStates().map((s) => ({
    name: s.name || s.stateName,
    isoCode: s.code || s.stateCode
  }));
};

export const getDistricts = (stateCode) => {
  if (!stateCode) return [];

  return getDistrictsByState(stateCode).map((d) => ({
    name: typeof d === "string" ? d : d.name || d.districtName
  }));
};