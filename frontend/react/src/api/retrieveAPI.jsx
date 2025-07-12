import { api } from "./baseApi";

export const retrieveUrl = async(url)=>{
    const result = api.get(`/shorten/${url}`);
    return (await result).data;
}