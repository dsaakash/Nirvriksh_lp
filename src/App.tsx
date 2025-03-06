import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Hook from './components/Hook';
import WorkflowSection from './components/WorkflowSection';
import TestimonialsSection from './components/TestimonialsSection';
import ScheduleMeeting from './components/ScheduleMeeting';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Hook />
      <WorkflowSection />
      <TestimonialsSection />
      <ScheduleMeeting />
      <Footer />
    </div>
  );
}

export default App;