import React from 'react';

const team = [
  {
    name: 'Connor Brown',
    role: 'Founder',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
    ],
  },
  {
    name: 'Melissa Watts',
    role: 'Co-Founder',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
    ],
  },
  {
    name: 'Cameron Lowe',
    role: 'Cloud Expert',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
    ],
  },
  {
    name: 'Shannon Smith',
    role: 'Security Lead',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
    ],
  },
];

const TeamSection = () => (
  <section className="py-20 px-4 md:px-16 bg-white flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-2 text-center">Teamwork makes the dream work.</h2>
    <p className="text-indigo-700 mb-10 text-center max-w-xl">Meet the passionate experts behind MugoTech Solutions. Our team brings together years of experience and a relentless drive for client success.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
      {team.map((member) => (
        <div key={member.name} className="bg-indigo-50 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow" />
          <h3 className="text-lg font-bold text-indigo-900 mb-1">{member.name}</h3>
          <p className="text-[#FF9944] font-medium mb-3">{member.role}</p>
          <div className="flex gap-3">
            {member.socials.map((s, i) => (
              <a key={i} href={s.url} className="text-indigo-400 hover:text-[#FF9944] text-xl transition" target="_blank" rel="noopener noreferrer">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection; 