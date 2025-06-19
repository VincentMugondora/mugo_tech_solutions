import React from "react";

const ProjectSatisfaction = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-white flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
      {/* Left: Circular Image with Swoosh */}
      <div className="relative flex-shrink-0 flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
        {/* Swoosh SVG */}
        <svg className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-[340px] h-[180px] md:w-[420px] md:h-[220px] z-0" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,70 Q210,-70 420,70 Q280,220 0,70" fill="#FFD580" fillOpacity="0.7" />
        </svg>
        {/* Circular Image */}
        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white bg-gray-100 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
            alt="Team working"
            className="object-cover w-full h-full"
          />
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