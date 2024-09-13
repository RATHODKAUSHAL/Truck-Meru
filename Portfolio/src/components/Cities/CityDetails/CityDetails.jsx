import React, { useEffect, useState } from "react";
import axios from "axios";
import './CityDetails.css'

const CityDetails = ({ city }) => {
  const [cityData, setCityData] = useState(null);
  const url = "http://localhost:3000";
  const [citydescription, setcitydescrtion] = useState(null)

  const fetchCityData = async () => {
    try {
      const response = await axios.get(`${url}/api/city/list`);
      if (response.data.success) {
        const matchedCity = response.data.data.find(
          (item) => item.CityName.toLowerCase() === city.toLowerCase()
        );
        setCityData(matchedCity);
        setcitydescrtion(matchedCity.Citydescription)
      }
    } catch (error) {
      console.error('Error fetching city data:', error);
    }
  };


  useEffect(() => {
    fetchCityData();
  }, [city]);

  if (!cityData) return <div>Loading...</div>;

  return (
    <div className="bg-gray-50">
      <section className="bg-gray-200 flex-wrap text-gray-700 h-14">
        <nav className="text-left text-lg py-6 px-4">
          <a href="/" className="hover:text-red-600">
            Home
          </a>
          <span className="text-gray-400"> &#62; </span>
          <a href={`/TransportService/${cityData.CityName}`}>
            Transport Service in {cityData.CityName}
            
          </a>
        </nav>
      </section>

      <div>
        <h2 className="text-center text-2xl border-b font-medium py-4 px-4 text-red-600">
          Best Transport Services in {cityData.CityName}
        </h2>
      </div>
      <section className="bg-gray-50">
        <div className="bg-gray-50 py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="lg:w-1/2 text-gray-700 mb-8 lg:mb-0 lg:pr-8">
              <p className="text-lg md:text-xl lg:text-2xl font-normal mb-4 text-justify">
                {cityData.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src={`${url}/images/${cityData.image}`}
                alt="Truck Service"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
           
          </div>
        </div>
      </section>

      <section className="bg-gray-50 ">
        <div className="mx-6 px-4 text-justify">
          <div className="row flex flex-wrap">
            <div className="col-md-12 px-4 mt-8 text-gray-600 text-xl font-normal  ">
              <div
                className="pb-5 "
                dangerouslySetInnerHTML={{ __html: citydescription }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityDetails;
