import React, { useState } from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Navbar = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full bg-gray-50 h-20 shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* User Logo / Avatar */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40" // Placeholder for user logo/avatar
            alt="User Logo"
            className="h-10 w-10 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <FaUser className="text-xl" />
            <span className="hidden md:inline">User</span>
          </button>

          <Transition
            as={Fragment}
            show={isDropdownOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu as="div" className="absolute right-0 mt-2 w-48 origin-top-right bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => console.log('Profile')}
                      className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    >
                      Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onLogout}
                      className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    >
                      <FaSignOutAlt className="inline mr-2" />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
