import React from 'react'
import Footer from '../layout/Footer/Footer'

const FAQ = () => {
  return (
    <div>
      <section>
      <div className="bg-red-50 text-gray-700 py-48 ">
          <div className="font-bold mx-auto text-center text-5xl">
            <h1>FAQ</h1>
          </div>
          <div className="pt-2 text-center text-lg">
            <h2>Find answers to some frequently asked questions here.</h2>
          </div>
        </div>
      </section>
     
    
      <section id="faq-accordion" className="text-lg md:text-xl">
        {/* Main Container */}
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
            
              <div
                
                className="px-7 py-5 border outline-none mb-6 group rounded-lg bg-white"
                tabIndex="1"
              >
                {/* Tab Flex Container */}
                <div className="flex items-center justify-between text-gray-700 font-medium transition duration-500 cursor-pointer group ease">
                  {/* Tab Title */}
                  <div className="transition duration-500 ease group-hover:text-red-500">
                  What areas do you serve in Mumbai?
                  </div>
                  {/* Arrow */}
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
                {/* Tab Inner Content */}
                <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                  <p className="py-2 text-justify text-gray-400">
                  We provide transport services across all major areas in Mumbai and surrounding regions.
                  </p>
                </div>
              </div>
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default FAQ
