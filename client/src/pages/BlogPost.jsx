import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from './blogs.json';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((p) => p.slug === slug) || blogs[0];
  const latestPosts = blogs.slice(0, 6);

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen w-full">
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <span className="bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow mr-2">{post.tag}</span>
              <span className="text-2xl md:text-3xl font-bold text-indigo-900 block mt-4 mb-2">{post.title}</span>
              <div className="flex items-center text-xs text-gray-400 gap-4 mb-6">
                <span>{post.date}</span>
                <span>&bull;</span>
                <span>{post.comments}</span>
              </div>
            </div>
            <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-xl mb-8" />
            {post.content.map((para, i) => (
              <p key={i} className="text-gray-700 mb-6">{para}</p>
            ))}
            <div className="flex items-center gap-4 bg-orange-50 rounded-xl p-4 my-8">
              <img src={post.quoteImage} alt="Quote" className="w-20 h-20 object-cover rounded-xl" />
              <div>
                <span className="block text-xs text-orange-500 font-bold mb-1">Advertising and marketing</span>
                <span className="block text-gray-700 text-sm font-semibold mb-1">{post.quote}</span>
              </div>
            </div>
            {/* Share Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 mb-8">
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow transition">Facebook</button>
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow transition">Twitter</button>
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow transition">Email</button>
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow transition">Print</button>
            </div>
            {/* Author */}
            <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 mb-8">
              <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <div className="font-bold text-indigo-900">{post.author.name}</div>
                <div className="text-gray-500 text-sm">{post.author.bio}</div>
              </div>
            </div>
            {/* Comment Form */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Leave a Reply</h3>
              <form>
                <textarea className="w-full border border-gray-300 rounded px-4 py-2 mb-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Comment *" required />
                <button type="submit" className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-8 py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Post Comment</button>
              </form>
            </div>
          </div>
          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-8">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow p-6 mb-6">
              <h4 className="font-bold text-orange-700 mb-2">Newsletter</h4>
              <p className="text-gray-700 text-sm mb-4">Sign up our newsletter to get update information, news and free insight.</p>
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2.5 rounded-full shadow-md hover:from-orange-500 hover:to-orange-700 transition">Sign Up</button>
              </form>
            </div>
            {/* Latest Posts */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-indigo-900 mb-4">Latest Post</h4>
              <ul className="space-y-4">
                {latestPosts.map((p, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <img src={p.image} alt={p.title} className="w-14 h-14 object-cover rounded-lg" />
                    <div>
                      <Link to={`/blog/${p.slug}`} className="font-semibold text-sm text-indigo-900 hover:text-orange-500 transition block leading-tight">{p.title}</Link>
                      <div className="text-xs text-gray-400">{p.date} &bull; {p.comments}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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

export default BlogPost; 