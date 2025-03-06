import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Nirvriksh transformed our startup idea into a fully functional MVP in just 8 weeks. Their AI-driven approach helped us identify key features that resonated with our target audience, leading to successful seed funding.",
    author: "Sarah Johnson",
    position: "Founder & CEO",
    company: "HealthTech Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    id: 2,
    content: "Working with Nirvriksh was a game-changer for our enterprise. Their end-to-end project management and milestone-based payment structure provided transparency and accountability throughout the development process.",
    author: "Michael Chen",
    position: "CTO",
    company: "Global Logistics Corp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    id: 3,
    content: "As a mid-stage startup, we needed to rapidly scale our platform. Nirvriksh not only delivered exceptional technical solutions but also provided strategic insights that helped us optimize our product-market fit.",
    author: "Emily Rodriguez",
    position: "Product Director",
    company: "FinConnect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 4
  },
  {
    id: 4,
    content: "The integrated communication and contract management features made collaboration seamless despite our team being distributed across three continents. Nirvriksh's platform is truly built for the modern way of working.",
    author: "David Okafor",
    position: "Operations Manager",
    company: "RemoteFirst Solutions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    setActiveTestimonial(testimonials[newIndex]);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    setActiveTestimonial(testimonials[newIndex]);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    setActiveTestimonial(testimonials[index]);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 mb-6">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 19.5L19.5 19.5M4.5 19.5C3.39543 19.5 2.5 18.6046 2.5 17.5L2.5 6.5C2.5 5.39543 3.39543 4.5 4.5 4.5L19.5 4.5C20.6046 4.5 21.5 5.39543 21.5 6.5L21.5 17.5C21.5 18.6046 20.6046 19.5 19.5 19.5M4.5 19.5L9.5 19.5L14.5 19.5L19.5 19.5M7 9L10 12L7 15M14 9L17 12L14 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-indigo-600">Clients Say</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear from startups and enterprises that have transformed their ideas into successful products with Nirvriksh.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-100 rounded-full opacity-50"></div>
            
            <div className="absolute top-8 left-8">
              <Quote className="h-16 w-16 text-indigo-200" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-sm opacity-75"></div>
                  <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.author} 
                    className="relative rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-6 w-6 ${i < activeTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <blockquote className={`text-xl md:text-2xl italic text-gray-800 mb-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  "{activeTestimonial.content}"
                </blockquote>
                <div>
                  <p className="font-bold text-xl text-gray-900">{activeTestimonial.author}</p>
                  <p className="text-indigo-600">{activeTestimonial.position}, {activeTestimonial.company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-12">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors transform hover:scale-110 duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-indigo-600" />
              </button>
              
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-600 w-8' : 'bg-indigo-200 hover:bg-indigo-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors transform hover:scale-110 duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-indigo-600" />
              </button>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${currentIndex === index ? 'ring-2 ring-indigo-500' : ''}`}
                onClick={() => handleDotClick(index)}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 line-clamp-4 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-100"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-indigo-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#schedule" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-md text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Join Our Success Stories
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;