import React from "react";
import { FaPlay, FaStar, FaChartLine, FaUsers } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Column */}
        <div className="flex-1 w-full">
          <div className="mb-4">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Innovative Tech Solutions
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Transform Your Business<br />
            With Modern Technology
          </h1>
          <p className="text-gray-600 mb-7 max-w-md">
            We deliver cutting-edge software solutions, from web and mobile applications to cloud infrastructure and digital transformation services. Let's build your digital future together.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:from-indigo-700 hover:to-blue-700 transition">
              GET STARTED
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-indigo-300 bg-white text-indigo-600 hover:bg-indigo-50 transition">
              <FaPlay />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex-1 w-full flex items-center justify-center min-h-[360px]">
          {/* Decorative Circle */}
          <div className="absolute -z-10 right-0 top-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-100 opacity-80"></div>

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=800&q=80"
            alt="Tech professional working"
            className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-xl shadow-lg"
          />

          {/* Floating Stat Cards */}
          <div className="absolute top-5 left-2 md:left-8 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
            <div className="p-2 bg-indigo-100 rounded">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Projects Delivered</div>
              <div className="font-bold text-gray-700 text-lg">200+</div>
            </div>
          </div>
          <div className="absolute top-2 right-4 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-700 text-lg">50+</div>
              <div className="text-xs text-gray-400">Expert Devs</div>
            </div>
          </div>
          {/* Client Satisfaction Card (compact) */}
          <div className="absolute bottom-4 right-2 md:right-6 bg-white rounded-lg shadow-md p-2 w-56 md:w-60 text-xs transform transition-all hover:scale-105">
            <div className="flex items-center gap-1 mb-1">
              <span className="p-1 bg-indigo-100 rounded"><FaChartLine className="w-3.5 h-3.5 text-indigo-600" /></span>
              <span className="font-semibold text-gray-800 text-xs">Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-lg font-bold text-indigo-600">98%</span>
              <span className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="w-2.5 h-2.5 text-yellow-400" />
                ))}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1 mb-2">
              <div className="bg-indigo-50 rounded p-1">
                <div className="text-[10px] text-gray-500">Projects</div>
                <div className="text-xs font-bold text-indigo-700">200+</div>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <div className="text-[10px] text-gray-500">Clients</div>
                <div className="text-xs font-bold text-blue-700">150+</div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-400 w-14">Excellence</span>
                <span className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <span className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full block" style={{ width: "98%" }}></span>
                </span>
                <span className="text-[10px] font-medium text-gray-600">98%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-400 w-14">Reliability</span>
                <span className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <span className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full block" style={{ width: "95%" }}></span>
                </span>
                <span className="text-[10px] font-medium text-gray-600">95%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-400 w-14">Support</span>
                <span className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <span className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full block" style={{ width: "97%" }}></span>
                </span>
                <span className="text-[10px] font-medium text-gray-600">97%</span>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2 pt-2 border-t border-gray-100">
              <span className="flex -space-x-1">
                <span className="w-4 h-4 rounded-full bg-indigo-200 flex items-center justify-center"><FaUsers className="w-2.5 h-2.5 text-indigo-600" /></span>
                <span className="w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center"><FaUsers className="w-2.5 h-2.5 text-blue-600" /></span>
              </span>
              <span className="text-[10px] text-gray-500"><span className="font-semibold text-gray-700">50+</span> active clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="max-w-5xl mx-auto mt-12 bg-white rounded-xl shadow-md py-6 px-4 flex flex-col items-center">
        <div className="text-lg md:text-xl font-semibold text-gray-800 mb-5 text-center">
          Trusted by Leading Companies
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Replace with actual tech company or client logos */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" 
               alt="Google" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" 
               alt="IBM" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" 
               alt="Microsoft" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
               alt="Amazon" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition" />
        </div>
      </div>
    </section>
  );
}
