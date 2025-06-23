import React, { useState } from 'react';

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: '$49',
    period: 'Monthly',
    features: [
      'Laoreet luctus amet',
      'Adipiscing quisque inceptos',
      'Risus ac netus',
      'Faucibus aptent pellentesque',
      'Ornare dolor tincidunt',
    ],
    button: 'Get Started',
    popular: false,
  },
  {
    title: 'Premium Plan',
    price: '$79',
    period: 'Monthly',
    features: [
      'Laoreet luctus amet',
      'Adipiscing quisque inceptos',
      'Risus ac netus',
      'Faucibus aptent pellentesque',
      'Ornare dolor tincidunt',
    ],
    button: 'Get Started',
    popular: true,
  },
  {
    title: 'Basic Plan',
    price: '$129',
    period: 'Monthly',
    features: [
      'Laoreet luctus amet',
      'Adipiscing quisque inceptos',
      'Risus ac netus',
      'Faucibus aptent pellentesque',
      'Ornare dolor tincidunt',
    ],
    button: 'Get Started',
    popular: false,
  },
];

const faqs = [
  'Interdum parturient nunc lorem purus urna fusce?',
  'Praesent eu rhoncus aliquam mi diam?',
  'Commodo turpis amet imperdiet mauris phasellus?',
  'Arcu ligula nam vitae nunc urna?',
  'Auctor venenatis eu proin in per velit cursus?',
  'Interdum parturient nunc lorem purus urna fusce?',
  'Praesent eu rhoncus aliquam mi diam?',
  'Commodo turpis amet imperdiet mauris phasellus?',
  'Arcu ligula nam vitae nunc urna?',
  'Auctor venenatis eu proin in per velit cursus?',
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Pricing Plan Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">Pricing plan</h1>
        <p className="text-gray-600">Providing brilliant ideas for your business.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {pricingPlans.map((plan, idx) => (
          <div key={idx} className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 ${plan.popular ? 'border-orange-400 scale-105 z-10' : 'border-transparent'} relative`}>
            {plan.popular && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
            )}
            <h3 className="text-lg font-bold text-indigo-900 mb-2">{plan.title}</h3>
            <p className="text-gray-500 mb-4 text-center">Imperdiet arcu tortor, lacus tincidunt pede at penatibus lectus cursus.</p>
            <div className="text-4xl font-extrabold text-orange-500 mb-1">{plan.price}</div>
            <div className="text-xs text-gray-400 mb-6 uppercase">{plan.period}</div>
            <ul className="mb-6 space-y-2 w-full">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700"><span className="text-orange-400">•</span> {f}</li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">{plan.button}</button>
          </div>
        ))}
      </div>
      {/* Custom Services Callout */}
      <div className="text-center mb-16">
        <h3 className="text-lg font-bold text-indigo-900 mb-2">Need custom services?</h3>
        <p className="text-gray-600 mb-4 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Contact Us</button>
      </div>
      {/* Marketing Communication Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center overflow-hidden shadow-lg">
        <div className="flex-1 p-10 text-center md:text-left z-10">
          <div className="mb-4 flex justify-center md:justify-start">
            <span className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Let us show you the power of marketing communication</h2>
          <p className="text-gray-200 mb-6">Magna suspendisse porta elit vel vivamus feugiat. Porta nisl tortor risus hac tempus. Viverra potenti tristique pulvinar metus sem gravida ridiculus.</p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Discover More</button>
        </div>
        <div className="flex-1 flex items-end justify-end">
          <img src="https://img.freepik.com/free-photo/3d-rocket-icon-startup-business-concept_107791-16691.jpg?w=740" alt="Rocket" className="w-64 h-64 object-contain md:mr-8 md:mb-0 mb-4" />
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="uppercase text-xs font-bold text-orange-400 tracking-widest mb-2 inline-block">Why Choose Us</span>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-3">We are here for we always give you satisfaction.</h2>
          <p className="text-gray-600 mb-6">Diam erat vitae velit lacus ac tincidunt hendrerit cura. Laboris ante dictum augue pharetra eros massa nascetur necenas feugiat felis ultrices. Ut urna erat facilisi sapien ligula ad sollicitudin scelerisque interdum.</p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Learn More</button>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
            <span className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            </span>
            <div>
              <div className="font-bold text-indigo-900">Certified Professional & Expert</div>
              <div className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
            <span className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            </span>
            <div>
              <div className="font-bold text-indigo-900">We're fast, Accurate & Reliable</div>
              <div className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
            <span className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            </span>
            <div>
              <div className="font-bold text-indigo-900">24/7 Premium Support</div>
              <div className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8 text-center">Frequently Ask Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((q, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <button
                className="w-full text-left font-semibold text-indigo-900 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {q}
                <span className="ml-2 text-orange-400">{openFaq === i ? '-' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Get Free Trial Section (reuse from Contact) */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Get a Free Trial</h2>
        <p className="text-gray-600 mb-6 text-center">Experience the power of MugoTech solutions for your business. Sign up for a free trial and discover how we can help you grow.</p>
        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Company" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Phone" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
        </form>
        <button className="w-full md:w-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2.5 px-8 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Get Free Quote</button>
      </div>
    </div>
  );
};

export default Pricing; 