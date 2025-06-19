import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF9944]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
    ),
    title: 'Cloud Solutions',
    desc: 'Seamlessly migrate, manage, and scale your business in the cloud with our certified experts.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF9944]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6M3 11a8 8 0 1116 0 8 8 0 01-16 0z"/><path d="M11 8v4l3 3"/></svg>
    ),
    title: 'IT Consulting',
    desc: 'Transform your operations with strategic IT guidance and hands-on support.'
  }
];

const collageImages = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
];

const RealPeopleSection = () => (
  <section className="relative flex flex-col md:flex-row items-center justify-between gap-14 py-20 px-4 md:px-20 bg-transparent z-10 overflow-hidden">
    {/* Soft blurred background shapes */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute left-0 top-0 w-2/3 h-2/3 bg-gradient-to-br from-[#FF9944]/20 via-indigo-100/40 to-white rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-200/30 via-white to-[#FF9944]/10 rounded-full blur-2xl" />
    </div>
    {/* Right: Collage effect */}
    <div className="flex-[1.3] flex items-center justify-center relative min-w-[380px] order-1 md:order-2 mb-10 md:mb-0">
      <div className="relative flex items-center justify-center">
        {/* Animated Orange swoosh/shape */}
        <svg className="absolute -top-16 -right-16 w-[420px] h-[340px] z-0 animate-float" viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{animation: 'float 8s ease-in-out infinite alternate'}}>
          <defs>
            <linearGradient id="swooshGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF9944" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF9944" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path d="M320 40C370 120 370 260 260 320C150 380 50 260 80 160C110 60 270-40 320 40Z" fill="url(#swooshGradient)" />
        </svg>
        {/* Main team image, rotated */}
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=600&h=400&facepad=2&q=80"
          alt="MugoTech Team"
          className="w-[370px] h-[260px] object-cover rounded-3xl border-8 border-white shadow-2xl relative z-10 rotate-3"
        />
        {/* Collage: two smaller overlapping images */}
        <img
          src={collageImages[0]}
          alt="Team member"
          className="absolute -bottom-8 left-4 w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg z-20"
        />
        <img
          src={collageImages[1]}
          alt="Client"
          className="absolute top-8 -right-12 w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg z-20"
        />
        {/* 25+ Years badge with trophy icon */}
        <div className="absolute -top-10 -left-10 bg-white/80 backdrop-blur-md rounded-2xl px-8 py-5 shadow-2xl flex flex-col items-center z-30 border border-gray-100 animate-bounce-slow" style={{boxShadow: '0 8px 32px 0 rgba(255,153,68,0.15)'}}>
          <span className="flex items-center gap-2 text-3xl font-extrabold text-[#FF9944] leading-none">
            <svg className="w-7 h-7 text-[#FF9944]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3a1 1 0 0 1 1 1v2a3 3 0 0 1-2 2.83V9a5 5 0 1 1-6 0V8.83A3 3 0 0 1 6 6V4a1 1 0 0 1 1-1h10zm-5 16a7 7 0 0 0 7-7V7h2a1 1 0 0 1 1 1v2a9 9 0 1 1-18 0V8a1 1 0 0 1 1-1h2v2a7 7 0 0 0 7 7z"/></svg>
            25+
          </span>
          <span className="text-xs text-indigo-800 font-semibold whitespace-nowrap">Years of Experience</span>
        </div>
      </div>
    </div>
    {/* Left: Glassy card with accent bar */}
    <div className="flex-1 max-w-xl flex order-2 md:order-1 w-full">
      <div className="hidden md:block w-2 bg-[#FF9944] rounded-2xl mr-6" style={{minHeight: '340px'}}></div>
      <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col items-start relative w-full">
        <span className="uppercase text-xs font-bold text-[#FF9944] tracking-widest mb-3">Who we are</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 leading-tight mb-4">Real people. Real technology. <span className="text-[#FF9944]">Real results.</span></h2>
        <p className="text-indigo-700 mb-8 text-lg">At MugoTech Solutions, our certified team partners with you to solve complex challenges, modernize your infrastructure, and accelerate growth. We deliver secure, scalable, and innovative technology that drives measurable business value.</p>
        <div className="flex flex-col gap-4 w-full">
          {services.map((s) => (
            <div key={s.title} className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-indigo-100 rounded-xl px-5 py-4 shadow-md transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg cursor-pointer">
              <div className="bg-[#FF9944]/10 rounded-lg p-2 flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <div className="font-semibold text-indigo-900 text-base flex items-center gap-2">{s.title}</div>
                <div className="text-indigo-700 text-sm">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Custom Animations */}
    <style>{`
      @keyframes float {
        0% { transform: translateY(0) rotate(-2deg); }
        100% { transform: translateY(18px) rotate(4deg); }
      }
      .animate-float { animation: float 8s ease-in-out infinite alternate; }
      .animate-bounce-slow { animation: bounce 3.5s infinite alternate; }
      @keyframes bounce {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
      }
    `}</style>
  </section>
);

export default RealPeopleSection; 