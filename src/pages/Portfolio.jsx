import React from 'react';
import GetFreeTrial from '../components/services/GetFreeTrial';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tag: 'Email Marketing',
    title: 'Lokamart Project 2022',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    tag: 'Marketing Plan',
    title: 'Mokka Beauty Cosmetics',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    tag: 'Branding',
    title: 'Furneta Furniture Store',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    tag: 'Email Marketing',
    title: 'Loka Furniture.co',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
    tag: 'Online Ads',
    title: 'Hidropotik Beauty Shampoo',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    tag: 'Email Marketing',
    title: 'Hidropokit Facial Wash',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

const faqs = [
  'Interdum parturient nunc lorem purus urna fusce?',
  'Praesent eu vivamus aliquam mi diam?',
  'Commodo turpis amet imperdiet mauris phasellus?',
  'Arcu ligula nam vitae nunc urna?',
  'Auctor venenatis eu porttitor eu velit curac?',
  'Interdum parturient nunc lorem purus urna fusce?',
  'Praesent eu vivamus aliquam mi diam?',
  'Commodo turpis amet imperdiet mauris phasellus?',
  'Arcu ligula nam vitae nunc urna?',
  'Auctor venenatis eu porttitor eu velit curac?',
];

const Portfolio = () => (
  <div className="w-full bg-white">
    {/* Hero Section */}
    <section className="relative w-full flex flex-col items-center justify-center py-20 md:py-28 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-indigo-50">
      <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-indigo-100 rounded-full blur-2xl opacity-30 -z-10" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 text-center">Portfolio</h1>
      <p className="text-lg md:text-xl text-gray-500 text-center max-w-2xl mx-auto">Providing brilliant ideas for your business.</p>
    </section>

    {/* Stats/Project Satisfaction Section */}
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 py-16 md:py-24 px-4 bg-white">
      <div className="flex-1 max-w-xl flex flex-col items-start justify-center mb-10 md:mb-0">
        <span className="text-orange-500 text-xs font-bold uppercase mb-2">Our Project</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-900 mb-4">We are here for we always give you satisfaction.</h2>
        <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="flex gap-10">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-orange-500">18K+</div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-1">Project Done</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-orange-500">7K+</div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-1">Happy Customer</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-w-[320px]">
        <div className="absolute -z-10 w-[340px] h-[340px] bg-gradient-to-tr from-orange-200/60 via-white to-indigo-200/40 rounded-full blur-2xl" />
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
          alt="Team"
          className="w-80 h-64 object-cover rounded-full border-8 border-white shadow-xl relative z-10"
        />
      </div>
    </section>

    {/* Featured Projects Grid */}
    <section className="w-full py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-orange-500 text-xs font-bold uppercase mb-2 block">Featured Project</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-900 mb-2">Innovation is the core of everything we do.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-orange-100">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-orange-500 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{p.excerpt}</p>
                <button className="mt-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-6 py-2 rounded-full shadow hover:from-orange-500 hover:to-orange-700 transition">Detail Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-orange-500 text-xs font-bold uppercase mb-2 block">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-900 mb-2">Frequently Ask Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((q, i) => (
            <div key={i} className="bg-orange-50 rounded-xl p-6 shadow flex items-center justify-between cursor-pointer hover:bg-orange-100 transition">
              <span className="font-semibold text-indigo-900">{q}</span>
              <svg className="w-6 h-6 text-orange-400 ml-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Get Free Trial Section */}
    <div className="w-full">
      <GetFreeTrial />
    </div>
  </div>
);

export default Portfolio; 