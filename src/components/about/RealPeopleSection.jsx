import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF9944]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
    ),
    title: 'Marketing Agency',
    desc: 'Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF9944]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6M3 11a8 8 0 1116 0 8 8 0 01-16 0z"/><path d="M11 8v4l3 3"/></svg>
    ),
    title: 'SEO Services',
    desc: 'Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.'
  }
];

const RealPeopleSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-4 md:px-16 bg-white relative z-10">
    {/* Left */}
    <div className="flex-1 max-w-xl">
      <span className="uppercase text-xs font-bold text-[#FF9944] tracking-widest mb-2 inline-block">Who we are</span>
      <div className="flex items-start gap-3 mb-2">
        {/* Dashed arrow accent */}
        <svg width="32" height="32" className="mt-2 hidden md:block" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 2C18 10 8 14 2 16" stroke="#FF9944" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round"/></svg>
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">Real people delivering <span className="text-[#FF9944]">real results.</span></h2>
      </div>
      <p className="text-indigo-700 mb-6">Pharetra ornare consequat ad ligula facilisis habitasse pretium sollicitudin natoque. Ornare parturient hendrerit vulputate mi potenti per justo. Commodo eros amet ipsum himenaeos tincidunt.</p>
      <div className="space-y-4">
        {services.map((s) => (
          <div key={s.title} className="flex items-start gap-3">
            <div className="bg-[#FF9944]/10 rounded-lg p-2 flex items-center justify-center">
              {s.icon}
            </div>
            <div>
              <div className="font-semibold text-indigo-900 flex items-center gap-2">{s.title}</div>
              <div className="text-indigo-700 text-sm">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Right */}
    <div className="flex-1 flex items-center justify-center relative min-w-[280px]">
      <div className="relative flex items-center justify-center">
        {/* Orange swoosh/shape */}
        <svg className="absolute -top-8 -right-8 w-64 h-64 z-0" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M220 40C270 100 270 200 180 250C90 300 30 200 60 120C90 40 170-20 220 40Z" fill="#FF9944" fillOpacity="0.25"/>
        </svg>
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80"
          alt="MugoTech Team"
          className="w-56 h-56 object-cover rounded-full border-8 border-white shadow-xl relative z-10"
        />
        {/* 25+ Years badge */}
        <div className="absolute -top-6 -right-6 bg-white rounded-full px-7 py-5 shadow-xl flex flex-col items-center z-20 border border-gray-100">
          <span className="text-3xl font-bold text-[#FF9944] leading-none">25+</span>
          <span className="text-xs text-indigo-800 font-semibold whitespace-nowrap">Years of Experience</span>
        </div>
      </div>
    </div>
  </section>
);

export default RealPeopleSection; 