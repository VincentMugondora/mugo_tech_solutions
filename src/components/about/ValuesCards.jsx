import React from 'react';

const ValuesCards = () => (
  <section className="py-16 px-4 md:px-16 bg-gradient-to-br from-[#fff7f0] via-white to-[#e6ffe6] flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
      {/* Left: Our Value */}
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-start justify-center min-h-[300px]">
        <span className="uppercase text-xs font-bold text-[#FF9944] tracking-widest mb-2">Our Value</span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-900 mb-4">Creative solutions deliver profits to your door.</h3>
        <p className="text-indigo-700 mb-6">Dui lacus ante hendrerit integer molestie sem non habitasse dictumst accumsan. Aenean tempor maecenas morbi facilisis enim lacinia convallis nascetur et. Feugiat porttitor eros dictum aenean morbi sociosqu dapibus.</p>
        <button className="bg-[#FF9944] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-500 transition">Discover More</button>
      </div>
      {/* Right: Vision & Mission */}
      <div className="flex flex-col gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start justify-center">
          <span className="text-lg font-bold text-indigo-900 mb-2">Our vision</span>
          <p className="text-indigo-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start justify-center">
          <span className="text-lg font-bold text-indigo-900 mb-2">Our Mission</span>
          <p className="text-indigo-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ValuesCards; 