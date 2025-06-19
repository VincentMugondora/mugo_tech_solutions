import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import FeaturedServices from '../components/home/FeaturedServices'
import ClientStats from '../components/home/ClientStats'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PricingPlans from '../components/home/PricingPlans'
import MarketingHero from '../components/home/MarketingHero'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <FeaturedServices />
        <ClientStats />
        <WhyChooseUs />
        <PricingPlans />
        <MarketingHero />
    </div>
  )
}

export default Home