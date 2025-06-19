import React from 'react';

const services = [
  {
    icon: (
      <span className="relative">
        <svg className="w-6 h-6 text-[#FF9944] drop-shadow-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
        <span className="absolute inset-0 rounded-full blur-sm opacity-40 bg-[#FF9944]" style={{zIndex: -1}}></span>
      </span>
    ),
    title: 'Cloud Solutions',
    desc: 'Seamlessly migrate, manage, and scale your business in the cloud with our certified experts ensuring security and efficiency.'
  },
  {
    icon: (
      <span className="relative">
        <svg className="w-6 h-6 text-[#FF9944] drop-shadow-glow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6M3 11a8 8 0 1116 0 8 8 0 01-16 0z"/><path d="M11 8v4l3 3"/></svg>
        <span className="absolute inset-0 rounded-full blur-sm opacity-40 bg-[#FF9944]" style={{zIndex: -1}}></span>
      </span>
    ),
    title: 'IT Consulting',
    desc: 'Transform your operations with strategic IT guidance, tailored roadmaps, and hands-on support from industry veterans.'
  }
];

const RealPeopleSection = () => (
  <section className="relative flex flex-col md:flex-row items-center justify-between gap-14 py-20 px-4 md:px-20 bg-transparent z-10 overflow-hidden">
    {/* Soft blurred gradient background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute left-0 top-0 w-2/3 h-2/3 bg-gradient-to-br from-[#FF9944]/20 via-indigo-100/40 to-white rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-200/30 via-white to-[#FF9944]/10 rounded-full blur-2xl" />
    </div>
    {/* Left */}
    <div className="flex-1 max-w-xl">
      <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-start relative">
        <span className="uppercase text-xs font-bold text-[#FF9944] tracking-widest mb-3">Who we are</span>
        <div className="flex items-start gap-3 mb-3">
          {/* Animated Dashed arrow accent */}
          <svg width="36" height="36" className="mt-2 hidden md:block animate-wiggle" fill="none" xmlns="http://www.w3.org/2000/svg" style={{animation: 'wiggle 2.5s infinite alternate'}}><path d="M34 2C20 12 8 18 2 20" stroke="#FF9944" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round"/></svg>
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 leading-tight">Real people. Real technology. <span className="text-[#FF9944]">Real results.</span></h2>
        </div>
        <p className="text-indigo-700 mb-8 text-lg">At MugoTech Solutions, our certified team partners with you to solve complex challenges, modernize your infrastructure, and accelerate growth. We're passionate about delivering secure, scalable, and innovative technology that drives measurable business value for every client.</p>
        <div className="space-y-5 w-full">
          {services.map((s) => (
            <div key={s.title} className="flex items-start gap-4">
              <div className="bg-[#FF9944]/10 rounded-xl p-3 flex items-center justify-center shadow-glow">
                {s.icon}
              </div>
              <div>
                <div className="font-semibold text-indigo-900 text-lg flex items-center gap-2">{s.title}</div>
                <div className="text-indigo-700 text-sm">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Right */}
    <div className="flex-1 flex items-center justify-center relative min-w-[280px]">
      <div className="relative flex items-center justify-center">
        {/* Animated Orange swoosh/shape */}
        <svg className="absolute -top-10 -right-10 w-72 h-72 z-0 animate-float" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{animation: 'float 8s ease-in-out infinite alternate'}}>
          <path d="M220 40C270 100 270 200 180 250C90 300 30 200 60 120C90 40 170-20 220 40Z" fill="#FF9944" fillOpacity="0.25"/>
        </svg>
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80"
          alt="MugoTech Team"
          className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-2xl relative z-10 transition-transform duration-500 hover:scale-105"
        />
        {/* 25+ Years badge */}
        <div className="absolute -top-8 -right-8 bg-white rounded-full px-9 py-6 shadow-2xl flex flex-col items-center z-20 border border-gray-100 animate-bounce-slow" style={{boxShadow: '0 8px 32px 0 rgba(255,153,68,0.15)'}}>
          <span className="text-4xl font-extrabold text-[#FF9944] leading-none">25+</span>
          <span className="text-sm text-indigo-800 font-semibold whitespace-nowrap">Years of Experience</span>
        </div>
      </div>
    </div>
    {/* Custom Animations */}
    <style>{`
      @keyframes float {
        0% { transform: translateY(0) rotate(-2deg); }
        100% { transform: translateY(18px) rotate(4deg); }
      }
      @keyframes wiggle {
        0% { transform: rotate(-2deg); }
        100% { transform: rotate(6deg); }
      }
      .animate-float { animation: float 8s ease-in-out infinite alternate; }
      .animate-wiggle { animation: wiggle 2.5s infinite alternate; }
      .drop-shadow-glow { filter: drop-shadow(0 0 8px #FF9944aa); }
      .shadow-glow { box-shadow: 0 2px 16px 0 #FF994422; }
      .animate-bounce-slow { animation: bounce 3.5s infinite alternate; }
      @keyframes bounce {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
      }
    `}</style>
  </section>
);

export default RealPeopleSection; 