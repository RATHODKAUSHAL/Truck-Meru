import mongoose from "mongoose";
const urlRegex = /^(https?:\/\/)?([\w\d\-_]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;


const ExternalTrackingSchema = new mongoose.Schema({
    Title: {type:String, required: true},
    Number: {type:Number, required: true, length : 10 },
    Email: {type:String, required: true},
    CityName: {type:String, required: true},
    WebUrl: {type:String, required: true,
        validate: {
            validator: function(v) {
                return urlRegex.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    TrackingUrl: {type:String, required: false,
        validate: {
            validator: function(v) {
                return urlRegex.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    image: {type:String, required: false},
    Address: {type:String, required: true},
    MetaDescription: {type:String, required: true},
    SubTitle: {type:String, required: false},
    AboutContent: {type:String, required: true},
    Content: {type:String, required: true}
})

const ExternalTrackingModel = mongoose.models.tracking || mongoose.model("tracking", ExternalTrackingSchema);

export default ExternalTrackingModel;