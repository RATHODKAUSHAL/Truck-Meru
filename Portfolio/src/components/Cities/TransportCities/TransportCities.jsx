import React from 'react';
import { Link } from 'react-router-dom';


const TransportCities = ({cities, cityName}) => {
  return (
    <section className='bg-gray-50'>
      <div className=" mx-4 sm:mx-8 md:mx-12 lg:mx-20 py-10 sm:py-16 md:py-20 lg:py-28 px-4">
      <div className="py-10 px-4 font-bold text-gray-600 font-manrope">
        <h3 className="text-center text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-6 md:mb-9 lg:mb-12">
          We’re providing transport service from {cityName} to below cities.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {cities.map((city, index) => (
            <Link 
              to={`${cityName}-to-${city}`}
              key={index} 
              className="bg-white shadow-md rounded-lg text-center p-4 text-sm sm:text-base md:text-lg lg:text-xl transform transition-transform duration-300 hover:scale-105">
              {cityName} to {city}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default TransportCities;
