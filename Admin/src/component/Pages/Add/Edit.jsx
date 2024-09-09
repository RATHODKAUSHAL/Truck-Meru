import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import upload_area from "../../../assets/upload_area.png";
import Texteditor from "../../Texteditor/Texteditor";
import "./Add.css";

const Edit = () => {
  const { id } = useParams(); // Get the 'id' from the route to fetch specific city data
  const navigate = useNavigate();
  const url = "http://localhost:3000";

  const [data, setData] = useState({});
  const [description, setDescription] = useState("")

  // Fetch city data when updating an existing city
  const fetchCityData = async (id) => {
    try {
      const response = await axios.get(`${url}/api/city/list/${id}`);
      //   console.log(response.data); // Log entire response data for debugging

      if (response.data.success) {
        if (response.data.data) {
          // Check if city data is present
          const cityData = response.data.data;
          setData({
            CityName: cityData.CityName || "",
            CityHeader: cityData.CityHeader || "",
            description: cityData.description || "",
            image: null, // Handle image separately
            imagePreview: cityData.image || upload_area, // Update image preview if needed
          });
          setDescription(cityData.Citydescription)
          //   console.log(data)
        } else {
          toast.error("City data is missing in the response.");
        }
      } else {
        toast.error("Failed to fetch city data.");
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
      toast.error("Error loading city data.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchCityData(id); // Fetch city data if 'id' exists in the route
    }
  }, [id]);

  // Handle input changes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file input changes
  const onFileChangeHandler = (e) => {
    const file = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      image: file,
      imagePreview: file ? URL.createObjectURL(file) : upload_area,
    }));
  };

  // Submit form data (update or add new city)
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log data to ensure it is being captured correctly
    console.log("Submitting form data:", data);
  
    const formData = new FormData();
    formData.append("CityName", data.CityName || "");
    formData.append("CityHeader", data.CityHeader || "");
    formData.append("description", data.description || "");
    formData.append("Citydescription", description || "");
  
    if (data.image) {
      formData.append("image", data.image);
    } else {
      console.warn("No image provided");
    }
  
    try {
      if (id) {
        // If 'id' exists, update the existing city
        const response = await axios.put(`${url}/api/city/edit/${id}`, formData);
        if (response.status === 200) {
          toast.success("City updated successfully!");
        } else {
          throw new Error("Failed to update city. Check the API response.");
        }
      }
      navigate("/admin/city");
    } catch (error) {
      console.error("Failed to save city data:", error);
      toast.error("Failed to save city data.");
    }
    console.log(formData)
  };

  return (
    <div className="add">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 md:p-6 lg:p-8 bg-white shadow-md rounded-lg"
      >
        <div className="flex gap-3 justify-end mb-6">
          <button
            type="submit"
            className="bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition"
          >
            Update
          </button>
          <a
            href="/admin/city"
            className="bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
          >
            Back
          </a>
        </div>

        <div className="add-img-upload flex flex-col items-center mb-10">
          <p className="text-gray-700 mb-3">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={`${url}/images/` + data.imagePreview}
              alt="Upload Preview"
              className="w-full max-w-xs object-cover rounded-md border border-gray-300"
            />
          </label>
          <input
            onChange={onFileChangeHandler}
            type="file"
            name="image"
            id="image"
            hidden
          />
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <label className="text-gray-700" htmlFor="CityName">
              City Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CityName}
              type="text"
              name="CityName"
              id="CityName"
              placeholder="Enter City Name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="CityHeader">
              City Header
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CityHeader}
              type="text"
              name="CityHeader"
              id="CityHeader"
              placeholder="Enter City Header"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              id="description"
              rows="4"
              placeholder="Enter City Description"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="Citydescription">
              City Description
            </label>
            <Texteditor
              onChange={(text) =>
                setDescription(text)
              }
              value={description}
              name="Citydescription"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
