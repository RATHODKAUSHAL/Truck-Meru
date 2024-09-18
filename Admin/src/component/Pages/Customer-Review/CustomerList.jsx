import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const CustomerList = () => {
  const url = "http://localhost:3000";
  const [review, setReview] = useState([]);

  const fetchReview = async () => {
    const response = await axios.get(`${url}/api/review/list`);
    if (response.data.success) {
      console.table(response.data.data);
      setReview(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeReview = async (reviewId) => {
    const response = await axios.post(`${url}/api/review/delete`, {
      id: reviewId,
    });
    console.log(response.data);
    await fetchReview();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  return (
    <section className="p-6  bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <h1 className="font-bold text-lg text-gray-800 mb-4 md:mb-0">
          All Customer Review List
        </h1>
        <a
          href="/admin/customer-review"
          className="bg-blue-600 text-white rounded-full py-2 px-6 hover:bg-blue-700 transition"
        >
          Add Customer Review
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                #
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Customer Name
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                City Name
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Customer Review
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Customer Ranking
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {review.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-gray-700">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {item.CustomerName}
                </td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {item.CityName}
                </td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {item.CustomerReview}
                </td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {item.Ranking}/5
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <button onClick={() => removeReview(item._id)} className="bg-blue-600 rounded-full text-white py-1 px-3  hover:bg-blue-700 transition">
                      Delete
                    </button>
                    <a href={`/admin/customer-review/${item._id}`} className="bg-gray-600 text-white cursor-pointer py-1 px-3 rounded-full hover:bg-gray-900 transition">
                      Edit
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CustomerList;
