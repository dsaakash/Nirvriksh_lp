import Header from '../components/Header';

import HeroSection from '../components/HeroSection';
import BrandTree from '../components/BrandTree';
import WorkflowSection from '../components/WorkflowSection';
import TestimonialsSection from '../components/TestimonialsSection';

import ScheduleMeeting from '../components/ScheduleMeeting';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BrandTree />
      <WorkflowSection />
      <TestimonialsSection />

      <ScheduleMeeting />
      <Footer />
    </div>
  );
}

export default LandingPage;
