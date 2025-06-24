import React from "react";

const services = [
  {
    title: "Digital Marketing",
    description: "Grow your brand and reach new audiences with data-driven digital marketing strategies.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    description: "Engage your customers and drive conversions with targeted, personalized email campaigns.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Inbound Marketing",
    description: "Attract, engage, and delight customers with valuable content and inbound strategies.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    description: "Boost your website's visibility and ranking with expert SEO services.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    description: "Build authority and trust with high-quality, relevant content tailored to your audience.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    ),
  },
  {
    title: "PPC Management",
    description: "Maximize ROI with expertly managed pay-per-click advertising campaigns.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2 12l10 7 10-7-10-7-10 7z" />
        <path d="M2 12l10 7 10-7" />
      </svg>
    ),
  },
];

const TopServicesGrid = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2 block">Top Services</span>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-4">
        Choosing An Internet Marketing Company
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl shadow-lg p-8 flex flex-col items-center bg-white hover:shadow-2xl transition-all duration-300 h-full"
        >
          <div className="mb-6 rounded-xl p-3 flex items-center justify-center bg-orange-100 text-orange-500">
            {service.icon}
          </div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">{service.title}</h3>
          <p className="text-sm text-gray-500 text-center">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TopServicesGrid; 