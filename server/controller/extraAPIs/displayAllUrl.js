import { urlDB } from "../../model/url.js";

export const displayAllUrl = async (req,res)=>{
    const result = await urlDB.find();
    if(!result){
       return res.status(200).json({message:"No thing to display"})
    }
    res.status(200).json(result);
}