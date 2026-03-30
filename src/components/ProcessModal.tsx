import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  const options = [
    { 
      id: 'startup', 
      title: 'Startup', 
      sub: '0 → 1 Build', 
      desc: 'Validating ideas and building MVPs with speed.', 
      icon: <Zap className="h-6 w-6" />, 
      color: 'blue' 
    },
    { 
      id: 'midstartup', 
      title: 'Mid-Startup', 
      sub: 'Growth Stage', 
      desc: 'Scaling operations and optimizing for 10x traffic.', 
      icon: <Rocket className="h-6 w-6" />, 
      color: 'indigo' 
    },
    { 
      id: 'mnc', 
      title: 'Enterprise / MNC', 
      sub: 'Modernization', 
      desc: 'Legacy transformation and modular AI integration.', 
      icon: <ShieldCheck className="h-6 w-6" />, 
      color: 'slate' 
    }
  ];

  const handleSelection = (id: string) => {
    // Set the hash for scroll and category identification
    const hash = `#workflow-${id}`;
    
    if (window.location.pathname !== '/') {
      window.location.href = `/${hash}`;
    } else {
      // If on home page, update hash and scroll
      window.location.hash = hash;
      // Close modal
      onClose();
    }
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-5xl bg-white/90 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden border border-white/50"
          >
            <button 
              onClick={onClose}
              className="absolute top-10 right-10 p-4 rounded-full bg-slate-100/50 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-12 md:p-20">
              <div className="text-center mb-16">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                >
                  Tailored Experience
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                  Which <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Blueprint</span> fits you?
                </h3>
                <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                  To provide the most relevant workflow, tell us about your current business scale.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {options.map((opt, idx) => (
                  <motion.button
                    key={opt.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    onClick={() => handleSelection(opt.id)}
                    className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 text-left hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform relative z-10">
                      {opt.icon}
                    </div>
                    
                    <div className="mb-4 relative z-10">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1 block">{opt.sub}</span>
                      <h4 className="text-3xl font-black text-slate-900 leading-tight">{opt.title}</h4>
                    </div>
                    
                    <p className="text-slate-500 font-medium leading-relaxed mb-10 relative z-10">
                      {opt.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-black group-hover:gap-4 transition-all relative z-10">
                      View My Process
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 py-6 px-12 text-center border-t border-slate-100">
              <p className="text-slate-400 text-sm font-medium italic">
                Not sure? You can always change this later in the "Our Process" section.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProcessModal;
