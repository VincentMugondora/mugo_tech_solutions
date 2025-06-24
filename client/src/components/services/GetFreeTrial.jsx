import React from "react";

const GetFreeTrial = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-orange-100 via-white to-orange-50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left: Form */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Get free trial</h2>
        <p className="text-gray-700 mb-6 max-w-md">Consult with our experts to initiate your free trial and see how our solutions fit your needs.</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Company" className="p-3 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Phone" className="p-3 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Email" className="p-3 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">GET FREE TRIAL &amp; QUOTE</button>
          </div>
        </form>
      </div>
      {/* Right: Image */}
      <div className="flex-1 w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
          alt="Consultation"
          className="w-80 h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default GetFreeTrial; 