import React from 'react';
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Newsletter section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-indigo-200">
                  Subscribe to our newsletter for the latest insights on AI development and tech trends.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-full bg-indigo-700/50 border border-indigo-600 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-white text-indigo-800 font-medium rounded-full hover:bg-indigo-100 transition-colors shadow-md flex items-center justify-center"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Nirvriksh</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into powerful solutions with AI-driven full-stack development expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-indigo-500"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#what-we-do" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  What We Do
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Our Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Schedule a Meeting
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Solutions
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-indigo-500"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  For Startups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  For Mid-Startups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  For Enterprises
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  AI Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center">
                  <svg className="h-3 w-3 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  MVP Development
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-indigo-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-indigo-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a href="mailto:contact@nirvriksh.com" className="text-gray-400 hover:text-indigo-400 transition-colors">contact@nirvriksh.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-indigo-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-indigo-400 transition-colors">+1 (555) 123-4567</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <address className="text-gray-400 not-italic">
                    123 Innovation Drive<br />
                    San Francisco, CA 94103
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nirvriksh. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;