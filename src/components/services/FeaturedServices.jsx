import React from "react";

const services = [
  {
    title: "Consultations",
    description: "Expert advice to help you navigate business challenges and seize new opportunities.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    description: "Boost your online visibility and attract more customers with proven SEO strategies.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Paid Media Management",
    description: "Maximize your ROI with expertly managed advertising campaigns across all platforms.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    description: "Engage your audience and grow your brand with creative, consistent social media strategies.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

const FeaturedServices = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2 block">Featured Services</span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        You've got a business, <br className="hidden md:inline" /> we have got brilliant minds
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl shadow-lg p-8 flex flex-col items-center bg-white hover:shadow-2xl transition-all duration-300 h-full"
        >
          <div className="mb-6 rounded-xl p-3 flex items-center justify-center bg-orange-100 text-orange-500">
            {service.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
          <p className="text-sm text-gray-500 text-center">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedServices; 