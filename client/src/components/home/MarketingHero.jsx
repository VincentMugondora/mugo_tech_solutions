import React from "react";

const MarketingHero = () => {
  return (
    <section className="relative min-h-[340px] md:min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Rocket image right */}
      <img
        src="https://img.freepik.com/free-photo/3d-rocket-icon-startup-business-concept_107791-16691.jpg?w=740"
        alt="Rocket Launch"
        className="hidden md:block absolute right-0 bottom-0 w-64 h-64 object-contain z-10"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
      />
      {/* Button image left (optional) */}
      <img
        src="https://img.freepik.com/free-photo/red-button-isolated_1308-114497.jpg?w=740"
        alt="Red Button"
        className="hidden md:block absolute left-0 bottom-0 w-32 h-32 object-contain z-10"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
      />
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-gray-900/70 z-0" />
      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-20 w-full max-w-2xl mx-auto">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500 mb-6">
          {/* Speaker/Megaphone Icon */}
          <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 10v4a1 1 0 0 0 1 1h2l3 3V6L6 9H4a1 1 0 0 0-1 1z" />
            <path d="M16 8a4 4 0 0 1 0 8" />
          </svg>
        </span>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Accelerate Your Growth with<br /> Digital Strategy & Communication
        </h1>
        <p className="text-gray-200 mb-6 max-w-lg mx-auto">
          MugoTech Solutions helps you connect, engage, and grow your audience through innovative digital strategies, seamless communication, and technology-driven campaigns. Let us power your next big leap.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all">
          START YOUR PROJECT
        </button>
      </div>
    </section>
  );
};

export default MarketingHero; 