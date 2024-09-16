import express from 'express';
import { addReview, listReview, removeReview, updateReview } from '../controllers/ReviewController.js';

const ReviewRouter = express.Router();

ReviewRouter.post("/add", addReview)
ReviewRouter.get(`/list`, listReview)
ReviewRouter.post("/delete", removeReview)
ReviewRouter.put("/update/:id", updateReview)




export default ReviewRouter;