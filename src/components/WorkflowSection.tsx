import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  Lightbulb, 
  Rocket, 
  Zap,
  Target,
  ShieldCheck, 
  BarChart3, 
  Layers, 
  ArrowRight,
  ChevronLeft,
  Search,
  Settings2,
  Users2,
  Lock,
  Globe
} from 'lucide-react';

type Category = 'startup' | 'midstartup' | 'mnc' | null;

const WorkflowSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  
  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#workflow-startup') setSelectedCategory('startup');
      else if (hash === '#workflow-midstartup') setSelectedCategory('midstartup');
      else if (hash === '#workflow-mnc') setSelectedCategory('mnc');
      
      if (hash.startsWith('#workflow')) {
        const section = document.getElementById('workflow');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    
    const handleCategorySet = (e: CustomEvent<Category>) => {
      setSelectedCategory(e.detail);
    };

    window.addEventListener('set-workflow-category' as any, handleCategorySet as any);
    
    return () => {
      window.removeEventListener('hashchange', updateFromHash);
      window.removeEventListener('set-workflow-category' as any, handleCategorySet as any);
    };
  }, []);



  const workflows = {
    startup: {
      title: "Startup Lifecycle",
      subtitle: "From Zero to Market Validation",
      steps: [
        { id: "01", name: "Problem-Solution Mapping", desc: "We validate your core concept by deep-diving into user pain points and market gaps.", icon: <Search className="h-6 w-6" /> },
        { id: "02", name: "MVP Blueprinting", desc: "Identifying the leanest version of your product that delivers the highest value.", icon: <Lightbulb className="h-6 w-6" /> },
        { id: "03", name: "Rapid Prototyping", desc: "Building the first functional POC to test with real users within 2-4 weeks.", icon: <Zap className="h-6 w-6" /> },
        { id: "04", name: "Validation & 1.0 Release", desc: "Iterating based on feedback and preparing for your public market entry.", icon: <Rocket className="h-6 w-6" /> }
      ]
    },
    midstartup: {
      title: "Growth & Scaling",
      subtitle: "Optimizing for the Next 10x",
      steps: [
        { id: "01", name: "Operational Audit", desc: "Identifying technical bottlenecks and operational friction slowing your growth.", icon: <Target className="h-6 w-6" /> },
        { id: "02", name: "Infrastructure Scaling", desc: "Upgrading your backend and frontend to handle increased traffic and complexity.", icon: <Layers className="h-6 w-6" /> },
        { id: "03", name: "Process Automation", desc: "Replacing manual tasks with intelligent internal tools and AI workflows.", icon: <Settings2 className="h-6 w-6" /> },
        { id: "04", name: "Performance Refinement", desc: "Fine-tuning UX and system speed for premium-level user retention.", icon: <BarChart3 className="h-6 w-6" /> }
      ]
    },
    mnc: {
      title: "Enterprise Transformation",
      subtitle: "Modernizing Large-Scale Systems",
      steps: [
        { id: "01", name: "Stakeholder Alignment", desc: "Defining clear KPIs and requirements across multiple departments.", icon: <Users2 className="h-6 w-6" /> },
        { id: "02", name: "Governance & Compliance", desc: "Ensuring all new modules meet global security and data privacy standards.", icon: <Lock className="h-6 w-6" /> },
        { id: "03", name: "Modular Integration", desc: "Building independent micro-services that integrate with existing legacy tech.", icon: <Globe className="h-6 w-6" /> },
        { id: "04", name: "Deployment & Support", desc: "Phased rollouts with extensive training and 24/7 technical stability.", icon: <ShieldCheck className="h-6 w-6" /> }
      ]
    }
  };

  const currentWorkflow = selectedCategory ? workflows[selectedCategory] : null;

  return (
    <section id="workflow" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6 font-bold uppercase tracking-widest text-[10px] border border-blue-200"
          >
            Blueprinting the Future
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Partner</span>
          </h2>
          
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Our process isn't one-size-fits-all. We adapt our blueprint to match the complexity and scale of your business.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                { id: 'startup', title: 'Startup', sub: '0 → 1 Build', desc: 'Validating ideas and building MVPs with speed.', icon: <Zap className="h-8 w-8" />, color: 'blue' },
                { id: 'midstartup', title: 'Mid-Startup', sub: 'Series A/B Growth', desc: 'Scaling operations and optimizing for 10x traffic.', icon: <Rocket className="h-8 w-8" />, color: 'indigo' },
                { id: 'mnc', title: 'MNC', sub: 'Enterprise Scale', desc: 'Modernizing legacy tech and modular integration.', icon: <ShieldCheck className="h-8 w-8" />, color: 'slate' }
              ].map((cat) => {
                const colorClasses = {
                  blue: 'bg-blue-50 text-blue-600',
                  indigo: 'bg-indigo-50 text-indigo-600',
                  slate: 'bg-slate-50 text-slate-600'
                }[cat.color as 'blue' | 'indigo' | 'slate'];

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as Category)}
                    className="glass-premium p-10 rounded-[2.5rem] border border-slate-100 text-left hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 transition-all group"
                  >
                    <div className={`p-4 ${colorClasses} rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform`}>
                      {cat.icon}
                    </div>
                    <div className="mb-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{cat.sub}</span>
                      <h3 className="text-3xl font-black text-slate-900 mt-1">{cat.title}</h3>
                    </div>
                    <p className="text-slate-500 font-medium mb-8 leading-relaxed">{cat.desc}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                      View Process
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              key="workflow-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-5xl mx-auto"
            >
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 mb-12 transition-colors uppercase tracking-widest text-xs"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Selection
              </button>

              <div className="mb-16">
                <h3 className="text-4xl font-black text-slate-900 mb-4">{currentWorkflow?.title}</h3>
                <p className="text-xl text-slate-500 font-medium">{currentWorkflow?.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {currentWorkflow?.steps.map((step, i) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-premium p-8 rounded-3xl border border-slate-100 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-100 -z-10 group-hover:text-blue-50 transition-colors">
                      {step.id}
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-black text-slate-800 leading-tight">
                        {step.name}
                      </h4>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <a 
                  href="https://calendly.com/nirvriksh/meet-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl"
                >
                  Start Your {selectedCategory?.toUpperCase()} Discovery
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkflowSection;