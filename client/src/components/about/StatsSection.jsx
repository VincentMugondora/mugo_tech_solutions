import React from 'react';

const stats = [
  { label: 'Projects Delivered', value: '18K+' },
  { label: 'Satisfied Clients', value: '7K+' },
  { label: 'Client Rating', value: '4.9/5' },
];

const bgImages = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/65.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/12.jpg',
  'https://randomuser.me/api/portraits/women/22.jpg',
  'https://randomuser.me/api/portraits/men/41.jpg',
  'https://randomuser.me/api/portraits/women/51.jpg',
];

const StatsSection = () => (
  <section className="relative py-20 px-4 md:px-0 bg-indigo-900 overflow-hidden">
    {/* Background grid of images */}
    <div className="absolute inset-0 opacity-20 grid grid-cols-4 gap-4 pointer-events-none">
      {bgImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Client or Team"
          className="w-full h-32 object-cover rounded-xl grayscale"
        />
      ))}
    </div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-indigo-900/80" />
    <div className="relative z-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-6">Let us build the bridge between your brand and technology</h2>
      <p className="text-indigo-100 text-center max-w-2xl mb-10">We're trusted by thousands of clients to deliver secure, scalable, and innovative solutions that drive real business value.</p>
      <div className="flex flex-wrap gap-10 justify-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-[#FF9944]">{stat.value}</span>
            <span className="text-indigo-100 text-lg font-medium mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection; 