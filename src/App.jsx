import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import SpotlightSection from './components/home/SpotlightSection';
import ServicesSection from './components/home/ServicesSection';
import PartnershipSection from './components/home/PartnershipSection';
import InsightsSection from './components/home/InsightsSection';
import NewsletterSection from './components/home/NewsletterSection';
import ConnectSection from './components/home/ConnectSection';
import JoinTeamSection from './components/home/JoinTeamSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-white">
      <Navbar />
      <HeroSection />
      <SpotlightSection />
      <ServicesSection />
      <PartnershipSection />
      <JoinTeamSection />
      <InsightsSection />
      <NewsletterSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}

export default App;
