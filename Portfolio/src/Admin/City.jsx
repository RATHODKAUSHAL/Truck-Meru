import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CityHeader from '../components/Cities/CityHeader/CityHeader';
import CitySection from '../components/layout/Citysection/CitySection';
import Footer from '../components/layout/Footer/Footer';
import Testimonials from '../components/Cities/Card/Card/Card'
import ProcessSteps from '../components/Cities/ProcessSteps/ProcessSteps'
import axios from 'axios';
import CityDetails from '../components/Cities/CityDetails/CityDetails';

const City = () => {
    const [cityComponents, setCityComponents] = useState({});
    const { city } = useParams();

    const fetchCityData = async () => {
        const url = "http://localhost:3000/api/city/list";
        try {
          const response = await axios.get(url);
          if (response.data.success) {
            const cities = response.data.data.reduce((acc, city) => {
              acc[`transport-service-in-${city.CityName.toLowerCase()}`] = city.CityName;
              return acc;
            }, {});
            console.log(cities)
            setCityComponents(cities);
          } else {
            console.error("Error fetching city data");
          }
        } catch (error) {
          console.error('Error fetching city data:', error);
        }
      };

      useEffect(() => {
        fetchCityData();
      },[])



    const cityName = cityComponents[city.toLowerCase()];
    return cityName ? (
        <>
          <CityHeader city={cityName} />
          <CityDetails city={cityName}/>
          <ProcessSteps/>
          <Testimonials/>
          <CitySection/>
          <Footer/>
            {/* Passing the city name to CityHeader */}
        </>
      ) : <div>City Not Found</div>;
}

export default City
