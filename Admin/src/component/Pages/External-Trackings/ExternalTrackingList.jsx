import React from 'react'
import { useState } from 'react';

const ExternalTrackingList = () => {
   
  return (
    <section className="list add flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">City URL List</h2>
        <button className="bg-blue-500 px-6 py-2 text-white rounded-full hover:bg-blue-600">
          <a href="/admin/city/add">+ Add New City</a>
        </button>
      </div>

      <section className="list-table p-4">
        <div className="list-table-header gap-1 text-sm font-semibold text-black grid grid-cols-6 bg-gray-200 text-center py-3 rounded-md">
          <p>#</p>
          <p>Title</p>
          <p>Slug</p>
          <p>City</p>
          <p>Website Url</p>
          <p>Action</p>
        </div>

        
          <div className="list-table-item text-black text-sm grid grid-cols-6 items-center text-center py-2 border-b">
            <p>1</p>
            <p>Anmol Roadways Transport Tracking</p>
            <p className="text-sm">Anmol-roadways-transport-tracking</p>
            <p className="text-sm ">Chennai</p>
            <p>-Link</p>
            <div className="flex justify-center gap-2">
              <button
                // onClick={() => removeCity(item._id)}
                className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
              >
                Delete
              </button>
              <a
                // href={`/admin/city/edit/${item._id}`}
                className="bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-900"
              >
                Edit
              </a>
            </div>
          </div>
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
        //   onClick={prevPage}
        //   disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-gray-700">
          Page 1 of 1
        </p>
        <button
        //   onClick={nextPage}
        //   disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default ExternalTrackingList
