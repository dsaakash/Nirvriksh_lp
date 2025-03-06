import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Briefcase, MessageSquare, CheckCircle } from 'lucide-react';

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'startup',
    message: '',
    date: '',
    time: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  interface FormData {
    name: string;
    email: string;
    company: string;
    projectType: string;
    message: string;
    date: string;
    time: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'startup',
        message: '',
        date: '',
        time: ''
      });
    }, 3000);
  };
  
  return (
    <section id="schedule" className="py-24 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-800 mb-6">
            <Calendar className="h-4 w-4 mr-2 text-indigo-300" />
            <span className="text-sm font-medium text-indigo-200">Book Your Consultation</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Schedule a Meeting
          </h2>
          
          <p className="text-xl text-indigo-100 leading-relaxed">
            Ready to transform your idea into reality? Book a consultation with our experts to discuss your project.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:shadow-3xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-5/12 bg-gradient-to-br from-indigo-800 to-purple-900 p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">Why Schedule a Call?</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-indigo-700 rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-indigo-200" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-lg">Personalized Consultation</p>
                      <p className="text-indigo-200 mt-1">Get tailored advice specific to your business needs and goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-indigo-700 rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-indigo-200" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-lg">Technical Feasibility</p>
                      <p className="text-indigo-200 mt-1">Discuss the technical aspects of your project with our experts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-indigo-700 rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-indigo-200" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-lg">Timeline & Budget</p>
                      <p className="text-indigo-200 mt-1">Get clear estimates on project duration and investment required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-indigo-700 rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-indigo-200" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-lg">Strategic Guidance</p>
                      <p className="text-indigo-200 mt-1">Receive expert advice on market positioning and product strategy.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-indigo-700/50">
                  <p className="font-semibold text-lg mb-3">Our Availability</p>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-indigo-300 mr-2" />
                    <p className="text-indigo-200">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-300 mr-2" />
                    <p className="text-indigo-200">Meetings typically last 30-45 minutes</p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <a 
                    href="https://calendly.com/nirvriksh/meet-up" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Or Book Directly via Calendly
                  </a>
                </div>
              </div>
              
              <div className="lg:w-7/12 p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Book Your Session</h3>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-green-800 flex flex-col items-center">
                    <div className="bg-green-100 rounded-full p-3 mb-4">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <p className="font-bold text-xl mb-2">Thank you for scheduling a meeting!</p>
                    <p className="text-center text-green-700">We'll confirm your appointment shortly via email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Briefcase className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                        >
                          <option value="startup">Early-stage Startup</option>
                          <option value="midstartup">Mid-stage Startup</option>
                          <option value="enterprise">Enterprise</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Brief Project Description
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                          placeholder="Tell us briefly about your project..."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
                      >
                        Schedule Meeting
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By scheduling a meeting, you agree to our <a href="#" className="text-indigo-600 hover:text-indigo-800">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-indigo-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-indigo-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Quick Response</h4>
              <p className="text-indigo-200">We respond to all inquiries within 24 hours</p>
            </div>
            
            <div className="bg-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-indigo-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-indigo-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">No Obligation</h4>
              <p className="text-indigo-200">Free consultation with no commitment required</p>
            </div>
            
            <div className="bg-indigo-800/30 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="bg-indigo-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-indigo-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Advice</h4>
              <p className="text-indigo-200">Consultation with senior technical experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;