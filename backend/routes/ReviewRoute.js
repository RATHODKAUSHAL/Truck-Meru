import express from 'express';
import { addReview, listReview, removeReview } from '../controllers/ReviewController.js';

const ReviewRouter = express.Router();

ReviewRouter.post("/add", addReview)
ReviewRouter.get(`/list`, listReview)
ReviewRouter.post("/delete", removeReview)




export default ReviewRouter;