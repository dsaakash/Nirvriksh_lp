import { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [step, setStep] = useState<'questions' | 'info' | 'casestudy' | 'interest' | 'calendly'>('questions');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Step 1: Store Questions
    const [questions, setQuestions] = useState({
        revenue: '',
        stockMatch: '',
        manualRegister: '',
        reconciliationTime: '',
        staffDependency: ''
    });

    // Step 2: Owner Information
    const [ownerInfo, setOwnerInfo] = useState({
        name: '',
        storeName: '',
        mobile: '',
        email: ''
    });

    if (!isOpen) return null;

    // Step 1: Just move to next step (no save)
    const handleQuestionsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('info');
    };

    // Step 2: Just move to next step (no save)
    const handleInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('casestudy');
    };

    // Step 4: Save ALL data at once
    const handleInterestSubmit = async (isInterested: boolean) => {
        setLoading(true);
        setError('');

        try {
            // Save ALL data in ONE row to Google Sheet via Sheety
            const response = await fetch('https://api.sheety.co/05a0079d6a34e6b63fbef200c2db85c6/leadsSheet/sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sheet1: {
                        revenue: questions.revenue,
                        stockMatch: questions.stockMatch,
                        manualRegister: questions.manualRegister,
                        reconciliationTime: questions.reconciliationTime,
                        staffDependency: questions.staffDependency,
                        name: ownerInfo.name,
                        storeName: ownerInfo.storeName,
                        mobile: ownerInfo.mobile,
                        email: ownerInfo.email,
                        interested: isInterested ? 'Yes' : 'No',
                        stage: 'completed',
                        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
                    }
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save data');
            }

            const result = await response.json();
            console.log('Sheety response:', result);

            if (isInterested) {
                setStep('calendly');
            } else {
                alert('Thank you for your time! We hope to help you in the future.');
                onClose();
            }
        } catch (err) {
            console.error('Error details:', err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative my-8">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
                >
                    <X className="h-6 w-6 text-slate-600" />
                </button>

                {/* Step 1: Store Questions */}
                {step === 'questions' && (
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Step 1 of 4</span>
                                <span className="text-sm text-slate-500">Store Assessment</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                Let's Understand Your Store
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Answer a few questions to help us diagnose your situation
                            </p>
                        </div>

                        <form onSubmit={handleQuestionsSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    What is your approximate annual revenue? *
                                </label>
                                <select
                                    required
                                    value={questions.revenue}
                                    onChange={(e) => setQuestions({ ...questions, revenue: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Select revenue range</option>
                                    <option value="₹30L – ₹50L">₹30L – ₹50L</option>
                                    <option value="₹50L – ₹80L">₹50L – ₹80L</option>
                                    <option value="₹80L – ₹1.2Cr">₹80L – ₹1.2Cr</option>
                                    <option value="₹1.2Cr+">₹1.2Cr+</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Does your system stock match physical stock? *
                                </label>
                                <select
                                    required
                                    value={questions.stockMatch}
                                    onChange={(e) => setQuestions({ ...questions, stockMatch: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Select option</option>
                                    <option value="Mostly matches (< 5% gap)">Mostly matches (&lt; 5% gap)</option>
                                    <option value="Noticeable gap (5–10%)">Noticeable gap (5–10%)</option>
                                    <option value="Significant gap (10–15%)">Significant gap (10–15%)</option>
                                    <option value="I honestly don't know">I honestly don't know</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Do you use manual registers alongside billing software? *
                                </label>
                                <select
                                    required
                                    value={questions.manualRegister}
                                    onChange={(e) => setQuestions({ ...questions, manualRegister: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Select option</option>
                                    <option value="No, fully digital">No, fully digital</option>
                                    <option value="Yes, some manual backup">Yes, some manual backup</option>
                                    <option value="Yes, heavily rely on manual">Yes, heavily rely on manual</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    How long does daily reconciliation take? *
                                </label>
                                <select
                                    required
                                    value={questions.reconciliationTime}
                                    onChange={(e) => setQuestions({ ...questions, reconciliationTime: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Select option</option>
                                    <option value="Under 15 minutes">Under 15 minutes</option>
                                    <option value="30 minutes to 1 hour">30 minutes to 1 hour</option>
                                    <option value="1–2 hours">1–2 hours</option>
                                    <option value="We don't reconcile daily">We don't reconcile daily</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    If your key staff member leaves tomorrow, what happens? *
                                </label>
                                <select
                                    required
                                    value={questions.staffDependency}
                                    onChange={(e) => setQuestions({ ...questions, staffDependency: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Select option</option>
                                    <option value="Systems continue smoothly">Systems continue smoothly</option>
                                    <option value="Some disruption, but manageable">Some disruption, but manageable</option>
                                    <option value="Major chaos — they know everything">Major chaos — they know everything</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                            >
                                Continue
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                )}

                {/* Step 2: Owner Information */}
                {step === 'info' && (
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Step 2 of 4</span>
                                <span className="text-sm text-slate-500">Contact Information</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                Your Contact Details
                            </h2>
                            <p className="text-slate-600 text-lg">
                                We'll use this to send you the audit report
                            </p>
                        </div>

                        <form onSubmit={handleInfoSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={ownerInfo.name}
                                    onChange={(e) => setOwnerInfo({ ...ownerInfo, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Store Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={ownerInfo.storeName}
                                    onChange={(e) => setOwnerInfo({ ...ownerInfo, storeName: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Your store name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={ownerInfo.mobile}
                                    onChange={(e) => setOwnerInfo({ ...ownerInfo, mobile: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={ownerInfo.email}
                                    onChange={(e) => setOwnerInfo({ ...ownerInfo, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                            >
                                Continue
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                )}

                {/* Step 3: Case Study */}
                {step === 'casestudy' && (
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Step 3 of 4</span>
                                <span className="text-sm text-slate-500">Success Story</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                See How We Helped Lalitha Garments
                            </h2>
                            <p className="text-slate-600 text-lg">
                                A real store, real results — just like yours can be
                            </p>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">The Challenge</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Lalitha Garments had a 48% stock mismatch. System showed 100 pieces, but only 40 were actually in the store. They were losing ₹3.4L every month due to poor stock control.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">The Results</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-3xl font-bold text-green-600">99.8%</div>
                                        <p className="text-sm text-slate-600">Stock Accuracy</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-green-600">+₹3.4L</div>
                                        <p className="text-sm text-slate-600">Monthly Savings</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <p className="text-lg italic text-slate-700">
                                    "Pehle lagta tha ki software sirf bill banane ke liye hai... par RCA ne bataya ki software dhanda bachane ke liye hota hai."
                                </p>
                                <p className="text-sm text-slate-500 mt-2">— Lalitha Garments Owner</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setStep('interest')}
                            className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                        >
                            Continue
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                )}

                {/* Step 4: Interest Check */}
                {step === 'interest' && (
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Step 4 of 4</span>
                                <span className="text-sm text-slate-500">Final Step</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                Ready to Transform Your Store?
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Book a free call with our expert to diagnose your store and create a custom action plan
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Get:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">30-minute personalized store audit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">Exact leakage calculation for your store</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">Custom 30-day action plan</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">No sales pressure, honest advice</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-lg font-semibold text-slate-900 mb-4">
                                Are you interested in booking a call with our expert?
                            </p>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm mb-6">
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleInterestSubmit(false)}
                                disabled={loading}
                                className="py-4 bg-slate-200 text-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-300 transition-colors disabled:opacity-50"
                            >
                                Not Now
                            </button>
                            <button
                                onClick={() => handleInterestSubmit(true)}
                                disabled={loading}
                                className="py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Yes, Book Call'}
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 5: Calendly */}
                {step === 'calendly' && (
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                Perfect! Let's Schedule Your Call
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Choose a convenient time for your free store audit
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                            <iframe
                                src="https://calendly.com/nirvriksh/meet-up"
                                width="100%"
                                height="700"
                                style={{ border: 0 }}
                                className="rounded-xl"
                            ></iframe>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold text-slate-900 mb-3">What Happens Next:</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>You'll receive a confirmation email</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>Our expert will call you at the scheduled time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>We'll analyze your store and create an action plan</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
