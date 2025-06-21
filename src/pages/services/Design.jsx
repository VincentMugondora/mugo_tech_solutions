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
    icon: <svg width="24" height="24" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>,
    title: "Brand Identity Design",
    desc: "Create a memorable and cohesive brand image with custom logos, colors, and typography.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>,
    title: "UI/UX Design",
    desc: "Design intuitive, user-friendly interfaces that delight your customers and drive engagement.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
    title: "Prototyping & Wireframing",
    desc: "Visualize your ideas and test user flows before development begins.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M8 10h8M8 14h4" /></svg>,
    title: "Graphic Design",
    desc: "Engaging graphics for web, social media, and print to elevate your brand presence.",
  },
];

const contactInfo = {
  support: "Support: 888-4004-234",
  sales: "Sales: 888-8000-135",
};

const Design = () => (
  <ServicePageTemplate
    icon={<svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>}
    title="Graphics and UI/UX Design"
    intro="Creative solutions for brand identity, user experience, and visual storytelling."
    image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    description="Our design services help you stand out in a crowded market. From brand identity to user interface design, we create visually stunning and highly usable experiences for your customers."
    features={features}
    otherServices={otherServices}
    currentService="Graphics and UI/UX Design"
    contactInfo={contactInfo}
    cta={<button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">Get Started</button>}
  />
);

export default Design; 