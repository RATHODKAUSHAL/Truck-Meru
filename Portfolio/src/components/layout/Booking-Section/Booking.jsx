import React from 'react'

const Booking = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-700">The service we offer is specifically <p className="text-3xl">
                    designed to meet your needs.</p>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* <!-- Best Truck Rates --> */}
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <div className="mb-4">
                        <img src="https://truckmeru.com/front/assets/img/icons/coin.svg" alt="Verified Trucks" className="mx-auto h-16" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Best Truck Rates</h3>
                    <p>We will try our best to provide the best truck rates across Pan India.</p>
                </div>
                {/* <!-- Verified Trucks --> */}
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <div className="mb-4">
                        <img src="https://truckmeru.com/front/assets/img/icons/search.svg" alt="Verified Trucks" className="mx-auto h-16" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Verified Trucks</h3>
                    <p>Verified trucks from 500+ truck owners across India.</p>
                </div>
                {/* <!-- Timely Delivery --> */}
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <div className="mb-4">
                        <img src="https://truckmeru.com/front/assets/img/icons/clock-3.svg" alt="Timely Delivery" className="mx-auto h-16" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                    <p>Real-time truck tracking to deliver your goods on time.</p>
                </div>
                {/* <!-- Customer Support --> */}
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <div className="mb-4">
                        <img src="https://truckmeru.com/front/assets/img/icons/telemarketer.svg" alt="Customer Support" className="mx-auto h-16" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                    <p>We are the best when it comes to customer support.</p>
                </div>
            </div>
        </div>
    </section>

    
    </div>
  )
}

export default Booking
