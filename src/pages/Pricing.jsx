import React, { useState } from 'react';

const pricingPlans = [
  {
    title: 'Starter Plan',
    price: '$49',
    period: 'per month',
    description: 'Perfect for startups and small businesses looking to establish a digital presence.',
    features: [
      'Up to 3 active projects',
      'Basic cloud hosting',
      'Email & chat support',
      'Monthly analytics report',
      'Access to knowledge base',
    ],
    button: 'Get Started',
    popular: false,
  },
  {
    title: 'Growth Plan',
    price: '$79',
    period: 'per month',
    description: 'Our most popular plan for growing teams that need more power and flexibility.',
    features: [
      'Up to 10 active projects',
      'Premium cloud hosting',
      'Priority email & chat support',
      'Weekly analytics report',
      'Team collaboration tools',
    ],
    button: 'Start Growing',
    popular: true,
  },
  {
    title: 'Enterprise Plan',
    price: '$129',
    period: 'per month',
    description: 'Advanced solutions for established businesses with custom needs and dedicated support.',
    features: [
      'Unlimited projects',
      'Dedicated cloud infrastructure',
      '24/7 phone & priority support',
      'Custom analytics & reporting',
      'Dedicated account manager',
    ],
    button: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  {
    q: 'What is included in the Starter Plan?',
    a: 'The Starter Plan includes up to 3 active projects, basic cloud hosting, email & chat support, monthly analytics, and access to our knowledge base.'
  },
  {
    q: 'Can I upgrade or downgrade my plan at any time?',
    a: 'Yes! You can change your plan at any time from your account dashboard or by contacting our support team.'
  },
  {
    q: 'Do you offer custom solutions for enterprises?',
    a: 'Absolutely. Our Enterprise Plan is fully customizable. Contact our sales team to discuss your specific requirements.'
  },
  {
    q: 'Is there a free trial available?',
    a: 'Yes, you can try any plan free for 14 days. No credit card required.'
  },
  {
    q: 'How does customer support work?',
    a: 'Support is available via email and chat for all plans. Growth and Enterprise plans receive priority and 24/7 support options.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
  },
  {
    q: 'Is my data secure with MugoTech?',
    a: 'Yes, we use industry-leading security practices and cloud infrastructure to keep your data safe and private.'
  },
  {
    q: 'Can I cancel at any time?',
    a: 'Yes, you can cancel your subscription at any time. Your service will remain active until the end of your billing period.'
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen max-w-7xl mx-auto px-4 md:px-8">
      {/* Pricing Plan Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">Our Pricing Plans</h1>
        <p className="text-gray-600">Flexible solutions for every stage of your business growth.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {pricingPlans.map((plan, idx) => (
          <div key={idx} className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 ${plan.popular ? 'border-orange-400 scale-105 z-10' : 'border-transparent'} relative`}>
            {plan.popular && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
            )}
            <h3 className="text-lg font-bold text-indigo-900 mb-2">{plan.title}</h3>
            <p className="text-gray-500 mb-4 text-center">{plan.description}</p>
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
        <h3 className="text-lg font-bold text-indigo-900 mb-2">Need a tailored solution?</h3>
        <p className="text-gray-600 mb-4 max-w-xl mx-auto">MugoTech offers custom digital solutions to fit your unique business needs. Reach out to our team for a personalized quote or to discuss your project requirements.</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Empower Your Brand with Smart Communication</h2>
          <p className="text-gray-200 mb-6">Let MugoTech help you connect, engage, and grow with innovative marketing strategies and digital communication tools designed for results.</p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Discover More</button>
        </div>
        <div className="flex-1 flex items-end justify-end">
          <img src="https://img.freepik.com/free-photo/3d-rocket-icon-startup-business-concept_107791-16691.jpg?w=740" alt="Rocket" className="w-64 h-64 object-contain md:mr-8 md:mb-0 mb-4" />
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="uppercase text-xs font-bold text-orange-400 tracking-widest mb-2 inline-block">Why Choose MugoTech</span>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-3">Your Success is Our Mission</h2>
          <p className="text-gray-600 mb-6">We combine technical expertise, industry experience, and a passion for innovation to deliver solutions that drive real business results. Partner with us for reliability, creativity, and ongoing support.</p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Learn More</button>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
            <span className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            </span>
            <div>
              <div className="font-bold text-indigo-900">Certified Experts</div>
              <div className="text-gray-600 text-sm">Our team is made up of certified professionals with years of experience in software, cloud, and digital marketing.</div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
            <span className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            </span>
            <div>
              <div className="font-bold text-indigo-900">Fast, Accurate & Reliable</div>
              <div className="text-gray-600 text-sm">We deliver on time, every time, with a focus on quality and customer satisfaction.</div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
            <span className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            </span>
            <div>
              <div className="font-bold text-indigo-900">24/7 Premium Support</div>
              <div className="text-gray-600 text-sm">Get help whenever you need it with our around-the-clock support for all premium clients.</div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <button
                className="w-full text-left font-semibold text-indigo-900 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {item.q}
                <span className="ml-2 text-orange-400">{openFaq === i ? '-' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="mt-2 text-gray-600 text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Get Free Trial Section (reuse from Contact) */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Try MugoTech Free for 14 Days</h2>
        <p className="text-gray-600 mb-6 text-center">Experience the difference with a no-risk, no-obligation free trial. Discover how our solutions can help your business grow.</p>
        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Company" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Phone" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
        </form>
        <button className="w-full md:w-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2.5 px-8 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Start Free Trial</button>
      </div>
    </div>
  );
};

export default Pricing; 