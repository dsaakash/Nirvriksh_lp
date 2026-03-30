import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { 
  Database, 
  Layers, 
  Leaf, 
  ArrowRight, 
  Sparkles,
  Zap,
  Play,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

const BrandTree = () => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const sapControls = useAnimation();

  useEffect(() => {
    sapControls.start({
      strokeDashoffset: [0, -100],
      transition: { duration: 2, repeat: Infinity, ease: "linear" }
    });
  }, [sapControls]);

  const segments = [
    {
      id: 'core',
      label: 'NIR — Core',
      title: '0 → 1 Validation',
      description: 'The seed stage. We help you validate the problem-solution mapping, build early POCs, and ensure your foundation is rock solid.',
      icon: <Database className="h-6 w-6" />,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      items: ['Startup Ideation', 'Problem-Solution Mapping', 'Offer & Funnel Strategy', 'POC Validation']
    },
    {
      id: 'growth',
      label: 'Growth Engine',
      title: 'Revenue Scaling',
      description: 'The scaling stage. Once validated, we build the revenue engine that powers your business forward.',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      items: ['Funnel Building', 'Landing Pages', 'VSL Execution', 'CRM Setup & Automation']
    },
    {
      id: 'services',
      label: 'V — Services',
      title: 'The Support Trunk',
      description: 'Web Development, AI Automation, and Backend systems. The force that moves resources from roots to results.',
      icon: <Layers className="h-6 w-6" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      items: ['Web Development', 'Backend & Frontend', 'AI Automation & ML', 'Q Automation & ML']
    },
    {
      id: 'ksh',
      label: 'KSH — SaaS',
      title: 'The Output: Product',
      description: 'Retail Control Architect & Modular SaaS. High-value, daily-use software that scales your business operations.',
      icon: <Leaf className="h-6 w-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      items: ['Retail Clothing Architect', 'Complex ERP Systems', 'SaaS Modernization']
    }
  ];

  const renderOfferModal = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-blue-100 max-w-4xl w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 bg-slate-900 text-white relative flex flex-col justify-center items-center text-center">
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 bg-blue-500 rounded-full text-[10px] font-bold uppercase tracking-widest">Live Case Study</div>
          </div>
          <h4 className="text-2xl font-bold mb-6">How we scaled Retail Control Architect to 50+ stores</h4>
          <Link to="/saas/rca/vsl" className="relative group cursor-pointer block w-full">
            <div className="w-full aspect-video bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transition-colors">
              <Play className="h-12 w-12 text-blue-500 fill-blue-500 group-hover:scale-110 transition-transform" />
            </div>
            <p className="mt-4 text-sm text-slate-400">Click to watch the specialized strategy</p>
          </Link>
        </div>
        <div className="p-10 bg-white">
          <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">The KSH Offering</div>
          <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">Niche SaaS <br />Built for Dominance</h3>
          <ul className="space-y-4 mb-8">
            {[
              'Custom Multi-tenant Architecture',
              'Integrated Inventory Control',
              'AI-Driven Demand Forecasting',
              'Zero-Latency POS Integration'
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/saas/rca/vsl" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
            View Complete VSL & Offer
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative" id="ecosystem">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 mb-6 border border-blue-100"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-bold uppercase tracking-widest">More than an Agency</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            The Living <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Nirvriksh</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            We move resources from roots (Strategy) to leaves (SaaS). 
            Select a phase to see how we partner.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Enhanced SVG Tree */}
          <div className="relative w-full max-w-4xl aspect-[4/3] mb-12">
            <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#92400e" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* SAP FLOW ANIMATIONS (Animated energy paths) */}
              <g filter="url(#glow)">
                <motion.path
                  d="M250 550 Q250 480 400 350" // Core to Trunk
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10 20"
                  animate={sapControls}
                  opacity={activeSegment === 'core' ? 1 : 0.2}
                />
                <motion.path
                  d="M550 550 Q550 480 400 350" // Growth to Trunk
                  stroke="#f59e0b"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10 20"
                  animate={sapControls}
                  opacity={activeSegment === 'growth' ? 1 : 0.2}
                />
                <motion.path
                  d="M400 350 L400 150" // Trunk
                  stroke="#ea580c"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="15 30"
                  animate={sapControls}
                  opacity={activeSegment === 'services' ? 1 : 0.3}
                />
              </g>

              {/* THE TREE STRUCTURE */}
              
              {/* Ground level line */}
              <line x1="100" y1="500" x2="700" y2="500" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" />

              {/* ROOTS: CORE (NIR) - Left */}
              <motion.g onClick={() => setActiveSegment('core')} className="cursor-pointer group">
                <path d="M250 500 Q200 520 180 580 M250 500 Q230 540 210 580 M250 500 Q270 540 290 580" stroke="#059669" strokeWidth="4" fill="none" strokeLinecap="round" />
                <rect x="180" y="520" width="140" height="40" rx="20" fill="white" stroke="#10b981" strokeWidth="2" className="shadow-sm" />
                <text x="250" y="545" textAnchor="middle" className="text-[10px] font-black uppercase tracking-widest fill-emerald-800">0 → 1 CORE</text>
              </motion.g>

              {/* ROOTS: GROWTH - Right */}
              <motion.g onClick={() => setActiveSegment('growth')} className="cursor-pointer group">
                <path d="M550 500 Q500 520 480 580 M550 500 Q570 540 590 580 M550 500 Q550 540 550 580" stroke="#d97706" strokeWidth="4" fill="none" strokeLinecap="round" />
                <rect x="480" y="520" width="140" height="40" rx="20" fill="white" stroke="#f59e0b" strokeWidth="2" className="shadow-sm" />
                <text x="550" y="545" textAnchor="middle" className="text-[10px] font-black uppercase tracking-widest fill-amber-800">SCALE GROWTH</text>
              </motion.g>

              {/* TRUNK: SERVICES */}
              <motion.g onClick={() => setActiveSegment('services')} className="cursor-pointer group">
                <path d="M380 500 L380 350 Q380 250 320 150 M420 500 L420 350 Q420 250 480 150" stroke="url(#trunkGrad)" strokeWidth="15" fill="none" strokeLinecap="round" />
                <rect x="340" y="380" width="120" height="36" rx="18" fill="white" stroke="#ea580c" strokeWidth="2" />
                <text x="400" y="403" textAnchor="middle" className="text-[10px] font-black uppercase tracking-widest fill-orange-800">V / SERVICES</text>
              </motion.g>

              {/* LEAVES: KSH / SAAS - Left Branch */}
              <motion.g onClick={() => setActiveSegment('ksh')} className="cursor-pointer group">
                <motion.path d="M320 150 Q250 120 180 150 Q250 180 320 150" fill="#2563eb" className="drop-shadow-lg" whileHover={{ scale: 1.05 }} />
                <text x="250" y="153" textAnchor="middle" className="text-[10px] font-black uppercase tracking-widest fill-white">KSH / SAAS</text>
              </motion.g>

              {/* LEAVES: ERP - Right Branch */}
              <motion.g onClick={() => setActiveSegment('ksh')} className="cursor-pointer group">
                <motion.path d="M480 150 Q550 120 620 150 Q550 180 480 150" fill="#dc2626" className="drop-shadow-lg" whileHover={{ scale: 1.05 }} />
                <text x="550" y="153" textAnchor="middle" className="text-[10px] font-black uppercase tracking-widest fill-white">RI / ERP</text>
              </motion.g>

              {/* TOP FLOWER: BRAND CENTER */}
              <motion.g className="pointer-events-none">
                <circle cx="400" cy="80" r="30" fill="white" stroke="#1e293b" strokeWidth="3" />
                <text x="400" y="85" textAnchor="middle" className="text-[12px] font-black uppercase tracking-tighter fill-slate-900">NIRVRIKSH</text>
              </motion.g>
            </svg>
          </div>

          {/* Action Pane Container */}
          <div className="w-full relative min-h-[500px] flex justify-center">
            <AnimatePresence mode="wait">
              {activeSegment === 'ksh' ? (
                renderOfferModal()
              ) : activeSegment ? (
                <motion.div
                  key={activeSegment}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="bg-white rounded-[2.5rem] p-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  <div>
                    <div className={`p-4 rounded-2xl ${segments.find(s => s.id === activeSegment)?.bgColor} w-fit mb-6 shadow-sm`}>
                      {React.cloneElement(segments.find(s => s.id === activeSegment)?.icon as React.ReactElement, {
                        className: `h-8 w-8 ${segments.find(s => s.id === activeSegment)?.color}`
                      })}
                    </div>
                    <div className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-4">
                      {segments.find(s => s.id === activeSegment)?.label}
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                      {segments.find(s => s.id === activeSegment)?.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                      {segments.find(s => s.id === activeSegment)?.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Engagement Pillars</p>
                      <div className="grid grid-cols-1 gap-4">
                        {segments.find(s => s.id === activeSegment)?.items.map((item, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group hover:border-emerald-500 transition-colors"
                          >
                            <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-500 transition-colors">
                              <Zap className="h-4 w-4 text-emerald-500 group-hover:text-white" />
                            </div>
                            <span className="font-bold text-slate-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="max-w-xl text-center flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-white rounded-full shadow-inner flex items-center justify-center mb-8 border-4 border-slate-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-full animate-pulse blur-[2px]"></div>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Select an Engine</h3>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    Click any part of the lifecycle above—from the Roots of strategy to the Leaves of SaaS products—to explore our partnership blueprints.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTree;

