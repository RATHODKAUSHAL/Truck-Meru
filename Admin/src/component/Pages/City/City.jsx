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
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeCity = async (cityId) => {
    const response = await axios.post(`${url}/api/city/delete`, { id: cityId });
    await fetchList();
    response.data.success
      ? toast.success(response.data.message)
      : toast.error("Error");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <section className="list add flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">City URL List</h2>
        <button className="bg-blue-500 px-6 py-2 text-white rounded-full hover:bg-blue-600">
          <a href="/admin/city/add">+ Add New City</a>
        </button>
      </div>

      <section className="list-table p-4">
        <div className="list-table-header text-sm font-semibold text-black grid grid-cols-6 bg-gray-200 text-center py-3 rounded-md">
          <p>#</p>
          <p>City Image</p>
          <p>City Icon</p>
          <p>City Name</p>
          <p>City Header</p>
          <p>Action</p>
        </div>

        {currentItems.map((item, index) => (
          <div key={index} className="list-table-item text-black text-sm grid grid-cols-6 items-center text-center py-2 border-b">
            <p>{indexOfFirstItem + index + 1}</p>
            <img src={`${url}/images/` + item.image} alt="City" className="w-20 mx-auto" />
            <img src={`${url}/images/` + item.CityIcon} alt="Icon" className="w-20 mx-auto" />
            <p className="text-sm">{item.CityName}</p>
            <p className="text-sm ">{item.CityHeader}</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => removeCity(item._id)}
                className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
              >
                Delete
              </button>
              <a
                href={`/admin/city/edit/${item._id}`}
                className="bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-900"
              >
                Edit
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-gray-700">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default City;
