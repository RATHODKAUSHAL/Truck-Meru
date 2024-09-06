import axios from "axios";
import React, { useEffect, useState } from "react";

const Faq = ({ city }) => {
  const url = "http://localhost:3000";
  const [faq, setFaq] = useState([]);  // Initialize faq as an empty array

  const fetchFaq = async () => {
    try {
      const response = await axios.get(`${url}/api/faq/list?CityName=${city}`);
      console.log("API Response Data:", response.data);
      
      if (response.data.success && Array.isArray(response.data.data)) {
        const matchedCity = response.data.data.filter(
          (item) => item.CityName && typeof item.CityName === "string" && item.CityName.toLowerCase() === city.toLowerCase()
        );
        setFaq(matchedCity);
      } else {
        console.error("Unexpected response format or data is not an array:", response.data);
        setFaq([]);  // Set faq as an empty array in case of invalid data
      }
    } catch (error) {
      console.error("Error fetching city data: ", error);
      setFaq([]);  // Set faq as an empty array in case of an error
    }
  };

  useEffect(() => {
    fetchFaq();
  }, [city]);

  return (
    <div className="bg-gray-50">
      <section id="faq-accordion" className="text-lg md:text-xl">
        <div className="container max-w-6xl mx-auto px-4 md:py-32">
          <section id="faq" className="pt-7">
            <div className="container mx-auto px-4">
              <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl text-gray-700">
                FAQ
              </h2>
              <p className="lead text-center mb-10 text-gray-700">
                If you don't see an answer to your question, you can send us an
                email from our contact form.
              </p>
            </div>
          </section>
          {/* Accordion Container */}
          <div className="max-w-5xl mx-auto">
            {faq.length > 0 ? (
              faq.map((item, index) => (
                <div
                  key={index}
                  className="px-7 py-5 border outline-none mb-6 group rounded-lg bg-white"
                  tabIndex={index + 1}
                >
                  <div className="flex items-center justify-between text-gray-700 font-medium transition duration-500 cursor-pointer group ease">
                    <div className="transition duration-500 ease group-hover:text-red-500">
                      {item.Question}
                    </div>
                    <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          d="M1 1l8 8 8-8"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                    <p className="py-2 text-justify text-gray-400">
                      {item.Answer}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No FAQs available for this city.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
