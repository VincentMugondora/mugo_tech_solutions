// AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-24 px-4 md:px-0 flex justify-center items-center min-h-[600px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
        {/* Left: Image, Swoosh, Badge, Effects */}
        <div className="relative flex-shrink-0 flex justify-center items-center w-full md:w-1/2 min-h-[340px] md:min-h-[400px]">
          {/* Animated Dots Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-8 left-12 w-4 h-4 bg-orange-200 rounded-full opacity-70 animate-pulse" />
            <div className="absolute bottom-10 right-16 w-3 h-3 bg-indigo-200 rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-200 rounded-full opacity-50 animate-pulse" />
          </div>
          {/* Swoosh SVG */}
          <svg className="absolute -top-6 -left-10 md:-top-10 md:-left-16 w-[340px] h-[180px] md:w-[420px] md:h-[220px] z-0" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,70 Q210,-70 420,70 Q280,220 0,70" fill="#FFD580" fillOpacity="0.8" />
          </svg>
          {/* Circular Image with Glow */}
          <div className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gray-100 flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-orange-200 before:to-indigo-200 before:blur-xl before:opacity-60">
            <img
              src="https://img.freepik.com/free-photo/group-young-african-males-discussing-project-while-using-their-laptop-phones_181624-45059.jpg?uid=R204178159&ga=GA1.1.502612312.1749817823&semt=ais_hybrid&w=740"
              alt="MugoTech Team"
              className="object-cover w-full h-full relative z-10"
            />
          </div>
          {/* Experience Badge with Glassmorphism */}
          <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 z-20 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/60 backdrop-blur-md border border-orange-100 shadow-2xl rounded-full">
            <span className="text-orange-500 text-3xl md:text-4xl font-bold drop-shadow">25+</span>
            <span className="text-gray-700 text-xs md:text-sm mt-1 text-center font-medium">Years of Experience</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 relative z-10 md:pl-8">
          {/* Arrow SVG */}
          <svg className="absolute -left-20 top-8 hidden md:block" width="70" height="36" viewBox="0 0 70 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 28 Q35 0 70 28" stroke="#FF9900" strokeWidth="3" strokeDasharray="6 6" fill="none" />
            <polygon points="68,26 70,28 68,30" fill="#FF9900" />
          </svg>
          <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2">Who We Are</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
            <span className="text-indigo-800">Real people delivering real results.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At MugoTech Solutions, we blend innovation with expertise to deliver cutting-edge digital solutions. Our passionate team of tech enthusiasts is dedicated to transforming your vision into reality through modern technology and creative problem-solving.
          </p>
          {/* Services */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-2xl flex-shrink-0 mt-1">
                {/* Web Development Icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="10" width="16" height="10" rx="2"/><path d="M6 10V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Web Development</h4>
                <p className="text-gray-500 text-sm">Custom web solutions built with modern technologies for optimal performance and user experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-2xl flex-shrink-0 mt-1">
                {/* Digital Innovation Icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2l4 8h8l-6.5 5.5L19 24l-5-4-5 4 1.5-8.5L2 10h8z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Digital Innovation</h4>
                <p className="text-gray-500 text-sm">Innovative solutions leveraging the latest technologies to drive business growth and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
