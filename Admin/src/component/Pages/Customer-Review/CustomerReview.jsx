import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CustomerReview = () => {
  const { id } = useParams();  // To get the review id for edit
  const navigate = useNavigate();  // To navigate after successful add/edit
  const url = "http://localhost:3000";
  
  const [isEdit, setIsEdit] = useState(false);  // Track if it's an edit operation
  const [data, setData] = useState({
    CustomerName: "",
    CityName: "",
    CustomerReview: "",
    Ranking: "",
  });

  useEffect(() => {
    if (id) {
      setIsEdit(true);  // If there is an id, it's an edit operation
      // Fetch the review data for the given id
      const fetchReview = async () => {
        try {
          // Use the correct API URL for fetching the review by ID
          const response = await axios.get(`${url}/api/review/list/${id}`);
          // console.log(response.data.success)
          if (response.data.success) {
            const Reviewdata = response.data
            // console.log(ReviewData)
            setData({
            CustomerName:Reviewdata.CustomerName || "",
            CityName:Reviewdata.CityName || "",
            CustomerReview:Reviewdata.CustomerReview || "",
            Ranking:Reviewdata.Ranking || "",
            }); // Set the existing review data in the form
            console.log(Reviewdata)
          } else {
            toast.error("Error fetching review details.");
          }
        } catch (error) {
          toast.error("Error fetching review data.");
        }
      };
      fetchReview();
    }
  }, [id]);
  

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {
      if (isEdit) {
        // If editing, update the review
        const response = await axios.put(`${url}/api/review/update/${id}`, data);
        if (response.data.success) {
          toast.success("Review updated successfully!");
          navigate("/admin/Customer-List");  // Redirect after edit
        } else {
          toast.error("Error updating review.");
        }
      } else {
        // If adding a new review
        const response = await axios.post(`${url}/api/review/add`, data);
        if (response.data.success) {
          setData({
            CustomerName: "",
            CityName: "",
            CustomerReview: "",
            Ranking: "",
          });
          toast.success("Review added successfully!");
        } else {
          toast.error("Error adding review.");
        }
      }
    } catch (error) {
      toast.error("There was an error submitting the review.");
    }
  };
  console.log(data)

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={onSubmitHandler}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-gray-800 text-2xl">
            {isEdit ? "Edit Review" : "Add Review"}
          </h1>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
            >
              {isEdit ? "Update" : "Add"}
            </button>
            <a
              href="/admin/Customer-List"
              className="bg-gray-800 text-white rounded-lg py-2 px-4 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition"
            >
              Back
            </a>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-xl font-medium text-gray-600 m-2 block" htmlFor="CustomerReview">
            Review
          </label>
          <textarea
            onChange={onChangeHandler}
            value={data.CustomerReview}
            id="CustomerReview"
            name="CustomerReview"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter Your Review Here"
            rows="4"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-xl font-medium text-gray-600 m-2 block" htmlFor="CustomerName">
              Customer Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CustomerName}
              id="CustomerName"
              name="CustomerName"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter Customer Name"
              type="text"
            />
          </div>
          <div>
            <label className="text-xl font-medium text-gray-600 m-2 block" htmlFor="CityName">
              City Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CityName}
              id="CityName"
              name="CityName"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter City Name"
              type="text"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-xl font-medium text-gray-600 m-2 block" htmlFor="Ranking">
            City Ranking
          </label>
          <select
            onChange={onChangeHandler}
            value={data.Ranking}
            id="Ranking"
            name="Ranking"
            className="w-full md:w-1/4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CustomerReview;
