import React from 'react';
import { ArrowRight, Sparkles, Sprout, TrendingUp, Globe, ShieldCheck, Zap } from 'lucide-react';
import heroImage from '../assets/hero-ecosystem.png';

const HeroSection = () => {
  return (
    <section id="what-we-do" className="pt-40 pb-20 bg-slate-50 overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-slate-900 mb-8 border border-slate-200 shadow-sm">
              <ShieldCheck className="h-4 w-4 mr-2 text-blue-600" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Not an Agency. A Strategic Engine.</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tight text-slate-900 mb-8">
              We Plant <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">The Seeds</span><br />
              Of Your Scale.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-bold mb-10">
              Nirvriksh is the living infrastructure for founders who refuse to be generic. 
              From <span className="text-emerald-600">0 → 1 Validation</span> to <span className="text-blue-600">Global SaaS Dominance</span>, 
              we are your long-term technical ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a 
                href="#ecosystem" 
                className="group flex items-center justify-center px-12 py-6 bg-slate-900 text-white rounded-[1.5rem] font-black text-lg hover:bg-blue-600 transition-all duration-300 shadow-2xl shadow-slate-200 hover:shadow-blue-200 hover:-translate-y-1"
              >
                Deep-Dive Ecosystem
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://calendly.com/nirvriksh/meet-up" 
                target="_blank"
                className="flex items-center justify-center px-10 py-6 border-2 border-slate-200 text-slate-900 rounded-[1.5rem] font-black text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-white"
              >
                Claim Your Blueprint
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 bg-white/50 backdrop-blur-md rounded-[2rem] border border-slate-100 shadow-sm">
              {[
                { label: 'NIR', sub: 'Core Ideation', icon: <Sprout className="text-emerald-600" /> },
                { label: 'V', sub: 'The Support', icon: <Zap className="text-orange-600" /> },
                { label: 'RI', sub: 'The Branch', icon: <TrendingUp className="text-blue-600" /> },
                { label: 'KSH', sub: 'Scale Output', icon: <Globe className="text-red-600" /> }
              ].map((pill, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 hover:bg-white rounded-[1.5rem] transition-colors cursor-default group">
                  <div className="mb-2 transition-transform group-hover:scale-110">{pill.icon}</div>
                  <p className="text-xs font-black text-slate-900">{pill.label}</p>
                  <p className="text-[10px] font-bold text-slate-400">{pill.sub}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              {/* Animated aura */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-500/20 via-blue-500/20 to-amber-500/20 rounded-[3rem] blur-3xl group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
              
              <div className="relative bg-white p-6 rounded-[3rem] shadow-[0_64px_128px_-24px_rgba(0,0,0,0.15)] border border-slate-50 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-700">
                <img 
                  src={heroImage} 
                  alt="Nirvriksh Growth Ecosystem High Precision" 
                  className="rounded-[2.5rem] w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Status Bar Mockup */}
                <div className="absolute top-12 left-12 right-12 flex justify-between items-center px-6 py-3 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                    <p className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none">Status: Partner Mode Active</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-1 bg-white/20 rounded-full"></div>)}
                  </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-4/5 py-4 px-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl flex items-center justify-between">
                   <div className="text-left">
                     <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Current Focus</p>
                     <p className="text-sm font-black text-slate-900">Retail Control Architect V2.0</p>
                   </div>
                   <TrendingUp className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;