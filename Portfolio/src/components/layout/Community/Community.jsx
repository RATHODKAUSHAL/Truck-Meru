import React, { useEffect, useState } from "react";

const NumberDisplay = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let interval = 1;
    const updateNumber = () => {
      if (currentNumber < targetNumber) {
        setCurrentNumber((prev) => prev + 1);
      }
    };

    const timeout = setTimeout(updateNumber, interval);

    return () => clearTimeout(timeout);
  }, [currentNumber, targetNumber]);

  return <div className="text-5xl font-bold text-red-500">{currentNumber}</div>;
};

// StatisticCard Component
const StatisticCard = ({ value, description }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <NumberDisplay targetNumber={parseInt(value)} />
    </div>
    <span className="text-base font-medium text-gray-600">
      {description}
    </span>
  </div>
);


const Community = () => {
  const statistics = [
    { value: "1000+", description: "Bookings Delivered" },
    { value: "50+", description: "Verified Transporters" },
    { value: "200+", description: "Locations Served" }
  ];

  return (
    <>
      <section>
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 uppercase tracking-wide font-semibold mb-2">
            What We Do?
          </p>
          <h2 className="text-3xl font-bold mb-12">
            Our logistics service is designed just for{" "}
            <p>you, meeting all your needs.</p>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  col-md-6 col-xl-6">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                Full Load Truck Booking
              </h3>
              <p>
                Easily book a full truck for efficient, reliable, and secure
                <p>transportation of your goods.</p>
              </p>
            </div>
            {/* <!-- Part Load Truck Booking --> */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-2">
                Part Load Truck Booking
              </h3>
              <p>
                Easily book part load trucks for flexible and reliable
                transportation of your goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-no-repeat bg-center justify-center bg-map"
        style={{ backgroundImage: "url('./assets/map.png')" }}
      >
        <div className="py-12 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-600">
            Join our community
          </h2>
          <p className="text-3xl font-bold text-gray-800 mt-2 text-center">
            Over 100+ clients trust our logistics services.
          </p>

          <div className="flex flex-col md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-10">
      {statistics.map((stat, index) => (
        <StatisticCard
          key={index}
          value={stat.value}
          description={stat.description}
        />
      ))}
    </div>
        </div>
      </section>

      
    </>
  );
};

export default Community;
