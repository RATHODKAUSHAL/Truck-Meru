import mongoose from 'mongoose';

const FaqSchema = new mongoose.Schema({
    CityName : {type:String, required:true},
    Question : {type:String, required:true},
    Answer : {type:String, required:true},
})

const FaqModel = mongoose.models.Faq || mongoose.model("faq", FaqSchema);
export default FaqModel;