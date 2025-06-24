import React from 'react';

const ContactTrialSection = () => (
  <section className="relative py-20 flex flex-col items-center justify-center bg-white overflow-hidden">
    {/* Orange swoosh background */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF9944]/30 rounded-full blur-3xl z-0" />
    <div className="relative z-10 w-full max-w-3xl mx-auto">
      <div className="backdrop-blur-lg bg-white/80 border border-indigo-100 rounded-2xl shadow-2xl p-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2 text-center">Get free trial</h2>
        <p className="text-indigo-700 mb-8 text-center max-w-md">Contact us for a free consultation and discover how MugoTech Solutions can accelerate your business growth.</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <input type="text" placeholder="Name" className="bg-indigo-50 rounded-lg px-4 py-3 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-[#FF9944]" />
          <input type="text" placeholder="Company" className="bg-indigo-50 rounded-lg px-4 py-3 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-[#FF9944]" />
          <input type="tel" placeholder="Phone" className="bg-indigo-50 rounded-lg px-4 py-3 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-[#FF9944]" />
          <input type="email" placeholder="Email" className="bg-indigo-50 rounded-lg px-4 py-3 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-[#FF9944]" />
          <div className="md:col-span-2 flex justify-center mt-2">
            <button type="submit" className="bg-[#FF9944] text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-500 transition">Get Free &amp; Quote</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactTrialSection; 