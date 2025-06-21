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
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    title: "Strategic Planning",
    desc: "Align your IT strategy with your business goals for maximum impact.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>,
    title: "Technology Assessment",
    desc: "Comprehensive evaluation of your current IT infrastructure and recommendations for improvement.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z" /><circle cx="12" cy="12" r="3" /></svg>,
    title: "Risk Management",
    desc: "Identify, assess, and mitigate IT risks to protect your business.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>,
    title: "Digital Transformation",
    desc: "Leverage the latest technologies to drive innovation and efficiency.",
  },
];

const contactInfo = {
  support: "Support: 888-4004-234",
  sales: "Sales: 888-8000-135",
};

const ITConsulting = () => (
  <div className="mt-24">
    <ServicePageTemplate
      icon={<svg width="32" height="32" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
      title="IT Consulting"
      intro="Expert guidance to align your technology with your business goals and drive digital transformation."
      image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
      description="Our IT consulting services help you develop and implement technology strategies that support your business objectives. We work closely with you to assess your current IT environment, identify opportunities for improvement, and create a roadmap for success."
      features={features}
      otherServices={otherServices}
      currentService="IT Consulting"
      contactInfo={contactInfo}
      cta={<button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">Get Started</button>}
    />
  </div>
);

export default ITConsulting; 