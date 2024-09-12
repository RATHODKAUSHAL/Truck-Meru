import CityModel from "../models/CityModel.js";
import fs from "fs"

const addCity = async (req, res) => {
    // Assuming cityImage and headerImage fields are used as per the multer configuration
    let image = req.files.image ? req.files.image[0].filename : null;
    let CityIcon = req.files.CityIcon ? req.files.CityIcon[0].filename : null;

    const City = new CityModel({
        CityName: req.body.CityName,
        CityHeader: req.body.CityHeader,
        description: req.body.description,
        Citydescription: req.body.Citydescription,
        image: image, // Storing city image
        CityIcon: CityIcon // Storing header image if needed
    });

    try {
        await City.save();
        res.json({ success: true, message: "City Added Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


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
    const { CityName, CityHeader, description, Citydescription } = req.body;
    const cityId = req.params.id;

    // Validate that CityName is provided
    if (!CityName) {
        return res.status(400).json({ success: false, message: 'CityName is required' });
    }

    try {
        // Find the city by ID
        const city = await CityModel.findById(cityId);
        if (!city) {
            return res.status(404).json({ success: false, message: 'City not found' });
        }

        // If a new image is provided, delete the old image and update with the new image
        if (req.file) {
            const oldImagePath = `uploads/${city.image}`;

            // Delete old image if it exists
            fs.unlink(oldImagePath, (err) => {
                if (err) {
                    console.error('Error deleting old image:', err);
                } else {
                    console.log('Old image deleted successfully.');
                }
            });

            // Update the city image with the new file name
            city.image = req.file.filename;
        }

        // Update other fields from the request body if they are provided
        if (CityName) city.CityName = CityName;
        if (CityHeader) city.CityHeader = CityHeader;
        if (description) city.description = description;
        if (Citydescription) city.Citydescription = Citydescription;

        // Save the updated city document
        const updatedCity = await city.save();

        // Respond with success message and updated city data
        res.status(200).json({ success: true, message: 'City updated successfully', data: updatedCity });
    } catch (error) {
        // Handle any errors that occurred during the process
        console.error('Error updating city:', error);
        res.status(500).json({ success: false, message: 'Error updating city' });
    }
};




 
export {addCity, listCity, getCityByName, removeCity, editCity}