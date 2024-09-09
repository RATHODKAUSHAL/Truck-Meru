import express from "express";
import { Addtransportcity, Listtransportcity } from "../controllers/TransportCityController.js";
import multer from "multer";

const TransportRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb) => { //cb means callback
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})
TransportRouter.post("/transportcity", upload.single("image") ,Addtransportcity);
TransportRouter.get("/list", Listtransportcity)

export default TransportRouter;