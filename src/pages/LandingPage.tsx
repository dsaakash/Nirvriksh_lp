import Header from '../components/Header';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import BrandTree from '../components/BrandTree';
import WorkflowSection from '../components/WorkflowSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CityNav from '../components/CityNav';
import ScheduleMeeting from '../components/ScheduleMeeting';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEOHead
        title="Nirvriksh | Retail Control Architect for Garment Stores India | Stock Control System"
        description="Garment store stock control system India. Fix stock mismatch in 30 days. Vadodara client recovered Rs 3.2 lakh, reduced mismatch from 17% to 2%. Clothing store inventory management, kapde ki dukaan software, retail consulting India."
        canonical="https://nirvriksh.com"
      />
      <Header />
      <HeroSection />

      <CityNav />

      <BrandTree />

      <WorkflowSection />
      <TestimonialsSection />

      <ScheduleMeeting />
      <Footer />
    </div>
  );
}

export default LandingPage;
