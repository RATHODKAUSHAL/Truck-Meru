import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ExternalTrackingList = () => {
  return (
    <section className="list flex-col text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">City URL List</h2>
        <button className="bg-blue-500 px-6 py-2 text-sm text-white rounded-lg hover:bg-blue-600">
          <a href="/admin/External-Tracting">+ Add New External Tracking</a>
        </button>
      </div>

      {/* Table */}
      <section className="list-table p-4">
        <div className="list-table-header text-sm font-semibold text-black grid grid-cols-6 bg-gray-200 text-center py-3 rounded-t-md border-b border-gray-400">
          <p className="border-r border-gray-400">#</p>
          <p className="flex justify-start border-r border-gray-400 px-2">Title</p>
          <p className="flex justify-start border-r border-gray-400 px-2">Slug</p>
          <p className="flex justify-start border-r border-gray-400 px-2">City</p>
          <p className="flex justify-start border-r border-gray-400 px-2">Website URL</p>
          <p className="flex justify-start px-2">Action</p>
        </div>

        {/* List Item */}
        <div className="list-table-item text-black text-sm grid grid-cols-6 items-center text-center py-2 border-b border-gray-400">
          <p className="border-r border-gray-400">1</p>
          <p className="flex justify-start border-r border-gray-400 px-2">
            Anmol Roadways Transport Tracking
          </p>
          <p className="text-sm flex justify-start border-r border-gray-400 px-2">
            Anmol-roadways-transport-tracking
          </p>
          <p className="text-sm flex justify-start border-r border-gray-400 px-2">
            Chennai
          </p>
          <a className="flex justify-start border-r border-gray-400 px-2">-Link</a>
          <div className="flex justify-start gap-2 px-2">
            <button
              className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
            >
              Delete
            </button>
            <a
              className="bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-900"
            >
              Edit
            </a>
          </div>
        </div>

        {/* More List Items can be added similarly */}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center mt-6">
        <button
          className="bg-gray-300 py-2 px-4 rounded-md disabled:opacity-50"
        >
          <IoIosArrowBack />
        </button>
        <p className="text-gray-700 px-4">1</p>
        <button
          className="bg-gray-300 py-2 px-4 rounded-md disabled:opacity-50"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default ExternalTrackingList
