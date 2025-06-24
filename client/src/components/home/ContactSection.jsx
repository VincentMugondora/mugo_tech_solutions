import React from "react";

const ContactSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-0 bg-gradient-to-br from-[#FF9944]/10 via-white to-[#FF9944]/5 overflow-hidden flex justify-center items-center">
      {/* Decorative Accent */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#FF9944]/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF9944]/10 rounded-full blur-2xl z-0" />
      {/* Contact Card */}
      <div className="relative z-10 max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row gap-10 border border-[#FF9944]/20">
        {/* Left: Info */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="text-[#FF9944]">Contact</span> Us
          </h2>
          <p className="text-gray-600 mb-4">
            Ready to start your next project or have a question? Fill out the form or reach us directly. Our team will get back to you within 24 hours.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3">
              <svg width="22" height="22" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5" /><path d="M21 10.5l-9 5.25L3 10.5" /></svg>
              <span>hello@mugotech.com</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="22" height="22" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 1.47-1.94l2.6-.65a2 2 0 0 1 2.36 1.1l.7 1.4a2 2 0 0 0 3.58 0l.7-1.4a2 2 0 0 1 2.36-1.1l2.6.65A2 2 0 0 1 22 16.92z" /><circle cx="12" cy="7" r="4" /></svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="22" height="22" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243A8 8 0 1 1 20 12a7.963 7.963 0 0 1-2.343 4.657z" /><circle cx="12" cy="12" r="3" /></svg>
              <span>123 Tech Avenue, Nairobi, Kenya</span>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <form className="flex-1 flex flex-col gap-5">
          <div className="relative">
            <input type="text" id="name" name="name" required className="peer w-full px-4 pt-6 pb-2 border-b-2 border-[#FF9944]/40 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-[#FF9944] transition" placeholder="Your Name" />
            <label htmlFor="name" className="absolute left-4 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs">Your Name</label>
          </div>
          <div className="relative">
            <input type="email" id="email" name="email" required className="peer w-full px-4 pt-6 pb-2 border-b-2 border-[#FF9944]/40 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-[#FF9944] transition" placeholder="Your Email" />
            <label htmlFor="email" className="absolute left-4 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs">Your Email</label>
          </div>
          <div className="relative">
            <textarea id="message" name="message" rows="3" required className="peer w-full px-4 pt-6 pb-2 border-b-2 border-[#FF9944]/40 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-[#FF9944] transition resize-none" placeholder="Your Message" />
            <label htmlFor="message" className="absolute left-4 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs">Your Message</label>
          </div>
          <button type="submit" className="mt-2 bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-bold py-3 rounded-lg shadow-lg transition-all text-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 