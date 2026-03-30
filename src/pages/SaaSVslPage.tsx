import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Zap,
  BarChart3,
  ChevronRight,
  Target,
  Clock
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';


/* --- Quiz Component --- */
const LeakageQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<any>(null);

  const questions = [
    {
      q: "What is your approximate annual revenue?",
      options: [
        { label: "₹30L – ₹50L", value: 4000000 },
        { label: "₹50L – ₹80L", value: 6500000 },
        { label: "₹80L – ₹1.2Cr", value: 10000000 },
        { label: "₹1.2Cr – ₹1.5Cr+", value: 13500000 },
      ],
    },
    {
      q: "Does your system stock match physical stock?",
      options: [
        { label: "Mostly matches (< 5% gap)", value: 5 },
        { label: "Noticeable gap (5–10%)", value: 8 },
        { label: "Significant gap (10–15%)", value: 13 },
        { label: "I honestly don't know", value: 15 },
      ],
    },
    {
      q: "Do you use manual registers alongside billing software?",
      options: [
        { label: "No, fully digital", value: 0 },
        { label: "Yes, some manual backup", value: 1 },
        { label: "Yes, heavily rely on manual", value: 2 },
      ],
    },
    {
      q: "How long does daily reconciliation take?",
      options: [
        { label: "Under 15 minutes", value: 0 },
        { label: "30 minutes to 1 hour", value: 1 },
        { label: "1–2 hours", value: 2 },
        { label: "We don't reconcile daily", value: 3 },
      ],
    },
    {
      q: "If your key staff member leaves tomorrow, what happens?",
      options: [
        { label: "Systems continue smoothly", value: 0 },
        { label: "Some disruption, but manageable", value: 1 },
        { label: "Major chaos — they know everything", value: 2 },
      ],
    },
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [step]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const revenue = newAnswers[0] || 4000000;
      const mismatch = newAnswers[1] || 10;
      const annualLeakage = Math.round((revenue * mismatch) / 100);
      const monthlyLeakage = Math.round(annualLeakage / 12);
      const dailyLeakage = Math.round(monthlyLeakage / 30);
      const paybackDays = Math.round(85000 / dailyLeakage);

      setResult({
        annualLeakage,
        monthlyLeakage,
        dailyLeakage,
        paybackDays,
        mismatch,
      });
    }
  };

  if (result) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-premium p-8 rounded-[2rem] border border-blue-100 shadow-xl max-w-2xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-red-100 rounded-2xl">
            <BarChart3 className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Your Leakage Report</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Annual Leakage</span>
            <span className="text-2xl font-black text-red-600">₹{result.annualLeakage.toLocaleString("en-IN")}</span>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Daily Loss</span>
            <span className="text-2xl font-black text-red-500">₹{result.dailyLeakage.toLocaleString("en-IN")}</span>
          </div>
        </div>
        <p className="text-slate-600 mb-8 font-medium leading-relaxed">
          Your store is leaking approximately <strong className="text-slate-900">₹{result.dailyLeakage.toLocaleString("en-IN")}/day</strong>. 
          Our system pays for itself in less than <strong className="text-emerald-600">{result.paybackDays} days</strong>.
        </p>
        <a 
          href="https://calendly.com/nirvriksh/meet-up"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          Stop the Bleeding — Book Audit
          <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto glass-premium p-8 rounded-[2rem] border border-slate-100 shadow-lg">
      <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="bg-blue-600 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
        />
      </div>
      <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">Step {step + 1} of {questions.length}</span>
      <h3 className="text-2xl font-black text-slate-900 mb-8 leading-tight">{questions[step].q}</h3>
      <div className="space-y-3">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.value)}
            className="w-full text-left p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-slate-700 flex items-center justify-between group"
          >
            {opt.label}
            <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
};

const SaaSVslPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent pointer-events-none -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 mb-8 border border-red-100"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold uppercase tracking-widest">Only 3 Slots Left for Next Month</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              Your Store Is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Leaking Bucket.</span><br />
              Stop the Profit Bleed.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
              We fix stock mismatch in clothing stores in 30 days — permanently. No expensive ERP. No extra staff. Just absolute control.
            </p>
            
            {/* VSL VIDEO PLACEHOLDER */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-xl shadow-blue-500/40"
                  >
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </motion.div>
                  <p className="text-white/60 mt-4 font-bold uppercase tracking-widest text-xs">Watch the Strategy (3:45)</p>
                </div>
              </div>
              {/* Overlay graphics */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-bold">RCA Concept: Stock Certainty System™</span>
                <span className="text-white/60 text-xs">03:45 / 03:45</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LEAKAGE CALCULATOR --- */}
      <section className="py-24 bg-slate-50" id="calculator">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Calculate Your <span className="text-blue-600">Chaos Tax</span></h2>
            <p className="text-lg text-slate-500 font-medium">Answer 5 questions to find your store's annual hidden leakage.</p>
          </div>
          <LeakageQuiz />
        </div>
      </section>

      {/* --- THE SYSTEM --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-blue-600 font-black uppercase tracking-[0.25em] text-sm mb-4 block">The Blueprint</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                The 30-Day Stock <br />Certainty System™
              </h2>
              <p className="text-xl text-slate-600 font-medium italic">"We fix behavior, not just numbers."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Control Gap Audit™", desc: "We measure your REAL mismatch. System stock vs physical stock. Your exact leakage in Rupees.", icon: <Target className="h-6 w-6" /> },
                { step: "02", title: "Foundation Reset", desc: "Clean SKU structure. Naming, categories, colors. Remove duplicates. Reliable data baseline.", icon: <Zap className="h-6 w-6" /> },
                { step: "03", title: "Entry Lock™", desc: "No stock enters the store without digital verification. Your gatekeeper for incoming inventory.", icon: <ShieldCheck className="h-6 w-6" /> },
                { step: "04", title: "Sales Deduction Lock", desc: "Every sale automatically reduces stock. No manual adjustments. Real-time accuracy.", icon: <Clock className="h-6 w-6" /> },

                { step: "05", title: "Single System Force", desc: "Remove manual registers. One digital truth. No parallel Excel sheets or paper logs.", icon: <TrendingUp className="h-6 w-6" /> },
                { step: "06", title: "Owner Dashboard", desc: "10-minute daily visibility. YOU verify everything independently. Full operational transparency.", icon: <CheckCircle2 className="h-6 w-6" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-premium p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all"
                >
                  <span className="text-4xl font-black text-blue-100 mb-4 block">{item.step}</span>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">{item.icon}</div>
                    <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE OFFER --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-black mb-8">The Complete RCA <br /><span className="text-blue-500">Installation Offer</span></h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                  You aren't paying for a tool. You're paying to stop the bleeding. 
                  Get the full Stock Certainty System™ installed by our team.
                </p>
                <div className="space-y-6 mb-12">
                  {[
                    "Full Operational Control Gap Audit",
                    "Inventory Structure Refactor",
                    "Supplier & Sales Entry Verification",
                    "30-Day Discipline Implementation",
                    "Owner Visibility Dashboard Setup",
                    "Staff Compliance Rulebook™"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-lg font-bold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-premium p-10 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl">
                <div className="text-center mb-10">
                  <span className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4 block">Total Value: ₹97,000</span>
                  <h3 className="text-3xl font-black mb-2">One-Time Setup</h3>
                  <div className="text-6xl font-black text-white mb-2">₹85,000</div>
                  <p className="text-slate-400 font-medium">No hidden upsells. No monthly fees.</p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 mb-10">
                  <p className="text-sm text-slate-400 leading-relaxed italic">
                    "If your Hidden Leakage Report shows less than ₹85,000 in annual impact — we tell you honestly and don't take your investment."
                  </p>
                </div>

                <a 
                  href="https://calendly.com/nirvriksh/meet-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20 group"
                >
                  Schedule Your Audit
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="h-6 w-6 text-emerald-500 mb-1" />
                    <span className="text-[10px] font-bold uppercase text-slate-500">Guaranteed Result</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col items-center">
                    <TrendingUp className="h-6 w-6 text-blue-500 mb-1" />
                    <span className="text-[10px] font-bold uppercase text-slate-500">ROI Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GUARANTEE --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-premium p-12 bg-blue-50/50 rounded-[3rem] border border-blue-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16" />
            <ShieldCheck className="h-16 w-16 text-blue-600 mx-auto mb-8" />
            <h2 className="text-4xl font-black text-slate-900 mb-6">The Stock Certainty Guarantee™</h2>
            <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
              If, after full 30-day compliance, your stock mismatch does not reduce measurably — 
              <br className="hidden md:block" />
              <strong className="text-slate-900">We continue working with you at ZERO additional fee until control is achieved.</strong>
            </p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest italic">"I don't win unless you win."</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaaSVslPage;
