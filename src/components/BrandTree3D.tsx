import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandTree3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We track scroll progress through this container
  // 0 -> 1 over 400vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- ANIMATION TRANSFORMS ---

  // Roots (Nir) - Appears at 0%, starts fading out around 25%
  const rootsOpacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3], [1, 1, 0, 0]);
  const rootsScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.5]);

  // Trunk (V) - Appears at 20%, peaks at 45%, fades by 55%
  const trunkOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const trunkScale = useTransform(scrollYProgress, [0.15, 0.5], [0.8, 1.2]);

  // Branches (Ri) - Appears at 45%, peaks at 70%, fades by 80%
  const branchesOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const branchesScale = useTransform(scrollYProgress, [0.45, 0.75], [0.8, 1.2]);

  // Leaves (Ksh) - Appears at 75%, stays to 100%
  const leavesOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const leavesScale = useTransform(scrollYProgress, [0.75, 1], [0.8, 1.1]);

  // Background color interpolation for a journey feeling
  // Dark earth -> Woody brown -> Blue sky -> Vibrant Canopy
  const backgroundMap = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#0A0A0A", "#1c1206", "#040b14", "#0a1405"]
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      {/* Sticky container that holds the 3D-like visuals */}
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: backgroundMap }}
      >
        
        {/* Layer 1: Roots (Nir - Core) */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8"
          style={{ opacity: rootsOpacity, scale: rootsScale }}
        >
          <div className="relative w-full max-w-2xl text-center z-10">
            <h2 className="text-[12vw] md:text-8xl font-black text-[#BA7517] tracking-tighter mix-blend-screen opacity-20 absolute -top-20 left-0 right-0">NIR</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">The Roots <span className="text-[#BA7517]">— Core</span></h3>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-lg mx-auto leading-relaxed">
              The invisible foundation. Ideation, consulting, and POC. Nothing stands without them.
            </p>
          </div>
          {/* Abstract Root Graphic */}
          <div className="absolute bottom-0 w-full flex justify-center -z-10">
            <svg width="600" height="400" viewBox="0 0 600 400" fill="none" className="opacity-40 blur-[2px]">
              <path d="M300 0 C 300 200, 100 300, 50 400" stroke="#BA7517" strokeWidth="8" strokeLinecap="round" />
              <path d="M300 0 C 300 150, 450 250, 550 400" stroke="#BA7517" strokeWidth="12" strokeLinecap="round" />
              <path d="M300 0 L 300 400" stroke="#8B5A14" strokeWidth="20" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-0 w-[800px] h-[300px] bg-[#BA7517] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
          </div>
        </motion.div>

        {/* Layer 2: Trunk (V - Services) */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8"
          style={{ opacity: trunkOpacity, scale: trunkScale }}
        >
          <div className="relative w-full max-w-2xl text-center z-10">
            <h2 className="text-[12vw] md:text-8xl font-black text-[#D85A30] tracking-tighter mix-blend-screen opacity-20 absolute -top-20 left-0 right-0">V</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">The Trunk <span className="text-[#D85A30]">— Services</span></h3>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-lg mx-auto leading-relaxed">
              The carrying force. Moving resources from roots to leaves through MVP development and marketing.
            </p>
          </div>
          {/* Abstract Trunk Graphic */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <svg width="200" height="800" viewBox="0 0 200 800" fill="none" className="opacity-60">
              <rect x="70" y="0" width="60" height="800" rx="30" fill="url(#trunkGrad)" />
              <defs>
                <linearGradient id="trunkGrad" x1="100" y1="0" x2="100" y2="800" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D85A30" />
                  <stop offset="1" stopColor="#BA7517" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute w-[200px] h-[800px] bg-[#D85A30] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          </div>
        </motion.div>

        {/* Layer 3: Branches (Ri - ERP) */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8"
          style={{ opacity: branchesOpacity, scale: branchesScale }}
        >
           <div className="relative w-full max-w-2xl text-center z-10">
            <h2 className="text-[12vw] md:text-8xl font-black text-[#378ADD] tracking-tighter mix-blend-screen opacity-20 absolute -top-20 left-0 right-0">RI</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Branches <span className="text-[#378ADD]">— ERP</span></h3>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Splitting into multiple directions. Custom ERP modules built for different industries.
            </p>
          </div>
          {/* Abstract Branches Graphic */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <svg width="800" height="600" viewBox="0 0 800 600" fill="none" className="opacity-60">
               <path d="M400 600 Q 400 300, 100 100" stroke="#378ADD" strokeWidth="15" strokeLinecap="round" />
               <path d="M400 600 Q 400 300, 700 100" stroke="#378ADD" strokeWidth="15" strokeLinecap="round" />
               <path d="M400 600 Q 400 200, 400 50" stroke="#2a6cae" strokeWidth="20" strokeLinecap="round" />
            </svg>
            <div className="absolute w-[600px] h-[400px] bg-[#378ADD] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
          </div>
        </motion.div>

        {/* Layer 4: Leaves (Ksh - SaaS) */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center p-8"
          style={{ opacity: leavesOpacity, scale: leavesScale }}
        >
           <div className="relative w-full max-w-2xl text-center z-10">
            <h2 className="text-[12vw] md:text-8xl font-black text-[#639922] tracking-tighter mix-blend-screen opacity-20 absolute -top-32 left-0 right-0">KSH</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">The Leaves <span className="text-[#639922]">— SaaS</span></h3>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-lg mx-auto leading-relaxed mb-8">
              The visible output. Niche SaaS products like <span className="text-white font-semibold">Retail Control Architect</span> that deliver immediate business value.
            </p>
            <a href="/saas/rca/vsl" className="inline-flex items-center gap-2 px-8 py-4 bg-[#639922] hover:bg-[#507d18] text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(99,153,34,0.4)] hover:shadow-[0_0_50px_rgba(99,153,34,0.6)]">
              Explore RCA Software
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
          {/* Abstract Leaves Graphic */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <div className="relative w-[800px] h-[600px]">
              <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-10 left-20 w-64 h-64 bg-[#639922] rounded-full mix-blend-screen filter blur-[60px] opacity-60"></motion.div>
              <motion.div animate={{ rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute top-20 right-20 w-80 h-80 bg-[#a3da5f] rounded-full mix-blend-screen filter blur-[80px] opacity-40"></motion.div>
              <motion.div animate={{ rotate: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }} className="absolute bottom-20 left-1/3 w-96 h-96 bg-[#4a7a13] rounded-full mix-blend-screen filter blur-[100px] opacity-50"></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
          style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0.5, 0]) }}
        >
          <span className="text-white text-xs uppercase tracking-[0.2em] mb-2 font-medium">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [-64, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default BrandTree3D;
