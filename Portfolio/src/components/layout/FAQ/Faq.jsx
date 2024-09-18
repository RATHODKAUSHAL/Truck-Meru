import React from "react"

const Faq = () => {
  return (
    <div className="bg-gray-50">
  <section id="faq" className="pt-7">
    <div className="container mx-auto px-4">
      <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
        Frequently Asked Questions
      </h2>
    </div>
  </section>

  <section id="faq-accordion" className="text-base  md:text-xl">
    {/* Main Container */}
    <div className="container mx-auto  px-4 md:px-6 mb-16 md:mb-32">
      {/* Accordion Container */}
      <div className="max-w-5xl gap-4 mx-auto overflow-hidden">
        {/* Tab 1 */}
        <div className=" border-b outline-none group px-3 py-2 border  mb-2 group rounded-lg   bg-white" tabIndex="1">
          {/* Tab Flex Container */}
          <div className="flex items-center bg-white  justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group">
            {/* Tab Title */}
            <div className="transition duration-500 ease group-hover:text-red-500">
              What types of transportation services does TruckMeru offer?
            </div>
            {/* Arrow */}
            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
              </svg>
            </div>
          </div>

          {/* Tab Inner Content */}
          <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p className="py-2 text-justify text-gray-400">
              TruckMeru provides both full truck load and part truck load transportation services across
              India. We also offer specialized solutions for movers and packers.
            </p>
          </div>
        </div>

        {/* Tab 2 */}
        <div className="border-b outline-none group px-3 py-2 border  mb-2  rounded-lg bg-white" tabIndex="2">
          {/* Tab Flex Container */}
          <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
            {/* Tab Title */}
            <div className="transition duration-500 ease group-hover:text-red-500">
              What types of vehicles does TruckMeru have available for transportation?
            </div>
            {/* Arrow */}
            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
              </svg>
            </div>
          </div>

          {/* Tab Inner Content */}
          <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p className="py-2 text-justify text-gray-400">
              We have a diverse fleet of vehicles, including trucks of various sizes and capacities to
              accommodate different cargo requirements.
            </p>
          </div>
        </div>

        {/* Tab 3 */}
        <div className="border-b outline-none group px-3 py-2 border  mb-2 group rounded-lg bg-white" tabIndex="3">
          {/* Tab Flex Container */}
          <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
            {/* Tab Title */}
            <div className="transition duration-500 ease group-hover:text-red-500">
              How can I book a truck with TruckMeru?
            </div>
            {/* Arrow */}
            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
              </svg>
            </div>
          </div>

          {/* Tab Inner Content */}
          <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p className="py-2 text-justify text-gray-400">
              Booking with TruckMeru is easy! You can either book through our website or you can contact
              our customer service team directly to assist you with the booking process.
            </p>
          </div>
        </div>

        {/* Tab 4 */}
        <div className="border-b outline-none group px-3 py-2 border  mb-2 group rounded-lg bg-white" tabIndex="4">
          {/* Tab Flex Container */}
          <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
            {/* Tab Title */}
            <div className="transition duration-500 ease group-hover:text-red-500">
              What payment methods does TruckMeru accept?
            </div>
            {/* Arrow */}
            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
              </svg>
            </div>
          </div>

          {/* Tab Inner Content */}
          <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p className="py-2 text-justify text-gray-400">
              We accept various payment methods, including online payments through our website or bank transfers.
            </p>
          </div>
        </div>

        {/* Tab 5 */}
        <div className="border-b outline-none group px-3 py-2 border  mb-2 group rounded-lg bg-white" tabIndex="5">
          {/* Tab Flex Container */}
          <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
            {/* Tab Title */}
            <div className="transition duration-500 ease group-hover:text-red-500">
              What regions does TruckMeru operate in?
            </div>
            {/* Arrow */}
            <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
              </svg>
            </div>
          </div>

          {/* Tab Inner Content */}
          <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p className="py-2 text-justify text-gray-400">
              TruckMeru operates throughout India, covering all major cities and remote areas to meet our
              customers' transportation needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Faq;
