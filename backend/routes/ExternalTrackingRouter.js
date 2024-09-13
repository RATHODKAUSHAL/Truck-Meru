import express from 'express';
import multer from 'multer';
import { addTracking } from '../controllers/ExternalTrackingController.js';

const TrackingRouter = express.Router();

const storage = multer.diskStorage({
    destination:"Images",
    filename:(req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage});
TrackingRouter.post('/add', upload.single("image"), addTracking)

export default TrackingRouter;