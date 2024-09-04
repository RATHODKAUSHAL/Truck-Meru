import React from "react";

const testimonials = [
  {
    name: "Ketan Paramar",
    location: "Ahmedabad",
    text: "TruckMeru is the best transport company in Ahmedabad. I booked a 19ft truck online from Ahmedabad to Delhi, and they delivered it nicely. Their service is very good.",
    rating: 4.8,
    date: "05 Jan, 24",
  },
  {
    name: "Mohit Patel",
    location: "Ahmedabad",
    text: "Good reliable transportation company in Ahmedabad. Timely service at reasonable prices.",
    rating: 4.9,
    date: "02 Apr, 23",
  },
  {
    name: "Ravirajsinh Vala",
    location: "Ahmedabad",
    text: "Good and polite work been done by the staff. Best experience so far with stock drop and pickup. Delivered on time.",
    rating: 4.8,
    date: "09 Jun, 23",
  },
];

const TestimonialCard = ({ name, location, text, rating, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 max-w-sm mx-auto">
      <p className="text-gray-700 mb-4 text-xl">{text}</p>
      <section className="">
      <div className="text-gray-800 font-semibold">{name}</div>
      <div className="text-gray-500">{location}</div>
      <div className="flex  items-center mt-4">
        <div className="text-yellow-500 bottom-4 flex">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 ${i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}`}
            >
              <path
                fillRule="evenodd"
                d="M10 15.27l-5.18 3.73 1.64-7.03L.91 7.64l7.12-.61L10 1l2.97 6.03 7.12.61-5.55 4.33 1.64 7.03L10 15.27z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        
      </div>
      <div className="flex flex-row gap-2 pt-3 ">
      <div className="ml-2 h-6 w-12 text-white bg-red-500 text-center rounded-md text-sm font-medium">
          {rating}/5
        </div>
      <div className="text-gray-700 text-lg mt-1">On Date {date}</div>
      </div>
      </section>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full max-w-6xl mx-auto p-8">
      <h2 className="text-center text-gray-700 text-3xl mb-4 font-medium">
        Happy Customers
      </h2>
      <p className="text-center text-gray-500 text-xl mb-6 font-normal">
        Customer satisfaction is our major goal. See what our customers are saying about us.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
