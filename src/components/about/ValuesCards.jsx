import React from 'react';

const cards = [
  {
    title: 'Our Value',
    text: 'We deliver creative, scalable technology solutions that drive real business results. Our team is committed to innovation, transparency, and client success.',
    button: true,
  },
  {
    title: 'Our Vision',
    text: 'To empower organizations with secure, future-ready digital solutions that accelerate growth and transformation.',
    button: false,
  },
  {
    title: 'Our Mission',
    text: 'To be a trusted technology partner, delivering excellence through expertise, collaboration, and a relentless focus on client outcomes.',
    button: false,
  },
];

const ValuesCards = () => (
  <section className="py-16 px-4 md:px-16 bg-gradient-to-br from-white via-indigo-50 to-white flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {cards.map((card) => (
        <div
          key={card.title}
          className="backdrop-blur-lg bg-white/70 border border-indigo-100 rounded-2xl shadow-lg p-8 flex flex-col items-start relative"
        >
          <h3 className="text-xl font-bold text-indigo-900 mb-3">{card.title}</h3>
          <p className="text-indigo-700 mb-6">{card.text}</p>
          {card.button && (
            <button className="bg-[#FF9944] text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-orange-500 transition">Discover More</button>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ValuesCards; 