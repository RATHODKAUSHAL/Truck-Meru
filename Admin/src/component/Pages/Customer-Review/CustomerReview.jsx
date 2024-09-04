import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CustomerReview = () => {
  const url = "http://localhost:3000";

  const [data, setData] = useState({
    CustomerName: "",
    CityName: "",
    CustomerReview: "",
    Ranking: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${url}/api/review/add`, data);
      if (response.data.success) {
        setData({
          CustomerName: "",
          CityName: "",
          CustomerReview: "",
          Ranking: "",
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("There was an error adding the review:", error);
      toast.error("There was an error adding the review");
    }
  };

  useEffect(() => {
    console.table(data);
  }, [data]);

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={onSubmitHandler}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-gray-800 text-2xl">Customer Review</h1>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition"
            >
              ADD
            </button>
            <a
              href="/admin/Customer-List"
              className="bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
            >
              Back
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              className="text-xl font-medium text-gray-600 m-2 block"
              htmlFor="customerName"
            >
              Customer Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CustomerName}
              id="CustomerName"
              name="CustomerName"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter Customer Name"
              type="text"
            />
          </div>
          <div>
            <label
              className="text-xl font-medium text-gray-600 m-2 block"
              htmlFor="cityName"
            >
              City Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.CityName}
              id="CityName"
              name="CityName"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter City Name"
              type="text"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="text-xl font-medium text-gray-600 m-2 block"
            htmlFor="review"
          >
            Review
          </label>
          <textarea
            onChange={onChangeHandler}
            value={data.CustomerReview}
            id="CustomerReview"
            name="CustomerReview"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter Your Review Here"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            className="text-xl font-medium text-gray-600 m-2 block"
            htmlFor="cityRanking"
          >
            City Ranking
          </label>
          <select
            onChange={onChangeHandler}
            value={data.Ranking}
            id="Ranking"
            name="Ranking"
            className="w-full md:w-1/4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
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
