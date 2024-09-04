import React from "react";

const Faq = ({faqs}) => {
  return (
    <div className="bg-gray-50">
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
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="px-7 py-5 border outline-none mb-6 group rounded-lg bg-white"
                tabIndex={index + 1}
              >
                {/* Tab Flex Container */}
                <div className="flex items-center justify-between text-gray-700 font-medium transition duration-500 cursor-pointer group ease">
                  {/* Tab Title */}
                  <div className="transition duration-500 ease group-hover:text-red-500">
                    {faq.question}
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
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
