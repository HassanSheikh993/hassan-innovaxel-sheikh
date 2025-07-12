import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
   originalURL: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  accessCount: {
    type: Number,
    default: 0,
  },
}, { timestamps: true }); 


export const urlDB =new mongoose.model("url",urlSchema);
