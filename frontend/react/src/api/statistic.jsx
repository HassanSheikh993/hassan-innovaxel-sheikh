import { api } from "./baseApi";


export const statisticsUrl = async(url)=>{
    const result = await api.get(`/shorten/statistic/${url}`);
    return result.data;
} 