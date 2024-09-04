import React from 'react'
import Footer from '../layout/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-100 text-gray-700 py-48 ">
          <div className="font-bold mx-auto text-center text-5xl">
            <h1>Contact Us</h1>
          </div>
          <div className="pt-2 text-center text-lg">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="text-gray-500"> &#62; </span>
            <a href="/about">Contact us</a>
          </div>
        </div>

        <section className='py-12 justify-center'>
            <div className='container  mx-auto px-4'>
        <div className='grid grid-cols lg:grid-cols-2  gap-8'>
        <div className="rounded-lg overflow-hidden   shadow-md ">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.295679520587!2d72.52810957588918!3d23.06533368489209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4c4907c17%3A0x450392f36b0a22da!2sTruckMeru!5e0!3m2!1sen!2sin!4v1628858194565!5m2!1sen!2sin" 
                        width="100%" height="450"  allowfullscreen="" loading="lazy">
                    </iframe>

 
                    {/* contact details */}
                <div className='p-6 bg-white rounded-lg shadow-md '>
                <div className='mb-4'>
                <h4 className="text-xl font-semibold flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-500 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 .692-.226 1.363-.64 1.914a3.498 3.498 0 01-.2.27l-2.99 2.99A3.998 3.998 0 116.4 15l3.001-3A3.499 3.499 0 0112 11zm0 0V7m0 4a4 4 0 10-8 0 4 4 0 008 0z" />
                            </svg>
                            Address
                            
                        </h4>
                        <p>3rd Floor, Office No. 9, Agarwal Mall,<br />
                        Opp. Bhagwat Vidyapath, Sola, S.G. Highway,<br />
                        Ahmedabad 380060, Gujarat, India</p>
                </div>
                <div className="mb-4">
                        <h4 className="text-xl font-semibold flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-500 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7 7 4-4 7 7M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Phone
                        </h4>
                        <p>9727445443</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-500 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h1.5a1.5 1.5 0 011.5 1.5V15a1.5 1.5 0 01-1.5 1.5H16v2m0 0v2m0-6h-2m2 0v-2m-4 6v-2m0 0v-2m0 0v-2m0-2H8.5a1.5 1.5 0 00-1.5 1.5V15a1.5 1.5 0 001.5 1.5H10v2m0 0v2m0-6H8m0 0v-2m-2-6h8a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2zm0 2h8v4H6V8z" />
                            </svg>
                            E-mail
                        </h4>
                        <p>bookings@truckmeru.com</p>
                    </div>
                
                </div>
                </div>

                
        </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Contact
