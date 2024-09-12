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

const upload = multer({storage : storage})
const multiUpload = upload.fields([
    { name: 'image', maxCount: 1 }, // For city image (1 file)
    { name: 'CityIcon', maxCount: 1 }, // For header image (1 file)
]);

CityRouter.post("/add",multiUpload ,addCity)
CityRouter.get(`/list/:id?`, listCity)
CityRouter.post("/delete", removeCity)
CityRouter.put("/edit/:id", editCity )
CityRouter.get(`/singlecity/:CityName`,getCityByName )
export default CityRouter;