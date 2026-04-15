import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Store, DollarSign, PackageX, UserX } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const questions = [
  {
    id: 1,
    title: "How many stores do you currently operate?",
    options: ["Just 1", "2-5 Stores", "5+ Stores"],
    icon: <Store className="w-8 h-8 text-[#BA7517] mb-4" />
  },
  {
    id: 2,
    title: "What's your biggest daily headache?",
    options: ["Inventory Mismatch / Dead Stock", "Staff Pilferage / Theft", "Billing & Checkout Delays", "No Central Control"],
    icon: <PackageX className="w-8 h-8 text-red-500 mb-4" />
  },
  {
    id: 3,
    title: "Are you losing money to manual errors?",
    options: ["Yes, constantly", "Sometimes", "Not sure, hard to track"],
    icon: <DollarSign className="w-8 h-8 text-green-500 mb-4" />
  }
];

function RCAGamePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [mobile, setMobile] = useState('');
  const [storeName, setStoreName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNext = (answer: string) => {
    setAnswers([...answers, answer]);
    setStep(s => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile) return;
    setLoading(true);

    try {
      // Prepare data for Google Sheet via Sheety API
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const payload = {
        sheet1: {
          storeName: storeName,
          mobile: mobile,
          storeCount: answers[0] || '', // How many stores
          problem1: answers[1] || '', // Biggest daily headache
          problem2: answers[2] || '', // Losing money to manual errors
          stage: 'rca-audit-completed',
          timestamp: timestamp,
          source: 'RCA Audit Page'
        }
      };

      // Send to Sheety API (Google Sheets)
      const response = await fetch('https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error saving to Google Sheet:', error);
      alert('Failed to save audit results. Please try again or contact us directly at +91 9353083597');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans">
      <SEOHead
        title="Free Retail Store Audit | Garment Store Stock Control Assessment India"
        description="Take free 60-second retail store audit. Identify stock mismatch, inventory gaps, and profit leakage in your garment store. Get instant report and expert consultation. Retail control system assessment India."
        keywords="free retail store audit, garment store audit, stock control assessment, retail control gap audit, inventory audit garment shop, stock mismatch assessment, retail consulting for garment store, garment store consultant India, clothing store profitability consultant India, retail stock audit service India, control gap audit, stock loss clothing store, garment store stock missing problem, why my garment store is not profitable, garment shop mein paise kyun nahi bache rahe, kapda store mein cash flow problem, retail control system India, garment retail consulting India, stock control clothing store"
        ogTitle="Free Retail Store Audit | Garment Store Stock Control Assessment"
        ogDescription="Take free 60-second retail store audit. Identify stock mismatch and profit leakage. Get instant report and expert consultation."
        canonical="https://nirvriksh.com/rca"
      />
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden pt-24">
        {/* Abstract Background */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#639922] opacity-10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#378ADD] opacity-10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-2xl w-full z-10">
          <AnimatePresence mode="wait">

            {step === 0 && (
              <motion.div
                key="start"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -30 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
                  }
                }}
                className="text-center w-full max-w-4xl mx-auto flex flex-col items-center"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } }
                  }}
                  className="inline-block px-5 py-2 rounded-full bg-red-900/20 border border-red-500/30 text-red-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_rgba(239,68,68,0.15)] backdrop-blur-sm"
                >
                  ⚠️ Warning for Indian Retail Format Store Owners
                </motion.div>

                <motion.h1
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
                  }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight flex flex-col items-center"
                >
                  <div className="flex flex-wrap justify-center">
                    {"Dukaan mein bheed hai,".split(" ").map((word, i) => (
                      <motion.span
                        key={`w1-${i}`}
                        variants={{
                          hidden: { opacity: 0, y: 50, rotateX: -60, filter: 'blur(8px)' },
                          visible: {
                            opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)',
                            transition: { type: "spring", damping: 10, stiffness: 100 }
                          }
                        }}
                        className="mr-3 md:mr-4 inline-block text-[#FAFAFA]"
                        style={{ perspective: 1000 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center mt-2">
                    {"par PROFITS kahan ja rahe hain?".split(" ").map((word, i) => (
                      <motion.span
                        key={`w2-${i}`}
                        variants={{
                          hidden: { opacity: 0, y: 50, rotateX: -60, filter: 'blur(8px)' },
                          visible: {
                            opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)',
                            transition: { type: "spring", damping: 10, stiffness: 100 }
                          }
                        }}
                        className="mr-3 md:mr-4 inline-block text-neutral-500"
                        style={{ perspective: 1000 }}
                      >
                        {word === "PROFITS" ? (
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">{word}</span>
                        ) : word}
                      </motion.span>
                    ))}
                  </div>
                </motion.h1>

                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                  }}
                  className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed space-y-6"
                >
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, rotate: -2 },
                      visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 150 } }
                    }}
                    className="text-[#DAA520] font-semibold bg-[#DAA520]/10 py-3 px-6 rounded-2xl border border-[#DAA520]/20 inline-block origin-center"
                  >
                    Stock count kabhi match nahi hota? • Staff ki chori pakdi nahi ja rahi?
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-lg md:text-xl text-neutral-400 font-normal px-4"
                  >
                    Stop running your business on blind trust. Take this eye-opening <span className="text-white font-bold">60-second Interactive Audit</span> aur check karein ki aapki dukaan ka actual system kitna safe hai.
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 200 } }
                  }}
                  className="flex flex-col items-center"
                >
                  <button
                    onClick={() => setStep(1)}
                    className="bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] hover:-translate-y-1 flex items-center gap-4 group uppercase tracking-widest relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative">Start Retail Audit Now</span>
                    <ArrowRight className="w-6 h-6 relative group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="mt-6 text-sm text-neutral-500 uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 100% Free Analysis • Immediate Report
                  </p>
                </motion.div>
              </motion.div>
            )}

            {step > 0 && step <= questions.length && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-[#111] border border-[#222] p-10 rounded-3xl shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#222]">
                  <motion.div
                    initial={{ width: `${((step - 1) / questions.length) * 100}%` }}
                    animate={{ width: `${(step / questions.length) * 100}%` }}
                    className="h-full bg-[#639922]"
                  />
                </div>

                <div className="flex justify-center mb-6">
                  {questions[step - 1].icon}
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">{questions[step - 1].title}</h2>
                <div className="flex flex-col gap-4">
                  {questions[step - 1].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleNext(opt)}
                      className="text-left px-6 py-4 rounded-xl border border-[#333] hover:border-[#639922] hover:bg-[#639922]/10 transition-colors text-lg"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === questions.length + 1 && !submitted && (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111] border border-[#639922]/30 p-10 rounded-3xl shadow-[0_0_50px_rgba(99,153,34,0.1)]"
              >
                <h2 className="text-3xl font-bold text-center mb-4">Audit Complete.</h2>
                <p className="text-center text-neutral-400 mb-8 text-lg">
                  We've identified critical operational gaps based on your answers. Enter your details to view the full report and schedule a strategy call.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-sm text-neutral-400 mb-2 block">Store Name / Brand</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Trendy Wear"
                      className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg p-4 text-white focus:outline-none focus:border-[#639922] text-lg"
                      value={storeName}
                      onChange={e => setStoreName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-400 mb-2 block">Mobile Number generated for SMS report</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 99999 99999"
                      className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg p-4 text-white focus:outline-none focus:border-[#639922] text-lg"
                      value={mobile}
                      onChange={e => setMobile(e.target.value)}
                    />
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="mt-4 bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {loading ? 'Analyzing...' : 'Show Audit Results & Book Call'} <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            )}

            {submitted && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-green-900/10 border border-green-500/20 rounded-3xl"
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="w-20 h-20 text-[#639922]" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Audit Saved to CRM.</h2>
                <p className="text-lg text-neutral-400 mb-8">
                  Your dedicated Retail Control Architect expert will call you shortly to discuss your unique challenges:
                  <br /><br />
                  <span className="text-[#DAA520] font-medium">Issue 1: {answers[1]}</span><br />
                  <span className="text-[#DAA520] font-medium">Issue 2: {answers[2]}</span>
                </p>
                <div className="text-sm text-neutral-500">
                  (Check the Admin Dashboard to see the captured data!)
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RCAGamePage;
