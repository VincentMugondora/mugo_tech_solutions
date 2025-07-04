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
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full bg-gradient-to-r from-white via-indigo-50 to-orange-50 border-b border-gray-200 shadow-lg px-0 py-3 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="transition-transform duration-200 hover:scale-105">
              <span className="text-2xl md:text-3xl font-extrabold text-indigo-900 flex items-center">
                <span className="mr-2">
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="14" fill="#4F46E5" />
                    <path d="M8,14 L14,8 L20,14 L14,20 L8,14" fill="#fff" />
                  </svg>
                </span>
                MugoTech
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex flex-1 justify-center items-center space-x-8 font-semibold text-base md:text-lg text-gray-700">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Portfolio", to: "/portfolio" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative pb-1 transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
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
              <button className="flex items-center relative pb-1 transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-indigo-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1">
                Services
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul
                className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-lg transition-all duration-200 text-base z-20 border border-gray-100"
                style={{ opacity: servicesOpen ? 1 : 0, pointerEvents: servicesOpen ? 'auto' : 'none' }}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <li><Link to="/services" className="block px-5 py-2 font-bold text-indigo-700 hover:bg-indigo-50 rounded-t-xl transition">View All Services</Link></li>
                <li><Link to="/services/it-consulting" className="block px-5 py-2 hover:bg-indigo-50 transition">IT Consulting</Link></li>
                <li><Link to="/services/cloud-solutions" className="block px-5 py-2 hover:bg-indigo-50 transition">Cloud Solutions</Link></li>
                <li><Link to="/services/custom-software" className="block px-5 py-2 hover:bg-indigo-50 transition">Custom Software Development</Link></li>
                <li><Link to="/services/cybersecurity" className="block px-5 py-2 hover:bg-indigo-50 transition">Cybersecurity</Link></li>
                <li><Link to="/services/digital-marketing" className="block px-5 py-2 hover:bg-indigo-50 transition">Digital Marketing</Link></li>
                <li><Link to="/services/seo" className="block px-5 py-2 hover:bg-indigo-50 transition">SEO</Link></li>
                <li><Link to="/services/design" className="block px-5 py-2 hover:bg-indigo-50 rounded-b-xl transition">Graphics & UI/UX Design</Link></li>
              </ul>
            </li>
            <li>
              <Link
                to="/pricing"
                className="relative pb-1 transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative pb-1 transition-colors duration-200 hover:text-indigo-700 after:content-[''] after:block after:h-0.5 after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
              >
                Contact Us
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button className="flex items-center relative pb-1 transition-colors duration-200 hover:text-orange-600 after:content-[''] after:block after:h-0.5 after:bg-orange-400 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1">
                Resources
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul
                className="absolute left-0 mt-3 w-56 bg-white/95 rounded-xl shadow-2xl transition-all duration-200 text-base z-20 border border-gray-100 backdrop-blur-md"
                style={{ opacity: resourcesOpen ? 1 : 0, pointerEvents: resourcesOpen ? 'auto' : 'none' }}
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
              >
                <li><Link to="/blog" className="block px-5 py-2 hover:bg-orange-50 rounded-t-xl transition">Blog</Link></li>
                <li><Link to="/pages" className="block px-5 py-2 hover:bg-orange-50 transition">Case Studies</Link></li>
                <li><Link to="/team" className="block px-5 py-2 hover:bg-orange-50 transition">Team</Link></li>
                <li><Link to="/pricing" className="block px-5 py-2 hover:bg-orange-50 transition">Pricing</Link></li>
                <li><Link to="/about" className="block px-5 py-2 hover:bg-orange-50 transition">About Us</Link></li>
                <li><Link to="/contact" className="block px-5 py-2 hover:bg-orange-50 rounded-b-xl transition">Contact Us</Link></li>
              </ul>
            </li>
          </ul>

          {/* Get Started Button */}
          <div className="hidden md:block ml-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-base px-6 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition flex items-center gap-2"
            >
              <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              GET A QUOTE
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden p-2.5 rounded focus:outline-none bg-white border border-gray-200 shadow"
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
        <div className="md:hidden bg-white/95 shadow-2xl rounded-b-2xl border-t border-gray-200 backdrop-blur-md">
          <ul className="flex flex-col items-start space-y-3 px-7 py-6 font-semibold text-base text-gray-700">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer">Services</summary>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><Link to="/services">View All Services</Link></li>
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
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer">Resources</summary>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><Link to="/pages">Blog</Link></li>
                  <li><Link to="/pages">Case Studies</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                to="/contact"
                className="mt-2 block w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center font-bold text-base px-4 py-2.5 rounded-full shadow-md flex items-center gap-2 justify-center"
              >
                <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
