import React from 'react'
import { Editor } from '@tinymce/tinymce-react';

const ExternalTracking = () => {
  return (
    <div className="md:px-10 md:py-10 lg:px-16 lg:py-12">
      <form
        className="flex flex-col p-6 w-full bg-white shadow-lg rounded-lg"
      >
        <h1 className="font-bold text-gray-800 text-xl pb-3">Create External trackings</h1>
        <hr className='p-4'/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="Title">
              Title
            </label>
            <input
              type="text"
              name="Title"
              id="Title"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="PhoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              name="PhoneNumber"
              id="PhoneNumber"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="EmailAddress">
              Email Address
            </label>
            <input
              type="email"
              name="EmailAddress"
              id="EmailAddress"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Select City */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="SelectCity">
              Select City
            </label>
            <select
              name="SelectCity"
              id="SelectCity"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md "
            >
              <option value="">Search for Location</option>
              {/* Add more city options here */}
            </select>
          </div>

          {/* Website URL */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="WebsiteUrl">
              Website URL
            </label>
            <input
              type="url"
              name="WebsiteUrl"
              id="WebsiteUrl"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Tracking Tool URL */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="TrackingToolUrl">
              Tracking Tool URL
            </label>
            <input
              type="url"
              name="TrackingToolUrl"
              id="TrackingToolUrl"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="UploadImage">
              Upload Image
            </label>
            <input
              type="file"
              name="UploadImage"
              id="UploadImage"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Company Address */}
          <div className="md:col-span-2">
            <label className="text-gray-700 text-sm" htmlFor="CompanyAddress">
              Company Address
            </label>
            <textarea
              name="CompanyAddress"
              id="CompanyAddress"
              rows="3"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Meta Description */}
          <div>
            <label className="text-gray-700 text-sm" htmlFor="MetaDescription">
              Meta Description
            </label>
            <textarea
              name="MetaDescription"
              id="MetaDescription"
              rows="3"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Sub Title */}
          <div className="md:col-span-2">
            <label className="text-gray-700 text-sm" htmlFor="SubTitle">
              Sub Title
            </label>
            <input
              type="text"
              name="SubTitle"
              id="SubTitle"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* About Content (without editor) */}
          <div className="md:col-span-2">
            <label className="text-gray-700 text-sm" htmlFor="AboutContent">
              About Content (without editor)
            </label>
            <textarea
              name="AboutContent"
              id="AboutContent"
              rows="4"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md "
            />
          </div>

          {/* Content (with editor) */}
          <div className="md:col-span-2">
            <label className="text-gray-700 text-sm" htmlFor="ContentEditor">
              Content (with editor)
            </label>
            <Editor
              apiKey="t30ujsyvwgdpoavm9zywyk8nv8oid2afl2ittgu3d33aiv5j"
              init={{
                height: 300,
                menubar: true,
                plugins: [
                  'advlist code autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | code | formatselect | bold italic backcolor | ' +
                  'alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist outdent indent | removeformat | help',
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
          >
            Submit
          </button>
          <a
            href="/admin/External-Tracting-List"
            className="bg-gray-600 px-4 py-2 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition"
          >
            Back
          </a>
        </div>
      </form>
    </div>
  )
}

export default ExternalTracking
