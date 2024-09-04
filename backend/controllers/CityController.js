import CityModel from "../models/CityModel.js";
import fs from "fs"

const addCity = async(req, res) => {

    let image_filename = `${req.file.filename}`;

    const City = new CityModel({
        CityName:req.body.CityName,
        CityHeader:req.body.CityHeader,
        description : req.body.description,
        Citydescription : req.body.Citydescription,
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

const listCity = async(req, res) => {
    try {
        const cityName = req.query.name;

        let filter = {};
        if(cityName){
            filter = {name: {$regex : new RegExp(cityName, 'i')}};
        }
        const city = await CityModel.find(filter);
        res.json({success:true, data:city})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const getCityByName = async (req, res) => {
    try {
        const { CityName } = req.params;
        const city = await CityModel.findOne({ CityName });

        if (city) {
            return res.status(200).json(city);
        } else {
            return res.status(404).json({ message: "City not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "An error occurred", error });
    }
};

const removeCity = async (req, res) => {
    try{
        const city = await CityModel.findById(req.body.id);
        fs.unlink(`uploads/${city.image}`, () => {})
        //to delete the city by id
        await CityModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"City Deleted Successfully"})
    }catch(error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const editCity = async (req, res) => {
    try {
        const city = await CityModel.findById(req.body.id);

        if(!city){
            return res.json({success:false, message:"City not found"});
        }

        if(req.file) {
            const oldImage = `uploads/${city.image}`;
            fs.unlink(oldImage, (err) => {
                if(err) {
                    console.log("Error deleting old image:" , err)
                }
            });
            city.image = req.file.filename;
        }

        city.CityName = req.body.CityName || city.CityName;
        city.CityHeader = req.body.CityHeader || city.CityHeader;
        city.description = req.body.description || city.description;
        city.Citydescription = req.body.Citydescription || city.Citydescription;

        await city.save();
        res.json({success:true, message: "City updated successfully", data:city});
    } catch (error) {
        console.error("Error:", error);
        res.json({ success: false, message: "Error" });
    }
}
 
export {addCity, listCity, getCityByName, removeCity, editCity}