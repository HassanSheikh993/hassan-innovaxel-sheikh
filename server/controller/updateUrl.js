import { urlDB } from "../model/url.js";
import validator from "validator";

export const updateOriginalUrl = async(req,res)=>{
    try{
        const shortCode = req.params.code;
    const {url} = req.body;
    console.log(url, shortCode)

   if (!url || !validator.isURL(url, { require_protocol: true })){
      return res.status(400).json({ message: "Invalid or missing URL" });
    }


     const checkUrl = await urlDB.findOne({shortCode:shortCode});
        if(!checkUrl){
        return res.status(404).json({message:"URL not found"})
      }
      
    const updatedUrl = await urlDB.findOneAndUpdate(
      { shortCode },
      { $set: { originalURL: url } },
      { new: true } 
    );

     res.status(200).send(updatedUrl)

    }catch(err){
        console.error("Update Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
    }
}