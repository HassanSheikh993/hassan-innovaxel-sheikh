import { urlDB } from "../model/url.js";

export const statistics = async(req,res)=>{
   try{
     const shortCode = req.params.code;
     console.log("stat ",shortCode)
        const checkUrl = await urlDB.findOne({ shortCode });
        if(!checkUrl){
        return res.status(404).json({message:"URL not found"})
      }
      const result = await urlDB.findOne({ shortCode });
      res.status(200).json(result);
   }catch(err){
     console.error("Update Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
   }
}
