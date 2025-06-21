import React from "react";

const ServicesPageHero = () => (
  <section
    className="relative flex flex-col items-center justify-center py-24 md:py-32 mt-16 overflow-hidden mb-8"
    style={{
      backgroundImage:
        "linear-gradient(rgba(16,23,42,0.7),rgba(59,130,246,0.35)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay for extra contrast */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-700/40 to-indigo-900/30 pointer-events-none" />
    <h1 className="relative text-4xl md:text-5xl font-extrabold text-white mb-4 z-10 drop-shadow-lg">Our Services</h1>
    <p className="relative text-lg md:text-xl text-blue-100 max-w-2xl text-center z-10 drop-shadow-md">
      Unlock your business potential with our innovative, reliable, and tailored technology solutions.
    </p>
  </section>
);

export default ServicesPageHero; 