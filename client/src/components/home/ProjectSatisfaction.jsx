import React from "react";

const ProjectSatisfaction = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-white flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
      {/* Left: Card-Style Collage with Accent */}
      <div className="relative flex-shrink-0 flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0 min-h-[320px]">
        {/* Card with gradient bar */}
        <div className="relative w-96 max-w-full h-64 bg-white rounded-2xl shadow-2xl flex items-center overflow-visible">
          {/* Vertical Gradient Bar */}
          <div className="absolute left-0 top-0 h-full w-3 rounded-l-2xl bg-gradient-to-b from-blue-500 to-blue-300" />
          {/* Trophy Badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/90 shadow text-white text-xs font-bold">
            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M7 8V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3M5 8h14v2a7 7 0 0 1-14 0V8z" /></svg>
            Top Rated
          </div>
          {/* Collage of Overlapping Images */}
          <div className="flex items-center justify-center w-full h-full pl-8 pr-8">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
              alt="Team 1"
              className="w-28 h-28 object-cover rounded-xl shadow-lg border-4 border-white -rotate-6 -ml-4 z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
              alt="Team 2"
              className="w-28 h-28 object-cover rounded-xl shadow-lg border-4 border-white rotate-3 -ml-8 z-20"
            />
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
              alt="Team 3"
              className="w-24 h-24 object-cover rounded-xl shadow-lg border-4 border-white rotate-12 -ml-8 z-0"
            />
          </div>
        </div>
      </div>
      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2">Our Project</span>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight mb-2">
          We are here for we always <br /> give you satisfaction.
        </h2>
        <p className="text-gray-500 mb-4 max-w-md">
          We deliver exceptional results for our clients, ensuring every project is completed with the highest standards of quality and client satisfaction.
        </p>
        <div className="flex gap-10 mt-2">
          <div className="flex flex-col items-start">
            <span className="text-2xl md:text-3xl font-extrabold text-orange-500">18K+</span>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Project Done</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl md:text-3xl font-extrabold text-orange-500">7K+</span>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Happy Customer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSatisfaction; 