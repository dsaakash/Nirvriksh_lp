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
      <div className="text-center mt-4">
        <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Schedule a Meeting with Us
        </a>
      </div>
    </div>
  );
}

export default App;