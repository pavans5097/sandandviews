import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FortIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Itinerary', path: '/journey-map' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Our Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold text-[#003366]">
          <FortIcon />
          <span className="font-['Playfair_Display']">Sand and Views</span>
        </NavLink>
        
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-[#003366] transition duration-300 pb-1 ${
                  isActive ? 'font-bold border-b-2 border-[#003366] text-[#003366]' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-[#003366] transition duration-300 ${
                    isActive ? 'font-bold text-[#003366]' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;