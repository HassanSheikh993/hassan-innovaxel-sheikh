import { urlDB } from "../model/url.js";
import { nanoid } from "nanoid";
import validator from "validator"

export const createUrl = async (req, res) => {
  try {
    console.log(req.body)
    const { originalURL } = req.body; 
    console.log(originalURL)

 if (!validator.isURL(originalURL, { require_protocol: true })) {
  return res.status(400).json({ message: "Invalid URL format" });
}

    let shortCode;

    while (true) {
      shortCode = nanoid(6);
      const existing = await urlDB.findOne({ shortCode });
      if (!existing) break;
    }


    const newUrl = await urlDB.create({
      originalURL,
      shortCode,
    });

    res.status(201).json({
      message: "Short URL created",
      shortCode: newUrl.shortCode,
    });

  } catch (err) {
    console.error("Error creating short URL:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
