// AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-24 px-4 md:px-0 flex justify-center items-center min-h-[600px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
        {/* Left: Redesigned Image, Overlay, Badge, Accent */}
        <div className="relative flex-shrink-0 flex justify-center items-center w-full md:w-1/2 min-h-[340px] md:min-h-[400px]">
          {/* Animated Accent */}
          <span className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-tr from-orange-400 to-indigo-400 rounded-full blur-md opacity-70 animate-pulse" />
          {/* Techy SVG Overlay (hexagons) */}
          <svg className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#6366f1" strokeWidth="2">
              <polygon points="128,16 160,32 160,64 128,80 96,64 96,32" fill="none" />
              <polygon points="128,80 160,96 160,128 128,144 96,128 96,96" fill="none" />
              <polygon points="128,144 160,160 160,192 128,208 96,192 96,160" fill="none" />
              <polygon points="64,64 96,80 96,112 64,128 32,112 32,80" fill="none" />
              <polygon points="192,64 224,80 224,112 192,128 160,112 160,80" fill="none" />
            </g>
          </svg>
          {/* Circular Image with Bold Gradient Border */}
          <div className="relative z-20 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl flex items-center justify-center border-8 border-transparent bg-gradient-to-tr from-orange-300 via-white to-indigo-400 p-1">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
              <img
                src="https://img.freepik.com/free-photo/group-young-african-males-discussing-project-while-using-their-laptop-phones_181624-45059.jpg?uid=R204178159&ga=GA1.1.502612312.1749817823&semt=ais_hybrid&w=740"
                alt="MugoTech Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Experience Badge as Glassy Chip with Icon */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md shadow-lg border border-orange-200">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-orange-400 to-indigo-400 text-white shadow-md mr-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2M4 12H2m3.636-6.364l1.414 1.414M12 22v-2m6.364-1.636l-1.414-1.414M2 12h2m3.636 6.364l1.414-1.414"/></svg>
            </span>
            <span className="text-orange-600 text-lg font-bold">25+</span>
            <span className="text-gray-700 text-xs font-medium ml-1">Years of Experience</span>
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
            <span className="text-indigo-800">Your Vision. Our Expertise. Real Results.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At MugoTech Solutions, we're passionate about solving complex business challenges with technology. Our certified experts partner with you to deliver tailored solutions, from cloud migration to custom software, always with a focus on transparency, agility, and measurable impact.
          </p>
          {/* Services */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-2xl flex-shrink-0 mt-1">
                {/* Cloud Solutions Icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 18a4 4 0 0 0-3-7.87A5 5 0 1 0 6 17h11z" /></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Cloud Solutions</h4>
                <p className="text-gray-500 text-sm">Seamless migration, management, and optimization of your cloud infrastructure for agility and scalability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-2xl flex-shrink-0 mt-1">
                {/* IT Consulting Icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="14" cy="14" r="10" /><path d="M14 10v4l3 2" /></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">IT Consulting</h4>
                <p className="text-gray-500 text-sm">Strategic guidance to align your technology with your business goals and drive digital transformation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-2xl flex-shrink-0 mt-1">
                {/* Custom Software Icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="10" width="16" height="10" rx="2"/><path d="M6 10V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Custom Software</h4>
                <p className="text-gray-500 text-sm">Bespoke applications designed to solve your unique business challenges and accelerate growth.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-2xl flex-shrink-0 mt-1">
                {/* Cybersecurity Icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Cybersecurity</h4>
                <p className="text-gray-500 text-sm">Comprehensive protection for your data, systems, and reputation with proactive security solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
