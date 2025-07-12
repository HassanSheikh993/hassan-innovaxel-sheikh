import { urlDB } from "../model/url.js";

export const deleteURL = async(req,res)=>{
    try{
        const shortCode = req.params.code;
        const checkUrl = await urlDB.findOne({shortCode:shortCode});
        if(!checkUrl){
        return res.status(404).json({message:"URL not found"})
      }
      await urlDB.deleteOne({shortCode:checkUrl.shortCode})
      res.sendStatus(204);
    }catch(err){
         console.error("Update Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
    }
}