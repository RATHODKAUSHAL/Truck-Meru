import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    CustomerName: { type: String, required: true },
    CityName: { type: String, required: true },
    CustomerReview: { type: String, required: true },
    Ranking: { type: Number, required: true, min: 1, max: 5 }, // Validation added
}, {
    collection: 'reviews' // Explicitly specify the collection name
});

const ReviewModel = mongoose.models.Review || mongoose.model("Review", ReviewSchema);
export default ReviewModel;
