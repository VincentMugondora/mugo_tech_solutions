import React from 'react';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    tag: 'SEO',
    title: "The Importance of Mobile Optimization in Today's Digital Landscape",
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
    date: 'March 11, 2023',
    comments: 'No Comments',
  },
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    tag: 'Insight',
    title: 'Unlocking the Power of Video Marketing for Your Business',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
    date: 'March 11, 2023',
    comments: 'No Comments',
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    tag: 'Insight',
    title: 'Maximizing Your PPC Campaign: Best Practices for AdWords',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
    date: 'March 11, 2023',
    comments: 'No Comments',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    tag: 'Digital Marketing',
    title: '10 Tips for Effective Email Marketing Campaigns',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
    date: 'March 11, 2023',
    comments: 'No Comments',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    tag: 'Digital Marketing',
    title: 'Digital Marketing Trends to Watch in 2023',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
    date: 'March 11, 2023',
    comments: 'No Comments',
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    tag: 'SEO',
    title: 'The Ultimate Guide to Boosting Your Online Presence through SEO',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
    date: 'March 11, 2023',
    comments: 'No Comments',
  },
];

const Blog = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen w-full">
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">News &amp; Article</h1>
            <p className="text-gray-500">Archives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {articles.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="relative">
                  <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-4 left-4 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{a.tag}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-indigo-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{a.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-400 gap-4 mt-auto">
                    <span>{a.date}</span>
                    <span>&bull;</span>
                    <span>{a.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Get Free Trial Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center mt-12">
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

export default Blog; 