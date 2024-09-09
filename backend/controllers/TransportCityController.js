import TransportCityModel from "../models/TransportCityModel.js";


const Addtransportcity = async(req, res) => {
    let image_filename = `${req.file.filename}`;

    const City = new TransportCityModel({
        TransportCities : req.body.TransportCities,
        image:image_filename
    })

    try{
        await City.save();
        res.json({success:true, message:"City Added Successfully"})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

const Listtransportcity = async(req, res) => {
    try {
        const CityTransport = req.query.name;
    
        let filter = {};
    
        if (CityTransport) {
          filter = { name: { $regex: new RegExp(Cityfaq, "i") } };
        }
        const city = await TransportCityModel.find(filter);
          res.json({ success: true, data:city });
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
      }
}

export {Addtransportcity, Listtransportcity}