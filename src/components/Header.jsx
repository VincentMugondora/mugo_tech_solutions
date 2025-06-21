// src/components/Header.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const servicesTimeout = useRef();
  const resourcesTimeout = useRef();

  // Handlers for Services dropdown
  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 1000);
  };

  // Handlers for Resources dropdown
  const handleResourcesEnter = () => {
    clearTimeout(resourcesTimeout.current);
    setResourcesOpen(true);
  };
  const handleResourcesLeave = () => {
    resourcesTimeout.current = setTimeout(() => setResourcesOpen(false), 1000);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-md">
      <nav className="w-full bg-white/70 backdrop-blur-md border-b border-white/40 shadow-xl rounded-none px-0 py-4 md:py-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-8 px-5">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <span className="text-2xl md:text-3xl font-extrabold text-indigo-900 flex items-center">
              <span className="mr-2">
                {/* Simple logo shape */}
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="#4F46E5" />
                  <path d="M8,14 L14,8 L20,14 L14,20 L8,14" fill="#fff" />
                </svg>
              </span>
              MugoTech
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="md:flex items-center space-x-8 font-semibold text-base md:text-lg text-gray-700 justify-center">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
                  style={{ paddingBottom: 2 }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className="relative group"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="flex items-center relative transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1">
                Services
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-3 w-52 bg-white/90 backdrop-blur-md rounded shadow-lg transition-opacity duration-200 text-base z-20 border border-white/40 ${servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <li><Link to="/services" className="block px-5 py-2 font-bold text-indigo-700 hover:bg-indigo-50 transition">View All Services</Link></li>
                <li><Link to="/services/it-consulting" className="block px-5 py-2 hover:bg-indigo-50 transition">IT Consulting</Link></li>
                <li><Link to="/services/cloud-solutions" className="block px-5 py-2 hover:bg-indigo-50 transition">Cloud Solutions</Link></li>
                <li><Link to="/services/custom-software" className="block px-5 py-2 hover:bg-indigo-50 transition">Custom Software Development</Link></li>
                <li><Link to="/services/cybersecurity" className="block px-5 py-2 hover:bg-indigo-50 transition">Cybersecurity</Link></li>
                <li><Link to="/services/digital-marketing" className="block px-5 py-2 hover:bg-indigo-50 transition">Digital Marketing</Link></li>
                <li><Link to="/services/seo" className="block px-5 py-2 hover:bg-indigo-50 transition">SEO</Link></li>
                <li><Link to="/services/design" className="block px-5 py-2 hover:bg-indigo-50 transition">Graphics & UI/UX Design</Link></li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
                style={{ paddingBottom: 2 }}
              >
                Contact Us
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button className="flex items-center relative transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1">
                Resources
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-3 w-40 bg-white/90 backdrop-blur-md rounded shadow-lg transition-opacity duration-200 text-base z-20 border border-white/40 ${resourcesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
              >
                <li><Link to="/pages" className="block px-5 py-2 hover:bg-indigo-50 transition">Blog</Link></li>
                <li><Link to="/pages" className="block px-5 py-2 hover:bg-indigo-50 transition">Case Studies</Link></li>
              </ul>
            </li>
          </ul>

          {/* Get Started Button */}
          <div className="hidden md:block md:ml-8">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-base px-6 py-2.5 rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-700 transition"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden p-2.5 rounded focus:outline-none bg-white/80 backdrop-blur border border-white/40 shadow"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur shadow-lg rounded-b-2xl">
          <ul className="flex flex-col items-start space-y-3 px-7 py-6 font-semibold text-base text-gray-700">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer">Services</summary>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><Link to="/services/it-consulting">IT Consulting</Link></li>
                  <li><Link to="/services/cloud-solutions">Cloud Solutions</Link></li>
                  <li><Link to="/services/custom-software">Custom Software Development</Link></li>
                  <li><Link to="/services/cybersecurity">Cybersecurity</Link></li>
                  <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
                  <li><Link to="/services/seo">SEO</Link></li>
                  <li><Link to="/services/design">Graphics & UI/UX Design</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer">Resources</summary>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><Link to="/pages">Blog</Link></li>
                  <li><Link to="/pages">Case Studies</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                to="/contact"
                className="mt-2 block w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center font-bold text-base px-4 py-2.5 rounded-lg shadow-md"
              >
                GET A QUOTE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
