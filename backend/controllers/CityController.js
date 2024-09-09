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

const listCity = async (req, res) => {
    try {
        const { id } = req.params; // Get 'id' from URL parameters
        const cityName = req.query.name; // Get 'name' from query parameters

        let filter = {};

        if (id) {
            // If 'id' is provided, find the specific city by ID
            filter = { _id: id };
        } else if (cityName) {
            // If 'name' is provided, filter cities by name
            filter = { name: { $regex: new RegExp(cityName, 'i') } };
        }

        // Find cities based on filter
        const cities = await CityModel.find(filter);

        // If an ID was used, return a single city object
        if (id) {
            if (cities.length === 0) {
                return res.status(404).json({ success: false, message: "City not found" });
            }
            return res.json({ success: true, data: cities[0] });
        }

        // Return all cities that match the name filter
        res.json({ success: true, data: cities });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching cities" });
    }
};


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
        // Access the city ID from route parameters
        const cityId = req.params.id;

        // Find the city by ID
        const city = await CityModel.findById(cityId);

        if (!city) {
            return res.json({ success: false, message: "City not found" });
        }

        // Handle file upload if a new image is provided
        if (req.file) {
            // Define path for the old image
            const oldImage = `uploads/${city.image}`;

            // Delete the old image file
            fs.unlink(oldImage, (err) => {
                if (err) {
                    console.log("Error deleting old image:", err);
                }
            });

            // Update the city image with the new file
            city.image = req.file.filename;
        }

        // Update the city details with data from the request body
        city.CityName = req.body.CityName || city.CityName;
        city.CityHeader = req.body.CityHeader || city.CityHeader;
        city.description = req.body.description || city.description;
        city.Citydescription = req.body.Citydescription || city.Citydescription;

        // Save the updated city
        await city.save();

        // Respond with success
        res.json({ success: true, message: "City updated successfully", data: city });
    } catch (error) {
        // Log and respond with error
        console.error("Error:", error);
        res.json({ success: false, message: "Error updating city" });
    }
}

 
export {addCity, listCity, getCityByName, removeCity, editCity}