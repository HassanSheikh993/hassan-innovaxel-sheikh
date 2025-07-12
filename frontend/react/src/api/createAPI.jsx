import { api } from "./baseApi";

export const createURL = async (originalURL) => {
  console.log("originalURL ", originalURL);
  const result = await api.post("/shorten", { originalURL }); 
  return result.data;
};