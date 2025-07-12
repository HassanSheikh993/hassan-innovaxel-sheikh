import { urlDB } from "../model/url.js";

export const retrieveUrl = async (req,res)=>{
    const shortCode = req.params.code;
    const checkUrl = await urlDB.findOne({shortCode:shortCode});
    if(!checkUrl){
        return res.status(404).json({message:"URL not found"})
    }
    res.status(200).json({message:"Url Found",url:checkUrl})


}