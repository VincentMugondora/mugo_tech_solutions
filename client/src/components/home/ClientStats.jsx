import React from "react";

const bgImages = [
  // Use royalty-free avatar images or placeholder faces
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "https://randomuser.me/api/portraits/men/34.jpg",
  "https://randomuser.me/api/portraits/women/35.jpg",
  "https://randomuser.me/api/portraits/men/36.jpg",
  "https://randomuser.me/api/portraits/women/37.jpg",
];

const stats = [
  { value: "200+", label: "Projects Delivered", color: "text-orange-400" },
  { value: "150+", label: "Satisfied Clients", color: "text-orange-400" },
  { value: "4.9/5", label: "Client Rating", color: "text-yellow-300" },
];

const ClientStats = () => {
  return (
    <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background grid of faces */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 w-full h-full">
        {bgImages.map((img, i) => (
          <div key={i} className="w-full h-full">
            <img
              src={img}
              alt="client face"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/90" />
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Let us build the bridge <br /> between your brand and customer
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-10">
          We build lasting partnerships and deliver measurable results for businesses of all sizes. Our clients trust us to deliver on time, on budget, and above expectations.
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center w-full">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className={`text-3xl md:text-4xl font-extrabold ${stat.color}`}>{stat.value}</span>
              <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStats; 