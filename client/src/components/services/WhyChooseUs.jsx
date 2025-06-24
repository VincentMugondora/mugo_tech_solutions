import React from "react";

const features = [
  {
    title: "Certified Professional & Expert",
    description: "Our team holds top industry certifications and brings years of hands-on experience to every project.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    ),
  },
  {
    title: "We're fast, Accurate & Reliable",
    description: "We deliver on time, on budget, and above expectations with a client-first approach.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 1.47-1.94l2.6-.65a2 2 0 0 1 2.36 1.1l.7 1.4a2 2 0 0 0 3.58 0l.7-1.4a2 2 0 0 1 2.36-1.1l2.6.65A2 2 0 0 1 22 16.92z" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "24/7 Premium Support",
    description: "Our support team is always available to help you, ensuring your success at every stage.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 16v-4m4 4V8m4 12V4" />
      </svg>
    ),
  },
  {
    title: "Data-Driven Success",
    description: "We use analytics and insights to drive measurable results for your business.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left: Text */}
      <div className="flex-1 w-full mb-8 md:mb-0">
        <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2 block">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          We are here for we always give you satisfaction.
        </h2>
        <p className="text-gray-600 max-w-md">
          Our commitment to excellence, innovation, and client success sets us apart. Partner with us for reliable, expert-driven solutions tailored to your business needs.
        </p>
      </div>
      {/* Right: Feature Cards */}
      <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4 shadow hover:shadow-lg transition">
            <div className="flex-shrink-0 p-2 rounded-xl bg-white shadow text-blue-700">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 