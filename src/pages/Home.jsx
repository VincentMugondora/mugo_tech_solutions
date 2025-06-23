import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import FeaturedServices from '../components/home/FeaturedServices'
import ClientStats from '../components/home/ClientStats'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PricingPlans from '../components/home/PricingPlans'
import MarketingHero from '../components/home/MarketingHero'
import TopServices from '../components/home/TopServices'
import ProjectSatisfaction from '../components/home/ProjectSatisfaction'
import ContactSection from '../components/home/ContactSection'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <HeroSection />
      <AboutSection />
      <FeaturedServices />
      <ClientStats />
      <WhyChooseUs />
      <PricingPlans />
      <MarketingHero />
      <TopServices />
      <ProjectSatisfaction />
      <ContactSection />
    </div>
  )
}

export default Home