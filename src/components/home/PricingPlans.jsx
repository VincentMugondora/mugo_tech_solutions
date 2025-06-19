import React from "react";

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small businesses and startups looking to launch and grow.",
    features: [
      "Basic cloud hosting",
      "Standard support",
      "Up to 3 projects",
      "Basic security monitoring",
      "Monthly reporting",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: 99,
    description: "For scaling companies needing advanced features and priority support.",
    features: [
      "Advanced cloud hosting",
      "Priority support",
      "Up to 10 projects",
      "Enhanced security & compliance",
      "Weekly reporting",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations with complex, custom requirements.",
    features: [
      "Custom cloud infrastructure",
      "Dedicated account manager",
      "Unlimited projects",
      "24/7 monitoring & response",
      "Custom integrations",
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="py-20 px-4 md:px-0 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2 block">Choose Plan</span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-4">
          Providing brilliant ideas for your business.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-end mb-12">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative bg-white rounded-2xl shadow-lg flex-1 max-w-sm mx-auto px-8 py-10 flex flex-col items-center border transition-all duration-300 ${
              plan.popular
                ? "z-10 scale-105 border-orange-200 shadow-2xl"
                : "border-gray-100"
            }`}
            style={plan.popular ? { marginTop: '-32px', marginBottom: '-32px' } : {}}
          >
            {plan.popular && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow">MOST POPULAR</span>
            )}
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-4 text-center">{plan.description}</p>
            <div className="text-4xl font-extrabold text-orange-500 mb-1">${plan.price}</div>
            <div className="text-xs text-gray-400 mb-6 tracking-widest">MONTHLY</div>
            <ul className="w-full mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 py-1 text-blue-900">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-500">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            {plan.popular ? (
              <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold py-3 rounded-lg shadow hover:from-orange-500 hover:to-yellow-500 transition-all">GET STARTED</button>
            ) : (
              <button className="w-full border-2 border-orange-400 text-orange-500 font-semibold py-3 rounded-lg hover:bg-orange-50 transition-all">GET STARTED</button>
            )}
            <div className="text-[11px] text-gray-400 mt-4">*Viverra ullamcorper consectetur interdum mus adipiscing ultricies elit felis et leo</div>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-center mt-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">Need custom solutions?</h3>
        <p className="text-gray-500 mb-6">Looking for something unique? Our experts can design a bespoke solution tailored to your business needs. Contact us for a free consultation.</p>
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all">CONTACT US</button>
      </div>
    </section>
  );
};

export default PricingPlans; 