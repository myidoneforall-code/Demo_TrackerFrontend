import { State, City } from "country-state-city";

// ✅ Get all states (India)
export const getStates = () => {
  return State.getStatesOfCountry("IN");
};

// ✅ Get districts (cities) based on state
export const getDistricts = (stateCode) => {
  if (!stateCode) return [];
  return City.getCitiesOfState("IN", stateCode);
};