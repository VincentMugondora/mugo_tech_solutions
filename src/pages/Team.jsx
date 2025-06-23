import React from 'react';

const teamMembers = [
  {
    name: 'Connor Brown',
    role: 'Founder',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
  {
    name: 'Melissa Watts',
    role: 'Co-Founder',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
  {
    name: 'Cameron Lowe',
    role: 'SEO Expert',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
  {
    name: 'Shannon Smith',
    role: 'Marketing Expert',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
  {
    name: 'Georgina Patel',
    role: 'Graphics Designer',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
  {
    name: 'Laura Harrison',
    role: 'Web Designer',
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
  {
    name: 'Tommy Mcdonald',
    role: 'Sales Support',
    img: 'https://randomuser.me/api/portraits/men/23.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
  {
    name: 'James Richardson',
    role: 'Technical Support',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#' },
      { icon: 'fab fa-facebook-f', url: '#' },
    ],
  },
];

const Team = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      {/* Team Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">Team</h1>
        <p className="text-gray-600">We would love to hear from you.</p>
      </div>

      {/* Experience/Quote Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="flex-1">
          <span className="uppercase text-xs font-bold text-orange-400 tracking-widest mb-2 inline-block">Our Team</span>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Alone we can do so little, together we can do so much.</h2>
          <p className="text-gray-600 mb-6">At MugoTech, we believe in the power of collaboration. Our diverse team brings together years of experience, creativity, and technical expertise to deliver outstanding results for our clients.</p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Discover More</button>
        </div>
        <div className="flex-1 flex flex-col items-center relative">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80" alt="Team" className="w-64 h-64 object-cover rounded-full shadow-lg" />
          <div className="absolute top-4 right-4 bg-white rounded-full px-6 py-3 shadow-lg flex flex-col items-center border-2 border-orange-400">
            <span className="text-2xl font-bold text-orange-500">25+</span>
            <span className="text-xs text-gray-700 font-semibold">Years of Experience</span>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="text-center mb-8">
        <span className="uppercase text-xs font-bold text-orange-400 tracking-widest mb-2 inline-block">Meet Our Team</span>
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Teamwork makes the dream work.</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-orange-100" />
            <div className="font-bold text-indigo-900 text-lg mb-1">{member.name}</div>
            <div className="text-orange-500 text-xs font-semibold mb-2">{member.role}</div>
            <div className="flex gap-3">
              {member.socials.map((s, i) => (
                <a key={i} href={s.url} className="text-gray-400 hover:text-orange-500 text-lg" target="_blank" rel="noopener noreferrer">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Join Us Section */}
      <div className="text-center mb-16">
        <span className="uppercase text-xs font-bold text-orange-400 tracking-widest mb-2 inline-block">Join Us</span>
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-3">Are you ready to love your work?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">We're always looking for passionate, talented people to join our growing team. If you're ready to make an impact and work with a supportive, innovative group, we'd love to hear from you.</p>
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Contact Us</button>
      </div>

      {/* Get Free Trial Section (reuse from Pricing/Contact) */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Try MugoTech Free for 14 Days</h2>
        <p className="text-gray-600 mb-6 text-center">Experience the difference with a no-risk, no-obligation free trial. Discover how our solutions can help your business grow.</p>
        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Company" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="text" placeholder="Phone" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
        </form>
        <button className="w-full md:w-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2.5 px-8 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Start Free Trial</button>
      </div>
    </div>
  );
};

export default Team; 