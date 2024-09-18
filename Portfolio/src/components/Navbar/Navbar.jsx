import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [IsOpen, setOpen] = useState(false);
  const [city, setCity] = useState(null); // Change to a single object instead of an array
  const url = "http://localhost:3000"
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const fetchCityName = async () => {
    try {
      const response = await axios.get(`${url}/api/city/list`);
      if(response.data.success){
        setCity(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if(window.pageYOffset > 200){
        setIsVisible(true);
      }else{
        setIsVisible(false)
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    fetchCityName();

    return () => window.removeEventListener('scroll', toggleVisibility);
  },[])



  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="bg-gray-100">
          <div className="container mx-auto h-24 px-5 flex justify-between items-center">
            <div className="flex items-center sm:h-16 sm:w-44  ">
              <a href="/">
                <img
                  src="https://truckmeru.com/front/assets/img/logo.svg"
                  alt="Logo"
                  className="h-20 w-52"
                />
              </a>
            </div>
            <div className="hidden md:flex font-manrope font-medium text-base gap-5 h-full items-center">
              <a href="/" className="mx-4 text-gray-700 hover:text-red-600">
                Home
              </a>
              <div className="relative h-full text-center">
                <a
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  href="#ServiceInCities"
                  className="text-gray-700 hover:text-red-600 flex h-full items-center"
                >
                  Service In Cities
                  <i className="fa fa-caret-down ml-1"></i>
                </a>
                <div
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {isOpen && (
                    <div className="absolute w-48 font-manrope text-gray-600  bg-white border border-gray-200 rounded-md shadow-lg ">
                      <div>
                        {city.map((item, index) => (
                          <Link
                            key={index}
                            to={`/transport-service-in-${item.CityName}`}
                            className="block px-4 py-2 hover:text-red-600"
                          >
                            {item.CityName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Link
                to="/about"
                className="mx-4 text-gray-700 hover:text-red-600"
              >
                About Us
              </Link>
              <Link
                to="/Contact"
                className="mx-4 text-gray-700 hover:text-red-600"
              >
                Contact Us
              </Link>
            </div>
            {/* Top-to-bottom button */}
            <button
              id="btn-back-to-top"
              onClick={scrollToTop}
              className={`fixed bottom-4  right-4 h-12 w-11 bg-red-600 text-white rounded-3xl ${isVisible ? '' : 'hidden'}`}
            >
              <i className="fas fa-arrow-up"></i>
            </button>

            {/* WhatsApp button */}
            <button className="fixed bottom-4 left-4 bg-green-600  rounded-3xl">
              <img
                src="https://truckmeru.com/front/assets/WhatsAppButtonGreenSmall.svg"
                alt="Chat with TruckMeru on Whatsapp"
              />
            </button>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white font-bold text-base h-8 w-20 sm:h-10 sm:w-24 md:h-12 md:w-28 lg:h-14 lg:w-32 px-2 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300  sm:text-base md:text-lg"
            >
              Logout
            </button>

            {/* Hamburger Menu Icon - Visible below 950px */}

            <div className="block md:hidden p-4" onClick={toggleMenu}>
              <Hamburger toggle={setOpen} />
            </div>

            {/* Mobile Menu - Visible when isOpen is true */}
            {IsOpen && (
              <div className="absolute text-white">
                <div
                  className="fixed top-0 left-0  w-full opacity-50 z-10 bg-black"
                  id="overlay"
                ></div>
                <nav
                  className=" fixed top-0 left-0 w-64 bg-gray-800 h-full p-12 box-border"
                  id="sidebar"
                >
                  <div>
                    <h2 className="text-xl">Truck Meru</h2>
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-none border-none text-2xl cursor-pointer absolute top-5 right-5"
                      id="closeMenu"
                    >
                      &times;
                    </button>
                  </div>
                  <ul className="list-none p-0 text-lg">
                    <li className="my-5 mx-0">
                      <a href="/">Home</a>
                    </li>
                    <div className="transition group ease duration-500 ">
                      <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                        <li className="my-5 mx-0 gap-6 ">
                          <Link href="#ServiceInCities" onClick={toggleMenu}>Service In Cities</Link>
                        </li>
                        <div
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {isOpen && (
                    <div >
                      <div>
                        {city.map((item, index) => (
                          <Link
                            key={index}
                            to={`/transport-service-in-${item.CityName}`}
                            className="block px-4 py-2 hover:text-red-600"
                          >
                            {item.CityName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                      </div>
                    </div>
                    <li className="my-5 mx-0">
                      <a href="/about">About Us</a>
                    </li>
                    <li className="my-5 mx-0">
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
