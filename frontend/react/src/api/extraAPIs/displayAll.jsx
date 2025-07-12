import { api } from "../baseApi";

export const displayAllUrl = async()=>{
    const result = await api.get("/display");
    return result.data;

}