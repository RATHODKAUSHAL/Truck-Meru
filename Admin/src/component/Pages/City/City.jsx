import React, { useEffect, useState } from "react";
import "./City.css";
import axios from "axios";
import { toast } from "react-toastify";

const City = () => {
  const url = "http://localhost:3000";
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/city/list`);
    if (response.data.success) {
      console.table(response.data.data);
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeCity = async (cityId) => {
    console.log(cityId);
    const response = await axios.post(`${url}/api/city/delete`, { id: cityId });
    console.log(response.data);

    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  const updateCity = async (cityId) => {
    const response = await axios.post(`${url}/api/city/edit`, { id: cityId });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <section className="list add flex-col">
      <div className="flex flex-row-reverse items-start justify-between mb-4">
        <button className="bg-red-600 cursor-pointer w-20 h-10 rounded-full text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition">
          <a href="/admin/city/add">Add City</a>
        </button>
        <h2 className="font-medium text-2xl">All City List</h2>
      </div>
      <section className="list-table p-10">
        <div className="list-table-format bg-gray-50">
          <b>#</b>
          <b>Image</b>
          <b>City Name</b>
          <b>City Header</b>
          <b>Action</b>
        </div>

        {currentItems.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
                            <p className="text-lg">{indexOfFirstItem + index + 1}</p>

              <img
                src={`${url}/images/` + item.image}
                alt=""
                className="w-12"
              />
              <p className="text-lg">{item.CityName}</p>
              <p className="text-lg">{item.CityHeader}</p>
              <div className="flex flex-row gap-4">
                <button
                  onClick={() => removeCity(item._id)}
                  className="bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition"
                >
                  Delete
                </button>
                <a
                  href={`/admin/city/edit/${item._id}`} 
                  type="submit"
                  className="bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
                >
                  Edit
                </a>
              </div>
            </div>
          );
        })}
      </section>

       {/* Pagination Controls */}
       <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-gray-700">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default City;