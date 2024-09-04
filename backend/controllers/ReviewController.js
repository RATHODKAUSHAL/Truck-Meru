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


export {addReview, listReview, removeReview}