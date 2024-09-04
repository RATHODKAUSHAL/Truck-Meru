import express from "express"
import multer from 'multer'
import { addCity, editCity, getCityByName, listCity, removeCity } from "../controllers/CityController.js"

const CityRouter = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb) => { //cb means callback
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

CityRouter.post("/add",upload.single("image"),addCity)
CityRouter.get(`/list`, listCity)
CityRouter.post("/delete", removeCity)
CityRouter.post("/Edit", editCity )
CityRouter.get(`/singlecity/:CityName`,getCityByName )

export default CityRouter;