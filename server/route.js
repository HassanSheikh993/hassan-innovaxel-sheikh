import express from "express";
import { createUrl } from "./controller/createUrl.js";
import { retrieveUrl } from "./controller/retrieveOriginalUrl.js";
import { updateOriginalUrl } from "./controller/updateUrl.js";
import { deleteURL } from "./controller/deleteUrl.js";
import { statistics } from "./controller/urlStatistics.js";

import { displayAllUrl } from "./controller/extraAPIs/displayAllUrl.js";

const router = express.Router();

router.post("/shorten",createUrl);
router.get("/shorten/:code",retrieveUrl);
router.put("/shorten/:code",updateOriginalUrl);
router.delete("/shorten/:code",deleteURL);
router.get("/shorten/statistic/:code",statistics)

router.get("/display",displayAllUrl)

export {router}