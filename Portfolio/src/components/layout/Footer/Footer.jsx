import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const cities = [
    "Ahmedabad",
    "Mumbai",
    "Delhi",
    "Pune",
    "Chennai",
    "Hyderabad",
  ];
  return (
    <div>
      <footer className="bg-gray-900 text-white py-24 py-md-15">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 hover:text-red-600">
              3rd Floor, Office No. 9, Agarwal Mall, Opp. Bhagvat Vidyapath,
              Ahmedabad
            </p>
            <br />
            <p className="text-gray-300 hover:text-red-600">
              Address: 123 Street, City, Country
            </p>
            <p className="text-gray-300 hover:text-red-600">
              Email: info@example.com
            </p>
            <p className="text-gray-300 hover:text-red-600">
              Phone: +123 456 7890
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="/about" className="hover:text-red-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Transport Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Truck Details
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-red-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Tracking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Transport Service In</h3>
            <ul className="text-gray-300 space-y-2 flex flex-col">
              <div>
                {cities.map((city) => (
                  <Link
                    key={city}
                    to={`/transport-service-in-${city}`}
                    className="block px-4 py-1 hover:text-red-600"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <hr className="mt-8 mb-7 border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between px-4">
          <p className="mb-2 md:mb-0 text-gray-600 text-center text-sm md:text-base">
            © 2024 TruckMeru. All rights reserved.
          </p>
          <nav className="text-gray-600 text-center text-sm md:text-base">
            Developed By{" "}
            <a
              className="text-red-600"
              target="_blank"
              href="https://github.com/RATHODKAUSHAL"
            >
              Rathod Kaushal
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
