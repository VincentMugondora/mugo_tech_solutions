import React from 'react';

const ServicesHero = () => (
  <section className="relative flex flex-col items-center justify-center py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-[600px] h-[400px] bg-[#FF9944]/20 rounded-full blur-3xl absolute -top-32 -left-32" />
      <div className="w-[400px] h-[300px] bg-indigo-200/30 rounded-full blur-2xl absolute top-20 right-0" />
    </div>
    <h1 className="relative text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 z-10">Services</h1>
    <p className="relative text-lg md:text-xl text-indigo-700 max-w-2xl text-center z-10">
      Providing innovative technology solutions to help your business grow and thrive.
    </p>
  </section>
);

export default ServicesHero; 