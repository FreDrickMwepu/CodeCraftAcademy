import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import AboutTeaser from '../components/AboutTeaser';
import ProgramsTeaser from '../components/ProgramsTeaser';
import PricingTeaser from '../components/PricingTeaser';
import CTAStrip from '../components/CTAStrip';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Ticker />
      <AboutTeaser />
      <ProgramsTeaser />
      <PricingTeaser />
      <CTAStrip
        title="Ready to Empower Your Child's Future?"
        subtitle="Join hundreds of young innovators on the Copperbelt already building tomorrow's technology."
        primaryText="Enrol Now"
        primaryLink="/contact"
        secondaryText="Browse Programs"
        secondaryLink="/programs"
      />
    </div>
  );
};

export default Home;