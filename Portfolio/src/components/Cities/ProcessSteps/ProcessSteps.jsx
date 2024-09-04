import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Book Your Truck",
      description: "Book truck online from our website.",
    },
    {
      number: "02",
      title: "Get Best Rates",
      description: "Our team will give you best industry rates.",
    },
    {
      number: "03",
      title: "Confirm Your Booking",
      description: "Confirm your booking once you like our quote.",
    },
    {
      number: "04",
      title: "Load Your Shipment",
      description:
        "Our transport partner will come to your location to load shipment.",
    },
  ];
  return (
    <section>
      <div className="max-w-6xl mx-10 py-28 px-4 sm:px-6 lg:px-4">
      <h2 className="text-3xl font-semibold text-gray-700 text-left">
        How We Do It?
      </h2>
      <p className="text-left text-gray-600 text-xl mt-2 mb-12">
        We make your transport need hassle-free
      </p>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center text-2xl px-9 mt-8">
             
            <div className="flex text-left  mb-4">
           
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full font-bold ${
                  step.number === "02"
                    ? "bg-red-600 text-white "
                    : "bg-red-200 text-red-600"
                }`}
              >
                {step.number} 
              </div>
              
            </div>
            

           <div className='text-left text-xl'>
           <h3 className="text-lg font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};


export default ProcessSteps;
