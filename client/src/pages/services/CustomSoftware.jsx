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
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>,
    title: "Bespoke Applications",
    desc: "Custom-built software tailored to your unique business needs and goals.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>,
    title: "Integration Services",
    desc: "Seamlessly integrate new software with your existing systems and workflows.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
    title: "Scalable Solutions",
    desc: "Software that grows with your business, supporting your future needs.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>,
    title: "Ongoing Support",
    desc: "Comprehensive maintenance and support to keep your software running smoothly.",
  },
];

const CustomSoftware = () => (
  <div className="mt-24">
    <ServicePageTemplate
      icon={<svg width="32" height="32" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>}
      title="Custom Software Development"
      intro="Bespoke applications designed to solve your unique business challenges and accelerate growth."
      image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
      description="Our custom software development services deliver solutions that are tailored to your business. From initial concept to deployment and support, we ensure your software is robust, scalable, and perfectly aligned with your goals."
      features={features}
      otherServices={otherServices}
      currentService="Custom Software Development"
      cta={<button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">Get Started</button>}
    />
  </div>
);

export default CustomSoftware; 