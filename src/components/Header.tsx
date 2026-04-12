import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ProcessModal from './ProcessModal';




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center h-16">
            <Logo variant="light" className="h-full" />
          </div>
          
          <nav className="hidden md:flex space-x-10 items-center">
            <Link to="/#what-we-do" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group">
              What We Do
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button 
              onClick={() => setIsProcessModalOpen(true)}
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group"
            >
              Our Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <Link to="/#testimonials" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors relative group">
              Success Stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button className="flex items-center text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg py-2 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                <Link to="/vsl/saas/rca" className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <div className="font-medium">Retail Control VSL</div>
                  <div className="text-xs text-gray-500 mt-0.5">SaaS Inventory Solution</div>
                </Link>
                <Link to="/#workflow" className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <div className="font-medium">For Startups</div>
                  <div className="text-xs text-gray-500 mt-0.5">Validate ideas & build MVPs</div>
                </Link>
                <Link to="/#workflow" className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <div className="font-medium">For Mid-Startups</div>
                  <div className="text-xs text-gray-500 mt-0.5">Scale & optimize your platform</div>
                </Link>
                <Link to="/#workflow" className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <div className="font-medium">For Enterprises</div>
                  <div className="text-xs text-gray-500 mt-0.5">Digital transformation & AI integration</div>
                </Link>
              </div>
            </div>
          </nav>

          
          <div className="hidden md:flex items-center">
            <a 
              href="https://calendly.com/nirvriksh/meet-up" 
              className="ml-8 inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Schedule a Call
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              className={`${scrolled ? 'bg-white' : 'bg-indigo-50'} rounded-full p-2 inline-flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-100 focus:outline-none transition-colors`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg rounded-b-2xl">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <a 
              href="#what-we-do" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Do
            </a>
            <button 
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => {
                setIsProcessModalOpen(true);
                setIsMenuOpen(false);
              }}
            >
              Our Process
            </button>

            <a 
              href="#testimonials" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            
            <div className="border-t border-gray-100 my-3 pt-3">
              <p className="px-4 text-sm font-semibold text-gray-500 mb-2">Solutions</p>
            </div>
            
            <a 
              href="#" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Startups
            </a>
            <a 
              href="#" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Mid-Startups
            </a>
            <a 
              href="#" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Enterprises
            </a>
            
            <div className="mt-4 pt-2">
              <a 
                href="https://calendly.com/nirvriksh/meet-up" 
                className="block w-full text-center px-4 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      )}

      <ProcessModal 
        isOpen={isProcessModalOpen} 
        onClose={() => setIsProcessModalOpen(false)} 
      />
    </header>

  );
};

export default Header;