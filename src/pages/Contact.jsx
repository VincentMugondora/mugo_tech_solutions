import React from 'react';

const Contact = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Contact Us Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">Contact us</h1>
        <p className="text-gray-600">We would love to hear from you.</p>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Info Card */}
        <div className="bg-indigo-900 text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-orange-400 uppercase tracking-wide">Get in Touch</h2>
            <p className="mb-6 text-lg font-bold">Don't hesitate to contact us for more information.</p>
            <p className="mb-8 text-indigo-100">We're here to help you accelerate your business with innovative technology solutions.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-orange-400">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="currentColor"/></svg>
                </span>
                <div>
                  <div className="font-bold">Head Office</div>
                  <div>123 Innovation Drive, Suite 400<br/>Nairobi, Kenya</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-orange-400">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h10v2H4z" fill="currentColor"/></svg>
                </span>
                <div>
                  <div className="font-bold">Email Us</div>
                  <div>support@mugotech.com<br/>info@mugotech.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-orange-400">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C7.61 21 3 16.39 3 11a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" fill="currentColor"/></svg>
                </span>
                <div>
                  <div className="font-bold">Call Us</div>
                  <div>Phone: +254 700 123 456<br/>Fax: +254 20 123 457</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Send us a message</h2>
          <p className="text-gray-500 mb-6">Have a question or want to discuss your project? Fill out the form and our team will get back to you promptly.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="text" placeholder="Company" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Phone" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <input type="text" placeholder="Subject" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <textarea placeholder="Message" rows={4} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Send</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="MugoTech Location"
          src="https://www.google.com/maps?q=123+Innovation+Drive,+Nairobi,+Kenya&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Get Free Trial Section */}
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

export default Contact; 