import React from "react";

const ServicesPageHero = () => (
  <section
    className="relative flex flex-col items-center justify-center py-24 md:py-32 mt-16 overflow-hidden mb-8 w-full min-w-0"
    style={{
      backgroundImage:
        "linear-gradient(rgba(16,23,42,0.7),rgba(59,130,246,0.35)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay for extra contrast */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-700/40 to-indigo-900/30 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg text-center">Our Services</h1>
      <p className="text-lg md:text-xl text-blue-100 max-w-2xl text-center drop-shadow-md">
        Unlock your business potential with our innovative, reliable, and tailored technology solutions.
      </p>
    </div>
  </section>
);

export default ServicesPageHero; 