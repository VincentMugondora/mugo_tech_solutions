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
    icon: <svg width="24" height="24" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z" /><circle cx="12" cy="12" r="3" /></svg>,
    title: "Threat Detection & Response",
    desc: "Proactive monitoring and rapid response to security threats and incidents.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>,
    title: "Vulnerability Assessment",
    desc: "Identify and address weaknesses in your systems before attackers do.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
    title: "Data Protection",
    desc: "Safeguard your sensitive data with advanced encryption and access controls.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>,
    title: "Compliance & Training",
    desc: "Ensure your business meets regulatory requirements and your team is security-aware.",
  },
];

const Cybersecurity = () => (
  <div className="mt-24">
    <ServicePageTemplate
      icon={<svg width="32" height="32" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z" /><circle cx="12" cy="12" r="3" /></svg>}
      title="Cybersecurity"
      intro="Comprehensive protection for your data, systems, and reputation with proactive security solutions."
      image="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80"
      description="Our cybersecurity services provide end-to-end protection for your business. We help you identify vulnerabilities, respond to threats, and ensure compliance with industry standards."
      features={features}
      otherServices={otherServices}
      currentService="Cybersecurity"
      cta={<button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">Get Started</button>}
    />
  </div>
);

export default Cybersecurity; 