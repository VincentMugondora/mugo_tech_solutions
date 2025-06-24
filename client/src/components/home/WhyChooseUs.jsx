import React from "react";

const features = [
  {
    title: "Certified Cloud & Security Experts",
    description:
      "Our team holds top industry certifications and brings years of hands-on experience to every project.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    description:
      "We've helped startups and enterprises alike achieve their digital goals with innovative, reliable solutions.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 16v-4m4 4V8m4 12V4" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "24/7 support and a client-first approach ensure your success at every stage.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 1.47-1.94l2.6-.65a2 2 0 0 1 2.36 1.1l.7 1.4a2 2 0 0 0 3.58 0l.7-1.4a2 2 0 0 1 2.36-1.1l2.6.65A2 2 0 0 1 22 16.92z" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 px-4 md:px-0 bg-gradient-to-tr from-orange-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-0">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative z-10">
          {/* Dotted SVG accent */}
          <svg className="absolute -left-16 top-8 w-24 h-24 hidden md:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 60 Q50 10 90 60 Q60 90 10 60" stroke="#f59e42" strokeWidth="2" strokeDasharray="4 6" fill="none" />
          </svg>
          <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Empowering your business with technology that works for you.
          </h2>
          <p className="text-gray-500 mb-6 max-w-md">
            At MugoTech Solutions, our mission is to empower organizations to thrive in a digital world. We partner with you to deliver secure, scalable, and innovative solutions that drive real business value.
          </p>
          <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-orange-500 hover:to-yellow-500 transition-all">LEARN MORE</button>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 z-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center bg-white rounded-2xl shadow p-6 gap-4">
              <div className="bg-gradient-to-tr from-orange-400 to-yellow-400 text-white rounded-xl p-3 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 