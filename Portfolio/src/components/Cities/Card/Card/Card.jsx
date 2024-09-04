import React, { useEffect, useState } from "react";
import axios from "axios";

const TestimonialCard = ({ city }) => {
  const [reviews, setReviews] = useState([]);
  const url = "http://localhost:3000";

  const fetchReview = async () => {
    try {
      const response = await axios.get(`${url}/api/review/list?CityName=${city}`);
      console.log("API Response Data:", response.data);

      if (response.data.success && response.data.data) {
        const matchedReviews = response.data.data.filter(
          (item) => item.CityName && item.CityName.toLowerCase() === city.toLowerCase()
        );
        setReviews(matchedReviews);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    fetchReview();
  }, [city]);

  if (reviews.length === 0) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 p-4 mx-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white border shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200 max-w-sm "
        >
          <p className="text-gray-600 mb-4 text-lg font-medium">{review.CustomerReview}</p>
          <section className="bottom">
            <div className="text-gray-900 font-semibold text-lg ">{review.CustomerName}</div>
            <div className="text-gray-500 mb-2">{review.CityName}</div>
            <div className="flex  flex-col  mt-2">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-5 h-5 ${
                      i < Math.round(review.Ranking) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.27l-5.18 3.73 1.64-7.03L.91 7.64l7.12-.61L10 1l2.97 6.03 7.12.61-5.55 4.33 1.64 7.03L10 15.27z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-3 text-sm my-4 font-medium text-white bg-red-600 w-10 h-5 text-center rounded-full">{review.Ranking}/5</div>
            </div>
            <div className="text-gray-600 text-sm mt-2">Reviewed on:</div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
