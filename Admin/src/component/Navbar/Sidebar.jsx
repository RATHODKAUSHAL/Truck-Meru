import React, { useState } from 'react';
import { FaTruck, FaUser, FaMapMarkerAlt, FaBoxes, FaExternalLinkAlt, FaTruckMoving, FaDollarSign, FaBuilding, FaLink, FaStar } from 'react-icons/fa';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <>
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
    <div className="flex items-center sm:h-16 sm:w-44 mb-4">
      <a href="/">
        <img
          src="https://truckmeru.com/front/assets/img/logo.svg"
          alt="Logo"
          className="h-20 w-52"
        />
      </a>
    </div>
    
    
    <nav className="space-y-2">
      <a href="/admin/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaTruck className="mr-3" />
        <span>Dashboard</span>
      </a>

      <div className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => handleDropdownClick('User')}>
        <FaUser className="mr-3" />
        <span>User</span>
        <span className="ml-auto">{openDropdown === 'User' ? '-' : '+'}</span>
      </div>
      {openDropdown === 'User' && (
        <div className="ml-6 space-y-1">
          <a href="/admin/material/subsection1" className="block p-2 hover:bg-gray-700 rounded">User</a>
        </div>
      )}

      <div className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => handleDropdownClick('Locations')}>
        <FaMapMarkerAlt className="mr-3" />
        <span>Locations</span>
        <span className="ml-auto">{openDropdown === 'Locations' ? '-' : '+'}</span>
      </div>
      {openDropdown === 'Locations' && (
        <div className="ml-6 space-y-1">
          <a href="/admin/city" className="block p-2 hover:bg-gray-700 rounded">City</a>
        </div>
      )}

      <div className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => handleDropdownClick('material')}>
        <FaBoxes className="mr-3" />
        <span>Material</span>
        <span className="ml-auto">{openDropdown === 'material' ? '-' : '+'}</span>
      </div>
      {openDropdown === 'material' && (
        <div className="ml-6 space-y-1">
          <a href="/admin/material/subsection1" className="block p-2 hover:bg-gray-700 rounded">Subsection 1</a>
          <a href="/admin/material/subsection2" className="block p-2 hover:bg-gray-700 rounded">Subsection 2</a>
        </div>
      )}

      <a href="/admin/external-trackings" className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaExternalLinkAlt className="mr-3" />
        <span>External Trackings</span>
      </a>

      <a href="/admin/driver-master" className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaTruckMoving className="mr-3" />
        <span>Driver Master</span>
      </a>

      <a href="/admin/pricing" className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaDollarSign className="mr-3" />
        <span>Pricing</span>
      </a>

      <a href="/admin/company" className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaBuilding className="mr-3" />
        <span>Company</span>
      </a>

      <a href="/admin/site-urls" className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaLink className="mr-3" />
        <span>Site URLs</span>
      </a>

      <a href="/admin/customer-review" className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaStar className="mr-3" />
        <span>Customer Review</span>
      </a>
    </nav>
  </div>


 
    </>
  );
};

export default Sidebar;
