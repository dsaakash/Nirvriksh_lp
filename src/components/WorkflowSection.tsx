import React from 'react';
import { 
  Lightbulb, 
  MessageSquare, 
  Code2, 
  Rocket, 
  MessageCircle, 
  FileSignature, 
  CreditCard, 
  Video, 
  FileText, 
  Milestone, 
  LineChart,
  CheckCircle
} from 'lucide-react';

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 mb-6">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 20.5C14.5 21.33 13.83 22 13 22H11C10.17 22 9.5 21.33 9.5 20.5V20H14.5V20.5ZM21 19H3V17.5H21V19ZM18.16 3.8C19.3 5.11 20 6.85 20 8.75C20 12.27 17.58 15.22 14.25 16.03V16.5H9.75V16.03C6.42 15.22 4 12.27 4 8.75C4 5.13 6.5 2.06 9.93 1.32C10.51 1.19 11.12 1.21 11.7 1.37C13.35 0.55 15.28 0.86 16.64 2.04C17.17 2.5 17.71 3.11 18.16 3.8Z" fill="currentColor"/>
            </svg>
            <span className="text-sm font-medium">Our Proven Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Streamlined <span className="text-indigo-600">Workflow</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            From initial concept to market launch, our comprehensive process ensures your vision becomes reality with efficiency and precision.
          </p>
        </div>
        
        {/* Main workflow steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-300 to-purple-400 rounded-full"></div>
          
          {/* Step 1 */}
          <div className="relative mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <Lightbulb className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Exploring Your Idea</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We begin by understanding your vision, goals, and target market. Our team works closely with you to refine your concept and identify the core features needed for a successful product.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">In-depth discovery sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Market research & competitor analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Feature prioritization workshops</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <MessageSquare className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Discussing Requirements</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We dive deep into technical specifications, user experience goals, and business requirements to create a comprehensive roadmap for development.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Technical architecture planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">UX/UI design workshops</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Detailed project scope documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <Rocket className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Launching to Market</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We handle deployment, monitoring, and initial user feedback collection to ensure a smooth launch. Our team remains available for quick iterations based on real-world usage.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Seamless deployment process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Performance monitoring & optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">User feedback collection & analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
              </div>
              <div className="md:w-1/2 md:pl-16 md:order-0">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <Code2 className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Building Your MVP</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our development team creates a Minimum Viable Product with the essential features needed to validate your concept in the market, using agile methodologies for rapid iteration.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Agile development sprints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regular progress demos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive testing & QA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <MessageCircle className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Managing Interactions</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our integrated chat-based system ensures seamless communication throughout the project lifecycle, keeping all stakeholders aligned and informed.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Real-time project updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Centralized communication hub</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">File sharing & collaboration tools</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <FileSignature className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Drafting & Signing Contracts</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We streamline the legal process with digital contract drafting and signing capabilities, ensuring clear agreements and smooth business relationships.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Transparent contract terms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Digital signature integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Secure document storage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <LineChart className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Project Lifecycle Tracking</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our comprehensive tracking system provides end-to-end visibility into your project's progress, from initial concept to final delivery and beyond.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Interactive project dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Milestone tracking & notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Resource allocation visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full h-16 w-16 flex items-center justify-center text-white font-bold text-xl shadow-lg">4</div>
              </div>
              <div className="md:w-1/2 md:pl-16 md:order-0">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 rounded-xl p-3">
                      <CreditCard className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">Handling Payments & Invoicing</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our platform includes seamless payment processing and automated invoicing, with milestone-based payment structures to align deliverables with financial transactions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Milestone-based payment schedules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automated invoice generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Secure payment processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional features */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Additional Platform Features</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform includes everything you need for seamless project management and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-indigo-500">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 rounded-xl p-3">
                  <Video className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="ml-4 text-lg font-semibold text-gray-900">Video Meetings & Recording</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Integrated video conferencing with automatic recording for seamless collaboration and future reference.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  Learn more
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-indigo-500">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 rounded-xl p-3">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="ml-4 text-lg font-semibold text-gray-900">Quotation & Contract Management</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Streamlined creation, negotiation, and management of project quotations and contracts within the platform.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  Learn more
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-indigo-500">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 rounded-xl p-3">
                  <Milestone className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="ml-4 text-lg font-semibold text-gray-900">Milestone-Based Payments</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Structured payment schedules tied to project milestones with automated invoicing and payment tracking.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  Learn more
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-indigo-500">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 rounded-xl p-3">
                  <LineChart className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="ml-4 text-lg font-semibold text-gray-900">Project Lifecycle Tracking</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive monitoring of all project stages with real-time updates and progress visualization.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  Learn more
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;