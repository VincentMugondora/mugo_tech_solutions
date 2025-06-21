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
      <ContactTrialSection />
    </div>
  );
};

export default Services; 