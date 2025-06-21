import React from 'react';

const ServicesIntro = () => (
  <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-4 md:px-16 bg-white relative z-10">
    {/* Left */}
    <div className="flex-1 max-w-xl">
      <span className="uppercase text-xs font-bold text-[#FF9944] tracking-widest mb-2 inline-block">Our Services</span>
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Sharing you and your company with the world.</h2>
      <p className="text-indigo-700 mb-6">Leverage our expertise to amplify your brand, reach new audiences, and drive measurable results. Our team is dedicated to your success.</p>
      <button className="bg-[#FF9944] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-orange-500 transition">Learn More</button>
    </div>
    {/* Right */}
    <div className="flex-1 flex items-center justify-center relative min-w-[280px]">
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#FF9944]/30 rounded-full z-0 blur-2xl" />
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80"
          alt="MugoTech Team"
          className="w-56 h-56 object-cover rounded-full border-8 border-white shadow-xl relative z-10"
        />
        <div className="absolute top-4 right-0 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
          <span className="text-2xl font-bold text-[#FF9944]">25+</span>
          <span className="text-xs text-indigo-800 font-semibold">Years of Experience</span>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesIntro; 