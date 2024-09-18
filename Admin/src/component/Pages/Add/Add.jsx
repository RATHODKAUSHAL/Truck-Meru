import React, { useState, useEffect, useRef } from "react";
import "./Add.css";
import upload_area from "../../../assets/upload_area.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Editor } from '@tinymce/tinymce-react';

const Add = () => {
  const url = "http://localhost:3000";
  const [image, setImage] = useState(null);
  const [cityIcon, setCityIcon] = useState(null);
  const editorRef = useRef(null);

  const [data, setData] = useState({
    CityName: "",
    CityHeader: "",
    description: "",
    MetaData: "",
    Citydescription: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setData((prevData) => ({ ...prevData, Citydescription: content }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("CityName", data.CityName);
    formData.append("CityHeader", data.CityHeader);
    formData.append("description", data.description);
    formData.append("MetaData", data.MetaData);
    formData.append("Citydescription", data.Citydescription);
    formData.append("image", image);
    formData.append("CityIcon", cityIcon);

    try {
      const response = await axios.post(`${url}/api/city/add`, formData);
      if (response.data.success) {
        setData({
          CityName: "",
          CityHeader: "",
          description: "",
          MetaData: "",
          Citydescription: "",
        });
        setImage(null);
        setCityIcon(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("There was an error adding the city:", error);
      toast.error("There was an error adding the city");
    }
  };

  useEffect(() => {
    console.table(data);
  }, [data]);

  return (
    <div className="add">
      <form
        className="flex flex-col p-4 md:p-6 lg:p-8 bg-white shadow-md rounded-lg"
        onSubmit={onSubmitHandler}
      >
        <div className="flex gap-3 justify-end mb-6">
          <button
            type="submit"
            className="bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition"
          >
            ADD
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
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="Upload Preview"
              className="w-full max-w-xs object-cover rounded-md border border-gray-300"
            />
          </label>
          <input
            onChange={(event) => setImage(event.target.files[0])}
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
            <label className="text-gray-700" htmlFor="CityIcon">
              City Icon
            </label>
            <input
              onChange={(event) => setCityIcon(event.target.files[0])}
              type="file"
              name="CityIcon"
              id="CityIcon"
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
            <label className="text-gray-700" htmlFor="MetaData">
            meta Data
            </label>
            <textarea
              onChange={onChangeHandler}
              value={data.MetaData}
              name="MetaData"
              id="MetaData"
              rows="4"
              placeholder="Enter City Meta Data"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="Citydescription">
              City Description
            </label>
            <Editor
              value={data.Citydescription}
              onEditorChange={handleEditorChange}
              apiKey="t30ujsyvwgdpoavm9zywyk8nv8oid2afl2ittgu3d33aiv5j"
              init={{
                height: 300,
                menubar: true,
                plugins: [
                  'advlist autolink lists link image charmap preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help',
                content_css: 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css',
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
