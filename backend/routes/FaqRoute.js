import express from "express"
import { addfaq, listFaq, removeFaq } from "../controllers/faqController.js";


const FaqRouter = express.Router();

FaqRouter.post("/add", addfaq);
FaqRouter.get("/list", listFaq);
FaqRouter.post("/delete", removeFaq);


export default FaqRouter;