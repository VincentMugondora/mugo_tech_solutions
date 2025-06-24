import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-orange-50 px-4">
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <svg width="120" height="120" fill="none" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="60" fill="#F59E42" fillOpacity="0.08" />
          <circle cx="60" cy="60" r="40" fill="#6366F1" fillOpacity="0.12" />
          <path d="M40 80 Q60 100 80 80" stroke="#F59E42" strokeWidth="4" fill="none" />
          <circle cx="50" cy="55" r="6" fill="#6366F1" />
          <circle cx="70" cy="55" r="6" fill="#6366F1" />
        </svg>
      </div>
      <h1 className="text-7xl font-extrabold text-indigo-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link
        to="/"
        className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  </div>
);

export default NotFound; 