import React from "react";

const ServicesIntroSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left: Text */}
      <div className="flex-1 w-full">
        <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Sharing you and your company with the world.
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Discover how our expert team can elevate your business with innovative strategies, creative solutions, and a passion for your success. Let us help you reach new heights in your industry.
        </p>
        <button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">
          Learn More
        </button>
      </div>
      {/* Right: Image + Badge + Play */}
      <div className="flex-1 w-full flex items-center justify-center relative min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=500&q=80"
          alt="Team meeting"
          className="w-80 h-80 object-cover rounded-full shadow-lg border-8 border-orange-100"
        />
        {/* 25+ Years Badge */}
        <div className="absolute top-6 right-6 bg-white rounded-full shadow-lg px-5 py-2 flex flex-col items-center border-2 border-orange-200">
          <span className="text-2xl font-bold text-orange-500 leading-none">25+</span>
          <span className="text-xs text-gray-700 font-semibold">Years of Experience</span>
        </div>
        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center">
          <span className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-200 hover:bg-orange-100 transition">
            <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="9,7 22,12 9,17 9,7" fill="#FF9944" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
);

export default ServicesIntroSection; 