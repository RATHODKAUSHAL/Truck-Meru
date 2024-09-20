import React from 'react'
import Footer from "../layout/Footer/Footer";


const ExternalTracking = () => {
  return (
    <div>
    <section className="pt-5">
      <div className="bg-gray-200 flex-wrap text-gray-700 h-14 py-20 ">
        <div className="pt-2 text-start text-lg">
          <a href="/" className="hover:text-red-600">Home</a>
          <span className="text-gray-500"> &#62; </span>
          <a href="/about">Tracking</a>
        </div>
      </div>
</section>
      
      <Footer/>
  </div>
  )
}

export default ExternalTracking
