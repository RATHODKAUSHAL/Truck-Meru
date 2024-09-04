import React from 'react'

const CitySection = () => {
  return (
    <div>
      <section>
        <div className="bg-gray-50 py-12 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-600 text-center">
            We are providing transport service in popular cities
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl px-4">
            <div className="bg-white flex flex-col items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <a href="/Ahmedabad">
              <img
                src="https://zen.fra1.digitaloceanspaces.com/tms/city_icons/7RjNOTQnEfhKLpjnjGEzAOxKnPZ7mv1jHPObk5TO.svg"
                alt="Ahmedabad Icon"
                className="w-24 h-24 mb-2"
              />
              <span className="text-xl font-bold text-gray-800">Ahmedabad</span>
              </a>
            </div>

            <div className="bg-white flex flex-col items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <a href="/mumbai">
              <img
                src="https://zen.fra1.digitaloceanspaces.com/tms/city_icons/IqQzbdTpaQZsgXa3yKjD1JNLaFI2nqPqRYK6avc3.svg"
                alt="Mumbai Icon"
                className="w-24 h-24 mb-2"
              />
              <span className="text-xl font-bold text-gray-800">Mumbai</span>
              </a>
            </div>

            <div className="bg-white flex flex-col items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <a href="/delhi">
              <img
                src="https://zen.fra1.digitaloceanspaces.com/tms/city_icons/F8KwigZDUzGwM6OgalsHyOA7tqpqs3oyqpqDGosb.svg"
                alt="Delhi Icon"
                className="w-24 h-24 mb-2"
              />
              <span className="text-xl font-bold text-gray-800">Delhi</span></a>
            </div>

            <div className="bg-white flex flex-col items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <a href="/pune">
              <img
                src="https://zen.fra1.digitaloceanspaces.com/tms/city_icons/QewaOgNwV1rJL5OnXCJ1qQTPahkN3G1aTV3Vyepc.svg"
                alt="Pune Icon"
                className="w-24 h-24 mb-2"
              />
              <span className="text-xl font-bold text-gray-800">Pune</span></a>
            </div>

            <div className="bg-white flex flex-col items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <a href="/chennai">
              <img
                src="https://zen.fra1.digitaloceanspaces.com/tms/city_icons/uuibTh0X0uifnPHzvwt5DqSGZVFeAIiWVCaacBWM.svg"
                alt="Chennai Icon"
                className="w-24 h-24 mb-2"
              />
              <span className="text-xl font-bold text-gray-800">Chennai</span></a>
            </div>

            <div className="bg-white flex flex-col items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <a href="/hyderabad">
              <img
                src="https://zen.fra1.digitaloceanspaces.com/tms/city_icons/tuPtPsBF7bh04MTfIhbG91GAtj6FBUJ1gJRSHrKk.svg"
                alt="Hyderabad Icon"
                className="w-24 h-24 mb-2"
              />
              <span className="text-xl font-bold text-gray-800">Hyderabad</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CitySection;
