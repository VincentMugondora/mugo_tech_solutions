import React from "react";

const services = [
  {
    title: "Consultations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M8 10h8M8 14h4" />
      </svg>
    ),
    gradient: true,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Paid Media Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="6" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="18" cy="12" r="2" />
      </svg>
    ),
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-white">
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
            className={`rounded-2xl shadow-lg p-8 flex flex-col items-start transition-all duration-300 h-full ${
              service.gradient
                ? "bg-gradient-to-tr from-orange-400 to-yellow-300 text-white"
                : "bg-white text-gray-900 hover:shadow-2xl"
            }`}
          >
            <div
              className={`mb-6 rounded-xl p-3 flex items-center justify-center ${
                service.gradient
                  ? "bg-white/20"
                  : "bg-orange-100 text-orange-500"
              }`}
            >
              {service.icon}
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                service.gradient ? "text-white" : "text-gray-900"
              }`}
            >
              {service.title}
            </h3>
            <p className={`text-sm ${service.gradient ? "text-white/90" : "text-gray-500"}`}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices; 