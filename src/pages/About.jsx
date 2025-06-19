import React from 'react'
import AboutHero from '../components/about/AboutHero';
import RealPeopleSection from '../components/about/RealPeopleSection';
import ValuesCards from '../components/about/ValuesCards';
import StatsSection from '../components/about/StatsSection';
import LogosRow from '../components/about/LogosRow';
import TeamSection from '../components/about/TeamSection';
import ContactTrialSection from '../components/about/ContactTrialSection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <AboutHero />
      <RealPeopleSection />
      <ValuesCards />
      <StatsSection />
      <LogosRow />
      <TeamSection />
      <ContactTrialSection />
      <Footer />
    </div>
  )
}

export default About