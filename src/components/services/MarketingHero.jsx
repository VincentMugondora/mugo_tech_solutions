import React from "react";

const MarketingHero = () => (
  <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left: Text & Icon */}
      <div className="flex-1 w-full text-white">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/20">
            <svg width="28" height="28" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 10v4a1 1 0 0 0 1 1h2l3 3V6L6 9H4a1 1 0 0 0-1 1z" />
              <path d="M16 8v8a2 2 0 0 0 2 2h2" />
            </svg>
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let us show you the power of marketing communication</h2>
        <p className="text-white/80 mb-6 max-w-md">
          Experience the impact of creative strategies and clear messaging. We help your brand connect, engage, and grow in a competitive market.
        </p>
        <button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">
          Discover More
        </button>
      </div>
      {/* Right: Illustration/Image */}
      <div className="flex-1 w-full flex items-center justify-center relative min-h-[220px]">
        <img
          src="https://img.freepik.com/free-vector/flat-design-megaphone-illustration_23-2148888725.jpg?auto=format&fit=crop&w=320&q=80"
          alt="Marketing Communication"
          className="w-64 h-64 object-contain drop-shadow-2xl rounded-xl bg-white/10"
        />
      </div>
    </div>
  </section>
);

export default MarketingHero; 