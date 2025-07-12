import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./route.js";

dotenv.config()

const app = express();
const port = process.env.PORT;
const url = process.env.DB_URL;



app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect(url).then(()=>console.log("CONNECTED WITH DB")).catch((err)=>console.log("ERROR WILE CONNECTING WITH DB ",err));

app.use("/",router);


app.listen(port,()=>{
    console.log("server started at port ",port)
})

