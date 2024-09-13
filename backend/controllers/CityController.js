import CityModel from "../models/CityModel.js";
import fs from "fs/promises"; // Use fs.promises for async/await

const addCity = async (req, res) => {
    let image = req.files?.image ? req.files.image[0].filename : null;
    let CityIcon = req.files?.CityIcon ? req.files.CityIcon[0].filename : null;

    const City = new CityModel({
        CityName: req.body.CityName,
        CityHeader: req.body.CityHeader,
        description: req.body.description,
        Citydescription: req.body.Citydescription,
        image: image,
        CityIcon: CityIcon
    });

    try {
        await City.save();
        res.json({ success: true, message: "City Added Successfully" });
    } catch (error) {
        console.error("Error adding city:", error);
        res.status(500).json({ success: false, message: "Error adding city" });
    }
};

const listCity = async (req, res) => {
    try {
        const { id } = req.params;
        const cityName = req.query.name;

        let filter = {};

        if (id) {
            filter = { _id: id };
        } else if (cityName) {
            filter = { CityName: { $regex: new RegExp(cityName, 'i') } };
        }

        const cities = await CityModel.find(filter);

        if (id) {
            if (cities.length === 0) {
                return res.status(404).json({ success: false, message: "City not found" });
            }
            return res.json({ success: true, data: cities[0] });
        }

        res.json({ success: true, data: cities });
    } catch (error) {
        console.error("Error fetching cities:", error);
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
        console.error("Error fetching city by name:", error);
        return res.status(500).json({ message: "An error occurred", error });
    }
};

const removeCity = async (req, res) => {
    try {
        const { id } = req.body;
        const city = await CityModel.findById(id);
        if (city && city.image) {
            await fs.unlink(`uploads/${city.image}`);
        }
        await CityModel.findByIdAndDelete(id);
        res.json({ success: true, message: "City Deleted Successfully" });
    } catch (error) {
        console.error("Error deleting city:", error);
        res.status(500).json({ success: false, message: "Error deleting city" });
    }
};

const editCity = async (req, res) => {
    const { CityName, CityHeader, description, Citydescription } = req.body;
    const cityId = req.params.id;

    if (!CityName) {
        return res.status(400).json({ success: false, message: 'CityName is required' });
    }

    try {
        const city = await CityModel.findById(cityId);
        if (!city) {
            return res.status(404).json({ success: false, message: 'City not found' });
        }

        if (req.file) {
            const oldImagePath = `uploads/${city.image}`;

            // Check if the old image exists before attempting to delete
            try {
                await fs.unlink(oldImagePath);
                console.log('Old image deleted successfully.');
            } catch (err) {
                console.error('Error deleting old image:', err);
            }

            city.image = req.file.filename;
        }

        if (CityName) city.CityName = CityName;
        if (CityHeader) city.CityHeader = CityHeader;
        if (description) city.description = description;
        if (Citydescription) city.Citydescription = Citydescription;

        const updatedCity = await city.save();

        res.status(200).json({ success: true, message: 'City updated successfully', data: updatedCity });
    } catch (error) {
        console.error("Error updating city:", error);
        res.status(500).json({ success: false, message: 'Error updating city' });
    }
};

export { addCity, listCity, getCityByName, removeCity, editCity };
