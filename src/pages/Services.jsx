import React from 'react';
import ServicesPageHero from '../components/services/ServicesPageHero';
import ServicesIntroSection from '../components/services/ServicesIntroSection';
import FeaturedServices from '../components/services/FeaturedServices';
import MarketingHero from '../components/services/MarketingHero';
import WhyChooseUs from '../components/services/WhyChooseUs';
import TopServicesGrid from '../components/services/TopServicesGrid';
import TestimonialsSection from '../components/services/TestimonialsSection';
import GetFreeTrial from '../components/services/GetFreeTrial';
import ContactTrialSection from '../components/about/ContactTrialSection';

const Services = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <ServicesPageHero />
      <ServicesIntroSection />
      <FeaturedServices />
      <MarketingHero />
      <WhyChooseUs />
      <TopServicesGrid />
      <TestimonialsSection />
      <GetFreeTrial />
      <div className="max-w-2xl mx-auto my-8 p-6 bg-orange-50 rounded-2xl shadow text-center">
        <h3 className="text-xl font-bold text-orange-600 mb-2">Contact Us</h3>
        <div className="mb-1 text-gray-700">Email: <a href="mailto:vinmugondora@gmail.com" className="text-blue-700 underline">vinmugondora@gmail.com</a></div>
        <div className="mb-1 text-gray-700">Phone 1: <a href="tel:+263777530322" className="text-blue-700 underline">+263777530322</a></div>
        <div className="mb-1 text-gray-700">Phone 2: <a href="tel:+263776477958" className="text-blue-700 underline">+263776477958</a></div>
      </div>
      <ContactTrialSection />
    </div>
  );
};

export default Services; 