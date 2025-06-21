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
    icon: <svg width="24" height="24" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
    title: "Brand Awareness",
    desc: "Grow your brand and reach new audiences with data-driven digital marketing strategies.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>,
    title: "Content Marketing",
    desc: "Build authority and trust with high-quality, relevant content tailored to your audience.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>,
    title: "Email Campaigns",
    desc: "Engage your customers and drive conversions with targeted, personalized email campaigns.",
  },
  {
    icon: <svg width="24" height="24" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12l10 7 10-7-10-7-10 7z" /><path d="M2 12l10 7 10-7" /></svg>,
    title: "PPC Management",
    desc: "Maximize ROI with expertly managed pay-per-click advertising campaigns.",
  },
];

const contactInfo = {
  support: "Support: 888-4004-234",
  sales: "Sales: 888-8000-135",
};

const DigitalMarketing = () => (
  <div className="mt-24">
    <ServicePageTemplate
      icon={<svg width="32" height="32" fill="none" stroke="#FF9944" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>}
      title="Digital Marketing"
      intro="Grow your brand and reach new audiences with data-driven digital marketing strategies."
      image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
      description="Our digital marketing services help you connect with your audience, build your brand, and drive measurable results. From content marketing to PPC, we offer a full suite of solutions to grow your business online."
      features={features}
      otherServices={otherServices}
      currentService="Digital Marketing"
      contactInfo={contactInfo}
      cta={<button className="bg-[#FF9944] hover:bg-[#FF7A1A] text-white font-semibold px-6 py-3 rounded-md shadow transition">Get Started</button>}
    />
  </div>
);

export default DigitalMarketing; 