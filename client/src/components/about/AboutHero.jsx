import React from 'react';

const AboutHero = () => (
  <section
    className="relative flex flex-col items-center justify-center py-24 md:py-32 mt-16 overflow-hidden mb-8 w-full min-w-0"
    style={{
      backgroundImage:
        "linear-gradient(rgba(49,46,129,0.65),rgba(99,102,241,0.35)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay for extra contrast */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-indigo-700/40 to-indigo-900/30 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg text-center">About Us</h1>
      <p className="text-lg md:text-xl text-indigo-100 max-w-2xl text-center drop-shadow-md">
        Empowering businesses with innovative technology solutions. Discover our mission, values, and the passionate team behind MugoTech Solutions.
      </p>
    </div>
  </section>
);

export default AboutHero; 