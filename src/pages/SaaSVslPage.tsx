import { useState } from 'react';
import { Play, ArrowRight, ChevronRight, BarChart3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import CaseStudySection from '../components/CaseStudySection';
import SEOHead from '../components/SEOHead';


/* --- Stock Audit Quiz Component --- */
const StockAuditQuiz = ({ onBookingClick }: { onBookingClick: () => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<any>(null);

  const questions = [
    {
      q: "What is your approximate annual revenue?",
      hint: "Apna yearly turnover batao",
      options: [
        { label: "₹30L – ₹50L", value: 4000000 },
        { label: "₹50L – ₹80L", value: 6500000 },
        { label: "₹80L – ₹1.2Cr", value: 10000000 },
        { label: "₹1.2Cr+", value: 13500000 },
      ],
    },
    {
      q: "Does your system stock match physical stock?",
      hint: "Kya aapka billing software aur actual stock match karta hai?",
      options: [
        { label: "Mostly matches (< 5% gap)", value: 5 },
        { label: "Noticeable gap (5–10%)", value: 8 },
        { label: "Significant gap (10–15%)", value: 13 },
        { label: "I honestly don't know", value: 15 },
      ],
    },
    {
      q: "Do you use manual registers alongside billing software?",
      hint: "Kya aap software ke saath manual register bhi use karte ho?",
      options: [
        { label: "No, fully digital", value: 0 },
        { label: "Yes, some manual backup", value: 1 },
        { label: "Yes, heavily rely on manual", value: 2 },
      ],
    },
    {
      q: "How long does daily reconciliation take?",
      hint: "Roz stock match karne mein kitna time lagta hai?",
      options: [
        { label: "Under 15 minutes", value: 0 },
        { label: "30 minutes to 1 hour", value: 1 },
        { label: "1–2 hours", value: 2 },
        { label: "We don't reconcile daily", value: 3 },
      ],
    },
    {
      q: "If your key staff member leaves tomorrow, what happens?",
      hint: "Agar aapka main staff member kal chala jaye?",
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
      <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-red-50 rounded-2xl">
            <BarChart3 className="h-8 w-8 text-red-600" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Your Stock Audit Report</h3>
            <p className="text-slate-600">Based on your answers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-50 p-6 rounded-2xl text-center">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-2">Annual Leakage</span>
            <span className="text-3xl font-bold text-red-600">₹{result.annualLeakage.toLocaleString("en-IN")}</span>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl text-center">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-2">Monthly Loss</span>
            <span className="text-3xl font-bold text-red-500">₹{result.monthlyLeakage.toLocaleString("en-IN")}</span>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl text-center">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-2">Daily Loss</span>
            <span className="text-3xl font-bold text-red-500">₹{result.dailyLeakage.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8">
          <h4 className="text-xl font-bold text-slate-900 mb-3">What This Means</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            Your store is leaking approximately <strong className="text-slate-900">₹{result.dailyLeakage.toLocaleString("en-IN")} per day</strong> due to stock mismatch and control gaps.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Our Stock Certainty System (₹85,000 one-time) pays for itself in approximately <strong className="text-emerald-600">{result.paybackDays} days</strong>.
          </p>
        </div>

        <button
          onClick={onBookingClick}
          className="w-full py-5 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          Book Free Store Audit Call
          <ArrowRight className="h-5 w-5" />
        </button>
        <p className="text-center text-sm text-slate-500 mt-4">
          30-minute call · No sales pressure · Get your detailed roadmap
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl border-2 border-slate-200">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Question {step + 1} of {questions.length}
          </span>
          <span className="text-sm text-slate-500">
            {Math.round(((step + 1) / questions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
        {questions[step].q}
      </h3>
      <p className="text-slate-600 mb-8 italic">{questions[step].hint}</p>

      <div className="space-y-4">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.value)}
            className="w-full text-left p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all font-semibold text-slate-700 text-lg flex items-center justify-between group"
          >
            <span>{opt.label}</span>
            <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
};

const SaaSVslPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Stock Certainty System for Garment Stores | 30-Day Stock Control Program India"
        description="Stock Certainty System for clothing stores. Fix stock mismatch in 30 days. Same stock, complete control. Vadodara client: 17% to 2% mismatch, Rs 3.2 lakh recovered. Garment store management system India."
        keywords="stock certainty system, 30 day stock control program for garment store, stock control software for clothing shop India, garment store management system India, inventory control for kapde ki dukaan, how to implement stock system in clothing store, variant level billing for garment shop, size colour wise inventory garment shop, GST billing with stock tracking garment store, stock control system India, clothing store inventory management, garment retail consulting India, done with you retail consulting India, retail control system for garment store India, stock mismatch garment store, how to fix stock loss in clothing store, garment store stock missing problem, how to reduce stock mismatch in retail store India, kapde ki dukaan ke liye system kaise banayein, stock control clothing store, garment software India, kapde ki dukaan software"
        ogTitle="Stock Certainty System | 30-Day Stock Control for Garment Stores India"
        ogDescription="Fix stock mismatch in 30 days. Same stock, complete control. Vadodara client recovered Rs 3.2 lakh. Stock control system for clothing stores India."
        canonical="https://nirvriksh.com/vsl"
      />
      <Header />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Stock Certainty System
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Same stock.
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
              Complete control.
            </h2>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Aapka stock already hai. Bas ek proper system nahi hai — jo track kare, match kare, aur control de. Yahi hai Stock Certainty System.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Take Free Stock Audit
              </button>
              <a
                href="https://rca.nirvriksh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  alt="Lalitha Garments - Stock pe control, profit pe pakad."
                  width="250"
                  height="54"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1122063&theme=light&t=1776018852312"
                />
              </a>
              <a
                href="#video"
                className="px-8 py-4 text-slate-700 font-semibold hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                Watch the Video <span className="text-xl">↓</span>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-900 mb-2">2×</div>
                <p className="text-slate-600">control without new systems</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-900 mb-2">30</div>
                <p className="text-slate-600">days to see measurable results</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-900 mb-2">6</div>
                <p className="text-slate-600">step system: audit, fix, control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE REAL PROBLEM */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              The Real Problem
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl">
              Aap stock laane mein busy ho — jabki mismatch quietly ho raha hai
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Most store owners zyada stock, zyada variety — yahi sochte hain solution hai. Reality mein problem tracking ki hai, quantity ki nahi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-5xl font-bold text-slate-900 mb-3">70%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dead Stock Trap</h3>
              <p className="text-slate-600 leading-relaxed">
                Retail stores apna paisa slow-moving inventory mein lock kar dete hain jab ki fresh stock ki zarurat hoti hai.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-5xl font-bold text-slate-900 mb-3">60%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Stock Mismatch</h3>
              <p className="text-slate-600 leading-relaxed">
                System mein kuch aur, physical count mein kuch aur. No tracking = no improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-5xl font-bold text-slate-900 mb-3">∞</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Manual Chaos</h3>
              <p className="text-slate-600 leading-relaxed">
                Billing software hai lekin manual register bhi. Two systems = double confusion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-5xl font-bold text-slate-900 mb-3">0</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No Tracking System</h3>
              <p className="text-slate-600 leading-relaxed">
                Kaunsa item fast move karta hai? Kaunsa dead hai? Koi data nahi = koi control nahi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WATCH THIS FIRST */}
      <section id="video" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Watch This First
            </h2>
            <p className="text-xl md:text-2xl text-slate-600">
              3 minutes mein samjho kya fix karna hai
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Yeh video sirf retail store owners ke liye hai jinke paas already stock hai — lekin control consistent nahi hai.
          </p>

          {/* Video Player */}
          <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AZkvgtFANbI"
              title="Stock Certainty System — VSL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl inline-block">
            <p className="font-semibold text-slate-900">Stock Certainty System — VSL</p>
            <p className="text-sm text-slate-600">2 MIN 58 SEC · HINDI-ENGLISH</p>
          </div>

          <div className="mt-12 flex justify-center">
            <div style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              border: '1px solid rgb(224, 224, 224)',
              borderRadius: '12px',
              padding: '20px',
              maxWidth: '500px',
              background: 'rgb(255, 255, 255)',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <img
                  alt="Lalitha Garments"
                  src="https://ph-files.imgix.net/fe14fabf-b25b-49ed-a8b8-a3e7f4ffa1f5.png?auto=format&fit=crop&w=80&h=80"
                  style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
                  <h3 style={{ margin: '0px', fontSize: '18px', fontWeight: 600, color: 'rgb(26, 26, 26)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    Lalitha Garments
                  </h3>
                  <p style={{ margin: '4px 0px 0px', fontSize: '14px', color: 'rgb(102, 102, 102)', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    Stock pe control, profit pe pakad.
                  </p>
                </div>
              </div>
              <a
                href="https://www.rca.nirvriksh.com"
                target="_blank"
                rel="noopener"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '12px', padding: '8px 16px', background: 'rgb(255, 97, 84)', color: 'rgb(255, 255, 255)', textDecoration: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 600 }}
              >
                Check it out on Product Hunt →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              The System
            </h2>
            <p className="text-xl md:text-2xl text-slate-600">
              6 layers jo milke control certainty dete hain
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Stock Certainty System ek complete audit → fix → control engine hai — built specifically for clothing and retail stores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Control Gap Audit</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                System stock vs physical stock — exact mismatch measurement. Your leakage in Rupees.
              </p>
              <p className="text-sm font-semibold text-blue-600">Measure everything</p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Foundation Reset</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Clean SKU structure. Categories, naming, colors. Remove duplicates. Reliable baseline.
              </p>
              <p className="text-sm font-semibold text-blue-600">Clean foundation</p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Entry Lock</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                No stock enters without digital verification. Gatekeeper for incoming inventory.
              </p>
              <p className="text-sm font-semibold text-blue-600">Control entry</p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sales Deduction</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every sale automatically reduces stock. No manual adjustments. Real-time accuracy.
              </p>
              <p className="text-sm font-semibold text-blue-600">Auto deduction</p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Single System</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Remove manual registers. One digital truth. No parallel Excel or paper logs.
              </p>
              <p className="text-sm font-semibold text-blue-600">One source of truth</p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Owner Dashboard</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                10-minute daily visibility. YOU verify independently. Full transparency.
              </p>
              <p className="text-sm font-semibold text-blue-600">Daily control</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              The Math
            </h2>
            <p className="text-xl md:text-2xl text-slate-600">
              Simple numbers. Serious results.
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Yeh koi projection nahi hai. Yeh simple math hai — jab aap existing stock ko properly track aur control karo.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-2xl text-center min-w-[250px]">
              <p className="text-sm font-semibold text-slate-600 mb-2">Without System</p>
              <div className="text-6xl font-bold text-slate-900 mb-2">60%</div>
              <p className="text-slate-600">stock accuracy rate</p>
            </div>

            <div className="text-4xl text-slate-400">↓</div>

            <div className="bg-blue-50 p-8 rounded-2xl text-center min-w-[250px] border-2 border-blue-200">
              <p className="text-sm font-semibold text-blue-600 mb-2">With System</p>
              <div className="text-6xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-slate-600">stock accuracy rate</p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <ul className="space-y-3 text-lg text-slate-700">
              <li>✓ Same stock</li>
              <li>✓ No new systems</li>
              <li>✓ No heavy investment</li>
              <li>✓ 2× control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HONEST ANSWER */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Honest Answer
            </h2>
            <p className="text-xl md:text-2xl text-slate-600">
              Aapka sawaal aur seedha jawab
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Store Owner Sochta Hai
              </h3>
              <p className="text-lg text-slate-600 italic leading-relaxed">
                "Yeh sab sunne mein accha lagta hai… lekin kya ye mere store ke liye actually kaam karega?"
              </p>
            </div>

            <div className="bg-blue-50 p-10 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Seedha Jawab
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Agar aapke paas already stock hai aur consistently match nahi ho raha — toh aapka case clear hai.
              </p>
              <ul className="space-y-2 text-lg text-slate-700 mb-4">
                <li>• capture nahi ho raha</li>
                <li>• track nahi ho raha</li>
                <li>• control nahi ho raha</li>
              </ul>
              <p className="text-lg text-slate-600 leading-relaxed">
                System fix karna guesswork nahi hai. Yeh ek structured process hai — jo har store mein apply hoti hai jahan stock exist karta hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <CaseStudySection />

      {/* STOCK AUDIT CALCULATOR */}
      <section id="audit" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Free Stock Audit
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-4">
              Calculate your exact leakage
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Answer 5 quick questions to see how much your store is losing daily due to stock mismatch
            </p>
          </div>

          <StockAuditQuiz onBookingClick={() => setIsBookingModalOpen(true)} />
        </div>
      </section>

      {/* FREE STORE AUDIT CALL */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Free Store Audit Call
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Same stock se 2×–3× control
            </p>
          </div>

          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            Is call mein hum aapka stock breakdown karenge, exact leaks identify karenge, aur clear roadmap denge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl mb-2">✓</div>
              <p className="text-slate-300">Koi sales pressure nahi</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">⏱️</div>
              <p className="text-slate-300">30 min strategy session</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">📋</div>
              <p className="text-slate-300">30-day roadmap</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Book Your Free Call Now
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-sm text-slate-400 mt-6">
              Limited spots available · Clothing & retail stores only
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaaSVslPage;
