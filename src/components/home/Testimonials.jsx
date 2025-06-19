import React from "react";

const testimonials = [
  {
    quote:
      "Per suscipit aptent senectus leo mollis sociosqu ad. Sodales quam accumsan ad maecenas nisi. Lorem faucibus venenatis dolor sem ultricies ipsum mollis ac.",
    name: "Aviana Benson",
    location: "JAKARTA",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Per suscipit aptent senectus leo mollis sociosqu ad. Sodales quam accumsan ad maecenas nisi. Lorem faucibus venenatis dolor sem ultricies ipsum mollis ac.",
    name: "Joel Baxter",
    location: "BANDUNG",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-0 bg-gradient-to-tr from-white via-yellow-50 to-orange-50 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
      {/* Left: Testimonials */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 relative z-10">
        {/* Dotted Arrow SVG */}
        <svg className="absolute -left-16 top-8 w-24 h-24 hidden md:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 Q50 10 90 60" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 6" fill="none" />
          <polygon points="88,58 90,60 88,62" fill="#6366f1" />
        </svg>
        <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2">Testimonial</span>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight mb-2">
          What they say about us
        </h2>
        <p className="text-gray-500 mb-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col gap-4">
              <p className="text-gray-700 text-base mb-2">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-orange-200" />
                <div>
                  <div className="font-semibold text-blue-900 text-sm leading-tight">{t.name}</div>
                  <div className="text-xs text-orange-500 font-bold uppercase">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Person Image with Abstract Shape */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[320px]">
        {/* Abstract Shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-orange-300 to-yellow-200 rounded-full opacity-80 -z-10" style={{clipPath: "ellipse(70% 50% at 50% 50%)"}}></div>
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          alt="Happy client"
          className="w-64 h-80 object-cover rounded-2xl shadow-xl z-10"
        />
      </div>
    </section>
  );
};

export default Testimonials; 