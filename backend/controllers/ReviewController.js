import ReviewModel from "../models/ReviewModel.js";


const addReview = async (req, res) => {
    const Review = new ReviewModel({
        CustomerName: req.body.CustomerName,
        CityName: req.body.CityName,
        CustomerReview: req.body.CustomerReview,
        Ranking: req.body.Ranking,
    });

    try {
        await Review.save();
        res.json({ success: true, message: "Review Added Successfully" });
    } catch (error) {
        console.error("Error adding review:", error);
        res.json({ success: false, message: "Error adding review", error: error.message });
    }
};

const listReview = async(req, res) => {
    try {
        const cityReview = req.query.name;

        let filter = {};
        if(cityReview){
            filter = {name: {$regex : new RegExp(cityReview, 'i')}};
        }
        const city = await ReviewModel.find(filter);
        res.json({success:true, data:city})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const removeReview = async(req, res) => {
    try {
        await ReviewModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Review Deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const updateReview = async (req, res) => {
    try {
        const reviewId = req.params.id;

        const updatedReview = await ReviewModel.findByIdAndUpdate(reviewId, req.body, { new: true });

        if (!updatedReview) {
            return res.status(404).json({ success: false, message: "Review not found" });
        }

        res.json({ success: true, message: "Review updated successfully", data: updatedReview });
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ success: false, message: "Error updating review", error: error.message });
    }
};  


export {addReview, listReview, removeReview, updateReview}