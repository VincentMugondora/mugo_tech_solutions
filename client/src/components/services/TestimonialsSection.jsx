import React from "react";

const testimonials = [
  {
    quote: "Their expertise and dedication helped us achieve outstanding results. Highly recommended!",
    name: "Anna Benson",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Professional, reliable, and always available. Our go-to partner for digital solutions.",
    name: "James Brown",
    role: "CEO, TechCorp",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "They truly care about our success and deliver beyond expectations every time.",
    name: "Christine Smith",
    role: "Operations Manager",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left: Testimonials */}
      <div className="flex-1 w-full">
        <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2 block">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What they say about us</h2>
        <div className="flex flex-col gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4 shadow hover:shadow-lg transition">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-200" />
              <div>
                <p className="text-gray-700 text-base mb-2">"{t.quote}"</p>
                <div className="font-semibold text-blue-900 text-sm leading-tight">{t.name}</div>
                <div className="text-xs text-orange-500 font-bold uppercase">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          alt="Happy client"
          className="w-80 h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 