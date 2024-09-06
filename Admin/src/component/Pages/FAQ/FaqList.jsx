import axios from "axios";
import React, { useEffect, useState } from "react";

const FaqList = () => {
  const url = "http://localhost:3000";
  const [faq, setFaq] = useState([]);

  const fetchFaq = async () => {
    const response = await axios.get(`${url}/api/faq/list`);
    if(response.data.success){
      console.table(response.data.data);
      setFaq(response.data.data);
    }else{
      toast.error("Error");
    }
  };

  const removeFaq = async (faqId) => {
    const response = await axios.post(`${url}/api/faq/delete`, {
      id:faqId,
    });
    console.log(response.data);
    await fetchFaq();
    if(response.data.success){
      toast.success(response.data.message);
    }else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchFaq();
  },[])


  return (
    <section className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <h1 className="font-bold text-2xl text-gray-800 mb-4 md:mb-0">
          All  FAQ List
        </h1>
        <a
          href="/admin/faq"
          className="bg-red-600 text-white rounded-full py-2 px-6 hover:bg-red-700 transition"
        >
          Add  FAQ
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
                 City Name
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                 Question
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                 Answer
              </th>
              <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {faq.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-gray-700">{index + 1}</td>
              <td className="py-2 px-4 border-b text-gray-700">
                {item.CityName}
              </td>
              <td className="py-2 px-4 border-b text-gray-700">
              {item.Question}
              </td>
              <td className="py-2 px-4 border-b text-gray-700">
              {item.Answer}
              </td>

              <td className="py-2 px-4 border-b">
                <div className="flex space-x-2">
                  <button onClick={() => removeFaq(item._id)} className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition">
                    Delete
                  </button>
                  <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition">
                    Edit
                  </button>
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

export default FaqList;
