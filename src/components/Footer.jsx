import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      {/* Footer Section */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center mb-3">
              <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#4F46E5" />
                <path d="M8,14 L14,8 L20,14 L14,20 L8,14" fill="#fff" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-indigo-900">MugoTech</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Empowering businesses through innovative technology solutions. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200"><FaFacebookF /></a>
              <a href="#" className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200"><FaLinkedinIn /></a>
              <a href="#" className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200"><FaTwitter /></a>
              <a href="#" className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200"><FaInstagram /></a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
              <li>Custom Software Development</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Stay Updated</h4>
            <p className="text-gray-600 text-sm mb-3">
              Subscribe to our newsletter for the latest tech insights and company updates.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-md shadow hover:from-indigo-700 hover:to-blue-700 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-xs flex flex-col md:flex-row md:justify-between items-center max-w-7xl mx-auto px-6">
          <span>
            Copyright © {new Date().getFullYear()} MugoTech Solutions. All rights reserved.
          </span>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
