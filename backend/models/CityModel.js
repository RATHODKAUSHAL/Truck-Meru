import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
    CityName: {type:String, required:true},
    CityHeader : {type:String, required:true},
    description : {type:String, required:true},
    MetaData : {type:String, required:true},
    Citydescription : {type:String, required:true},
    image: {type:String, required:false},
    CityIcon: {type:String, required:false},
})

const CityModel = mongoose.models.City || mongoose.model("city", CitySchema);
export default CityModel;