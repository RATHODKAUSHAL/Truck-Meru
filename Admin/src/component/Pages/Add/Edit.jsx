import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import upload_area from "../../../assets/upload_area.png";
import { Editor } from "@tinymce/tinymce-react";
import "./Add.css";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3000";
  const editorRef = useRef(null);

  const [data, setData] = useState({
    CityName: "",
    CityHeader: "",
    description: "",
    Citydescription: "",
    image: null,
    imagePreview: upload_area,
    CityIcon: null,
  });

  const fetchCityData = async (id) => {
    try {
      const response = await axios.get(`${url}/api/city/list/${id}`);
      if (response.data.success) {
        const cityData = response.data.data;
        setData({
          CityName: cityData.CityName || "",
          CityHeader: cityData.CityHeader || "",
          description: cityData.description || "",
          Citydescription: cityData.Citydescription || "",
          image: null,
          imagePreview: cityData.image ? `${url}/images/${cityData.image}` : upload_area,
          CityIcon: null,
        });
      } else {
        toast.error("Failed to fetch city data.");
      }
    } catch (error) {
      toast.error("Error loading city data.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchCityData(id);
    }
  }, [id]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onFileChangeHandler = (e) => {
    const file = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: file,
      imagePreview: file ? URL.createObjectURL(file) : upload_area,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("CityName", data.CityName || "");
    formData.append("CityHeader", data.CityHeader || "");
    formData.append("description", data.description || "");
    formData.append("Citydescription", data.Citydescription || "");

    if (data.image) {
      formData.append("image", data.image);
    }
    
    if (data.CityIcon) {
      formData.append("CityIcon", data.CityIcon);
    }

    // Log FormData to inspect its contents
    console.log("FormData:", Array.from(formData.entries()));

    try {
      if (id) {
        const response = await axios.put(`${url}/api/city/edit/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Log the response to check its content
        console.log("Response:", response);

        if (response.status === 200) {
          toast.success("City updated successfully!");
          navigate("/admin/city");
        } else {
          throw new Error("Failed to update city.");
        }
      }
    } catch (error) {
      console.error("Error updating city:", error.response ? error.response.data : error.message);
      toast.error("Failed to save city data.");
    }
  };

  return (
    <div className="add container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col bg-white shadow-md rounded-lg p-6 space-y-6 max-w-full mx-auto">
        <div className="flex gap-3 justify-end">
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white rounded-full py-2 px-6 transition-all">
            Update
          </button>
          <a href="/admin/city" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 px-6 transition-all">
            Back
          </a>
        </div>

        <div className="add-img-upload flex flex-col items-center mb-6">
          <p className="text-lg font-medium mb-2">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={data.imagePreview}
              alt="Upload Preview"
              className="w-full max-w-xs object-cover rounded-md border border-gray-300"
            />
          </label>
          <input onChange={onFileChangeHandler} type="file" name="image" id="image" hidden />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="CityName" className="block text-sm font-medium text-gray-700">
              City Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CityName}
              type="text"
              name="CityName"
              id="CityName"
              placeholder="Enter City Name"
              className="mt-1 p-3 text-black font-medium block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="CityHeader" className="block text-sm font-medium text-gray-700">
              City Header
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CityHeader}
              type="text"
              name="CityHeader"
              id="CityHeader"
              placeholder="Enter City Header"
              className="mt-1 p-3 text-black font-medium block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            id="description"
            rows="4"
            placeholder="Enter City Description"
            className="mt-1 p-3 text-black font-medium block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="CityIcon" className="block text-sm font-medium text-gray-700">
            City Icon
          </label>
          <input
            onChange={onFileChangeHandler}
            type="file"
            name="CityIcon"
            id="CityIcon"
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="Citydescription" className="block text-sm font-medium text-gray-700">
            City Description
          </label>
          <Editor
            onEditorChange={(content) =>
              setData((prevData) => ({ ...prevData, Citydescription: content }))
            }
            value={data.Citydescription}
            apiKey="t30ujsyvwgdpoavm9zywyk8nv8oid2afl2ittgu3d33aiv5j"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
                'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
             ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat'",
                content_css: 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css',
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
