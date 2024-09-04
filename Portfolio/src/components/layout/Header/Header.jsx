import React from 'react'

const Header = () => {
    const object = {
        
    }
  return (
    <div>
              <section className="hero-section bg-black text-white py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Online Truck Booking</h1>
            <p className="text-4xl font-bold ">Pan-India Transport Solutions!</p>
        </div>
        <div className="py-10">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-md rounded-lg p-10 section-block">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex flex-row gap-2" >
                                <img src="https://truckmeru.com/front/assets/img/location.svg" className="h-6 "  alt="location" />
                            <label for="pickup-city" className="block text-red-600 font-bold mb-2">
                                Pickup City</label>
                            </div>
                            <input type="text" id="pickup-city" placeholder="Search for Location"
                                className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div>
                            <div className="flex flex-row gap-2">
                                <img src="https://truckmeru.com/front/assets/img/location.svg" className="h-6 "  alt="location" />
                            <label for="drop-city" className="block text-red-600 font-bold mb-2">Drop City</label>
                            </div>
                            <input type="text" id="drop-city" placeholder="Search for Location"
                                className="w-full px-3 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="mt-4 text-center flex">
                            <button className="bg-red-600  hover:bg-red-700 text-white px-6 py-2 rounded-lg flex flex-row ">Check Fare    
                                <img src="https://truckmeru.com/front/assets/img/right-arrow-angle.svg" className="max-w-5  text-white pt-1" alt="check" />
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Header
