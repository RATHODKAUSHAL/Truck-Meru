import React, { useState } from 'react';
import { FaTruck, FaUser, FaMapMarkerAlt, FaBoxes, FaExternalLinkAlt, FaTruckMoving, FaDollarSign, FaBuilding, FaLink, FaStar, FaQuora } from 'react-icons/fa';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleDropdownClick = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const sidebarWidth = isHovered ? 'w-72' : 'w-20';
  const logoSrc = isHovered
    ? "https://truckmeru.com/front/assets/img/logo.svg"
    : "https://truckmeru.com/favicons/favicon.ico";

  return (
    <div
      className={`h-screen ${sidebarWidth} bg-gray-900 text-gray-300 p-4  transition-all duration-500 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-6 transition-all duration-500 ease-in-out">
        <a href="/">
          <img
            src={logoSrc}
            alt="Logo"
            className={`transition-all duration-500 ease-in-out ${isHovered ? 'h-8 w-28' : 'h-5 w-5'}`}
          />
        </a>
      </div>

      {/* Navigation Section */}
      <nav className="space-y-2">
        <NavItem href="/admin/dashboard" icon={<FaTruck size={14} />} label="Dashboard" isHovered={isHovered} />

        <DropdownItem
          section="User"
          label="User"
          icon={<FaUser size={14} />}
          isHovered={isHovered}
          openDropdown={openDropdown}
          handleDropdownClick={handleDropdownClick}
        >
          <NavItem href="/admin/user" label="User" isSubItem isHovered={isHovered} />
        </DropdownItem>

        <DropdownItem
          section="Locations"
          label="Locations"
          icon={<FaMapMarkerAlt size={14} />}
          isHovered={isHovered}
          openDropdown={openDropdown}
          handleDropdownClick={handleDropdownClick}
        >
          <NavItem href="/admin/city" label="Cities" isSubItem isHovered={isHovered} />
        </DropdownItem>

        <DropdownItem
          section="Material"
          label="Material"
          icon={<FaBoxes size={14} />}
          isHovered={isHovered}
          openDropdown={openDropdown}
          handleDropdownClick={handleDropdownClick}
        >
          <NavItem href="/admin/material/subsection1" label="Subsection 1" isSubItem isHovered={isHovered} />
          <NavItem href="/admin/material/subsection2" label="Subsection 2" isSubItem isHovered={isHovered} />
        </DropdownItem>

        <DropdownItem
          section="External Trackings"
          label="External Trackings"
          icon={<FaExternalLinkAlt size={14} />}
          isHovered={isHovered}
          openDropdown={openDropdown}
          handleDropdownClick={handleDropdownClick}
        >
          <NavItem href="/admin/External-Tracting-List" label="External Trackings" isSubItem isHovered={isHovered} />
        </DropdownItem>

        <NavItem href="/admin/transport" icon={<FaTruckMoving size={14} />} label="Transport" isHovered={isHovered} />
        <NavItem href="/admin/pricing" icon={<FaDollarSign size={14} />} label="Pricing" isHovered={isHovered} />
        <NavItem href="/admin/faq-list" icon={<FaQuora size={14} />} label="FAQ" isHovered={isHovered} />
        <NavItem href="/admin/Transport-Cities-List" icon={<FaLink size={14} />} label="Transport Cities List" isHovered={isHovered} />
        <NavItem href="/admin/Customer-List" icon={<FaStar size={14} />} label="Customer Review" isHovered={isHovered} />
      </nav>
    </div>
  );
};

const NavItem = ({ href, icon, label, isHovered, isSubItem = false }) => (
  <a
    href={href}
    className={`flex items-center p-2 hover:text-white hover:bg-gray-700 rounded transition-all duration-500 ease-in-out ${
      isSubItem ? 'ml-8 text-sm text-gray-400' : ''
    }`}
  >
    {icon && <span className="mr-3">{icon}</span>}
    <span className={`transition-opacity text-white duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0 invisible'}`}>
      {label}
    </span>
  </a>
);

const DropdownItem = ({ section, label, icon, isHovered, openDropdown, handleDropdownClick, children }) => (
  <>
    <div
      className="flex items-center p-2 hover:text-white hover:bg-gray-700 rounded cursor-pointer transition-all duration-500 ease-in-out"
      onClick={() => handleDropdownClick(section)}
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span className={`transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0 invisible'}`}>
        {label}
      </span>
      {isHovered && <span className="ml-auto">{openDropdown === section ? '-' : '+'}</span>}
    </div>
    {openDropdown === section && isHovered && (
      <div className="ml-4 space-y-1 textwhi transition-all duration-500 ease-in-out">
        {children}
      </div>
    )}
  </>
);

export default Sidebar;
