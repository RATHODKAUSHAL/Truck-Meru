import React, { useEffect, useState } from "react";
import "./City.css";
import axios from "axios";
import { toast } from "react-toastify";

const City = () => {
    const url = "http://localhost:3000";
    const [list, setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/city/list`);
        if(response.data.success) {
            console.table(response.data.data)
            setList(response.data.data)
        }else{
            toast.error("Error")
        }
    }

    const removeCity = async (cityId) => {
      console.log(cityId)
      const response = await axios.post(`${url}/api/city/delete`, {id:cityId});
      console.log(response.data)

      await fetchList();
      if(response.data.success){
        toast.success(response.data.message)
      }else{
        toast.error("Error")
      }
    }

    useEffect(() => {
        fetchList();
    },[]) 
  return (
    <section className="list add flex-col">
      <div className="flex flex-row-reverse items-start justify-between">
        <button className="bg-red-600 cursor-pointer w-20 h-10  rounded-full text-white">
          <a href="/admin/city/add">Add City</a>
        </button>
        <p className="font-medium text-xl">All Foods List</p>
      </div>
      <section className="list-table p-10 ">
        <div className="list-table-format bg-gray-50 ">
          <b>Image</b>
          <b>City Name</b>
          <b>City Header</b>
          <b>Action</b>
        </div>

        {list.map((item,index)=> {
            return(
                <div key={index} className="list-table-format">
            <img src={`${url}/images/` + item.image} alt="" className="w-12" />
            <p>{item.CityName}</p>
            <p>{item.CityHeader}</p>
            <div className="flex flex-row gap-4"> 
              <button onClick={() => removeCity(item._id)} className="cursor-pointer bg-red-600 rounded-full text-white w-10 h-10">Delete</button>
              <button className="cursor-pointer bg-blue-600 rounded-full text-white w-10 h-10">Edit</button>
            </div>
          </div>
            )
        })}
        
      </section>
    </section>
  );
};

export default City;
