import ExternalTrackingModel from "../models/ExternalTrackingModel.js";

const addTracking = async (req, res) => {
    let image = req.files?.image ? req.files.image[0].filename : null;

    const Tracking = ExternalTrackingModel({
        Title : req.body.Title,
        Number : req.body.Number,
        Email : req.body.Email,
        CityName : req.body.CityName,
        WebUrl : req.body.WebUrl,
        TrackingUrl : req.body.TrackingUrl,
        image : image,
        Address : req.body.Address,
        MetaDescription : req.body.MetaDescription,
        SubTitle : req.body.SubTitle,
        AboutContent : req.body.AboutContent,
        Content : req.body.Content,
    })
    try {
        await Tracking.save();
        res.json({success:true, message:"Externaltraking Added Successfully"})
    } catch (error) {
        console.error('error Adding Tracking', error)
        res.status(500).json({success:false, message:"Error Adding Tracking"})
    }
}

const ListTracking = async () => {
    try {
        
    } catch (error) {
        
    }
}

export {addTracking, ListTracking}