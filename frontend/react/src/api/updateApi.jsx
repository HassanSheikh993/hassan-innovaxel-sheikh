import { api } from "./baseApi";

export const updateURL = async (shortCode, updatedUrl) => {
  const result = await api.put(`/shorten/${shortCode}`, { url: updatedUrl }); // ✅ correct key
  return result;
};
