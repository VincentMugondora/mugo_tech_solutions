import React from "react";

const services = [
  {
    title: "IT Consulting",
    description: "Strategic guidance to align your technology with your business goals and drive digital transformation.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Seamless migration, management, and optimization of your cloud infrastructure for agility and scalability.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 18a4 4 0 0 0-3-7.87A5 5 0 1 0 6 17h11z" />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    description: "Bespoke applications designed to solve your unique business challenges and accelerate growth.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M8 10h8M8 14h4" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive protection for your data, systems, and reputation with proactive security solutions.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z" />
        <circle cx="12" cy="12" r="3" />
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
          <div className="mb-6 rounded-xl p-3 flex items-center justify-center bg-blue-100 text-blue-600">
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