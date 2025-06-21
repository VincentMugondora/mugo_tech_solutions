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
    icon: <svg width="24" height="24" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 18a4 4 0 0 0-3-7.87A5 5 0 1 0 6 17h11z" /></svg>,
    title: "Cloud Migration",
    desc: "Seamlessly move your infrastructure, applications, and data to the cloud with minimal disruption.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>,
    title: "Cloud Management",
    desc: "Optimize and manage your cloud resources for performance, security, and cost-efficiency.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
    title: "Scalability & Flexibility",
    desc: "Scale your infrastructure up or down as your business needs change, with no hassle.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>,
    title: "Cloud Security",
    desc: "Protect your data and applications with advanced cloud security solutions.",
  },
];

const contactInfo = {
  support: "Support: 888-4004-234",
  sales: "Sales: 888-8000-135",
};

const CloudSolutions = () => (
  <ServicePageTemplate
    icon={<svg width="32" height="32" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 18a4 4 0 0 0-3-7.87A5 5 0 1 0 6 17h11z" /></svg>}
    title="Cloud Solutions"
    intro="Seamless migration, management, and optimization of your cloud infrastructure for agility and scalability."
    image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
    description="Our cloud solutions help you leverage the power of the cloud to drive innovation, efficiency, and growth. We provide end-to-end services from migration to management, ensuring your cloud environment is secure, scalable, and cost-effective."
    features={features}
    otherServices={otherServices}
    currentService="Cloud Solutions"
    contactInfo={contactInfo}
    cta={<button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">Get Started</button>}
  />
);

export default CloudSolutions; 