import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";

const otherServices = [
  { title: "IT Consulting", link: "/services/it-consulting" },
  { title: "Cloud Solutions", link: "/services/cloud-solutions" },
  { title: "Custom Software Development", link: "/services/custom-software" },
  { title: "Cybersecurity", link: "/services/cybersecurity" },
  { title: "Digital Marketing", link: "/services/digital-marketing" },
  { title: "SEO", link: "/services/seo" },
  { title: "Graphics and UI/UX Design", link: "/services/design" },
];

const features = [
  {
    icon: <svg width="24" height="24" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>,
    title: "On-Page Optimization",
    desc: "Improve your website's content, structure, and code for better search rankings.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>,
    title: "Technical SEO",
    desc: "Ensure your website is fast, mobile-friendly, and easy for search engines to crawl.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>,
    title: "Link Building",
    desc: "Increase your site's authority and rankings with high-quality backlinks.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
    title: "SEO Analytics & Reporting",
    desc: "Track your SEO performance and make data-driven decisions for ongoing improvement.",
  },
];

const contactInfo = {
  support: "Support: 888-4004-234",
  sales: "Sales: 888-8000-135",
};

const SEO = () => (
  <div className="mt-24">
    <ServicePageTemplate
      icon={<svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>}
      title="SEO (Search Engine Optimization)"
      intro="Boost your website's visibility and ranking with expert SEO services."
      image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
      description="Our SEO services help your business get found online. We use proven strategies to improve your search rankings, drive more traffic, and increase conversions."
      features={features}
      otherServices={otherServices}
      currentService="SEO"
      contactInfo={contactInfo}
      cta={<button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">Get Started</button>}
    />
  </div>
);

export default SEO; 