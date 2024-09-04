import React from 'react'

const Faq = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <form >
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-gray-800 text-2xl">Frequently Asked Questions</h1>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition"
            >
              ADD
            </button>
            <a
              href="/admin/faq-list"
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
              htmlFor="Question"
            >
              Question
            </label>
            <input
             
              id="Question"
              name="Question"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter Question"
              type="text"
            />
          </div>
          <div>
            <label
              className="text-xl font-medium text-gray-600 m-2 block"
              htmlFor="Answer"
            >
              Answer
            </label>
            <input
              
              id="Answer"
              name="Answer"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter  Answer"
              type="text"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="text-xl font-medium text-gray-600 m-2 block"
            htmlFor="review"
          >
            City Name
          </label>
          <input
            
            id="CityName"
            name="CityName"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter City Name Here"
            rows="4"
          ></input>
        </div>
      </form>
    </div>
  )
}

export default Faq
