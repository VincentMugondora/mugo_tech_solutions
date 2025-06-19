import ServicesHero from '../components/services/ServicesHero';
import ServicesIntro from '../components/services/ServicesIntro';
import FeaturedServices from '../components/services/FeaturedServices';
import MarketingHero from '../components/services/MarketingHero';
import WhyChooseUs from '../components/services/WhyChooseUs';
import TopServicesGrid from '../components/services/TopServicesGrid';
import Testimonials from '../components/services/Testimonials';
import ContactTrialSection from '../components/about/ContactTrialSection';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <ServicesHero />
      <ServicesIntro />
      <FeaturedServices />
      <MarketingHero />
      <WhyChooseUs />
      <TopServicesGrid />
      <Testimonials />
      <ContactTrialSection />
      <Footer />
    </div>
  );
};

export default Services; 