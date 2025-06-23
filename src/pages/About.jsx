import React from 'react'
import AboutHero from '../components/about/AboutHero';
import RealPeopleSection from '../components/about/RealPeopleSection';
import ValuesCards from '../components/about/ValuesCards';
import StatsSection from '../components/about/StatsSection';
import LogosRow from '../components/about/LogosRow';
import TeamSection from '../components/about/TeamSection';
import ContactTrialSection from '../components/about/ContactTrialSection';

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col max-w-7xl mx-auto px-4 md:px-8">
      <AboutHero />
      <RealPeopleSection />
      <ValuesCards />
      <StatsSection />
      <LogosRow />
      <TeamSection />
      <ContactTrialSection />
    </div>
  )
}

export default About