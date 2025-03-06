import React from 'react';
import { ArrowRight, Sparkles, Zap, BarChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="what-we-do" className="pt-24 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Development</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Transforming Ideas</span>
              <br />
              into Powerful Solutions
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-relaxed">
              Nirvriksh helps founders and businesses navigate the journey from product ideation to market validation with AI-driven full-stack development expertise.
            </p>
            
            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <a 
                href="#schedule" 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-md text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#workflow" 
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-indigo-200 rounded-full shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
              >
                Explore Our Process
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 rounded-full">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="mt-2 text-sm text-gray-500">Fast Delivery</p>
                <p className="font-semibold text-gray-800">8-12 Weeks</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 rounded-full">
                  <BarChart className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="mt-2 text-sm text-gray-500">Success Rate</p>
                <p className="font-semibold text-gray-800">98%</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 rounded-full">
                  <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="mt-2 text-sm text-gray-500">Support</p>
                <p className="font-semibold text-gray-800">24/7</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-sm opacity-75"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team collaborating on software development" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 w-48">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Team member" />
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Team member" />
                      <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Team member" />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-gray-900">Expert Team</p>
                      <p className="text-gray-500">10+ years experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-indigo-900 -mb-0.5">
        <svg className="absolute -top-16 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="#312e81" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,32C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,54L1392,54C1344,54,1248,54,1152,54C1056,54,960,54,864,54C768,54,672,54,576,54C480,54,384,54,288,54C192,54,96,54,48,54L0,54Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;