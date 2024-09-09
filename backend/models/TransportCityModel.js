import mongoose from "mongoose";

const TransportSchema = new mongoose.Schema({
    TransportCities: { type: String, required: true },
    image: {type:String, required:true}
})

const TransportCityModel = mongoose.models.TransportCity || mongoose.model('transport',TransportSchema);
export default TransportCityModel;