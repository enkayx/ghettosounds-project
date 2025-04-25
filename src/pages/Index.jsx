
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Index = () => {
  return (
    <div className="bg-white min-vh-100">
      <Navigation />
      <Hero />
      <Services />
    </div>
  );
};

export default Index;
