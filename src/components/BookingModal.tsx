import { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [step, setStep] = useState<'form' | 'calendly'>('form');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        storeName: '',
        problem: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3001/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    mobile: formData.mobile,
                    storeName: formData.storeName,
                    problems: [formData.problem],
                    stage: 'audit-booking'
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            // Move to calendly step
            setStep('calendly');
        } catch (err) {
            setError('Something went wrong. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
                >
                    <X className="h-6 w-6 text-slate-600" />
                </button>

                {step === 'form' ? (
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                Book Your Free Store Audit
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Fill in your details to schedule a 30-minute strategy call
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label htmlFor="storeName" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Store Name *
                                </label>
                                <input
                                    type="text"
                                    id="storeName"
                                    name="storeName"
                                    required
                                    value={formData.storeName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Your store name"
                                />
                            </div>

                            <div>
                                <label htmlFor="problem" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Main Problem You're Facing *
                                </label>
                                <textarea
                                    id="problem"
                                    name="problem"
                                    required
                                    value={formData.problem}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Describe your main stock management challenge..."
                                />
                            </div>

                            {error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Submitting...' : 'Continue to Book Call'}
                                <ArrowRight className="h-5 w-5" />
                            </button>

                            <p className="text-center text-sm text-slate-500">
                                Your information is secure and will only be used to contact you about your audit.
                            </p>
                        </form>
                    </div>
                ) : (
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                Details Submitted!
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Now choose a convenient time for your free audit call
                            </p>
                        </div>

                        {/* Calendly Embed */}
                        <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                            <iframe
                                src="https://calendly.com/nirvriksh/meet-up"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                className="rounded-xl"
                            ></iframe>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold text-slate-900 mb-3">What to Expect:</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>30-minute strategy session</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>Stock control gap analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>Custom 30-day roadmap</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>No sales pressure, honest advice</span>
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
