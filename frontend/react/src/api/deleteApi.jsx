import { api } from "./baseApi";

export const deleteUrl = async(url)=>{
    const result = await api.delete(`/shorten/${url}`)
    return result;
}