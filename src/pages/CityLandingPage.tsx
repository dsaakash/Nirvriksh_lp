import { useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import SEOHead from '../components/SEOHead';

interface CityData {
    name: string;
    hindiName: string;
    state: string;
    localAreas: string[];
    description: string;
    keywords: string;
}

const cityData: Record<string, CityData> = {
    vadodara: {
        name: 'Vadodara',
        hindiName: 'बड़ौदा',
        state: 'Gujarat',
        localAreas: ['Alkapuri', 'Sayajigunj', 'Manjalpur', 'Fatehgunj', 'Race Course'],
        description: 'Vadodara garment store owners face unique challenges with stock mismatch and inventory control. Our proven Stock Certainty System helped a local Vadodara clothing store recover Rs 3.2 lakh and reduce stock mismatch from 17% to 2% in just 30 days.',
        keywords: 'garment software Vadodara, kapde ki dukaan software Baroda, stock control Vadodara retail, clothing store consultant Vadodara, garment store management Vadodara, retail software Vadodara Gujarat, inventory management Vadodara, cloth shop software Vadodara'
    },
    ahmedabad: {
        name: 'Ahmedabad',
        hindiName: 'अहमदाबाद',
        state: 'Gujarat',
        localAreas: ['CG Road', 'Satellite', 'Maninagar', 'Vastrapur', 'Law Garden'],
        description: 'Ahmedabad is Gujarat\'s commercial hub with thousands of garment stores. Whether you run a kapda store in CG Road or a clothing boutique in Satellite, our Stock Certainty System brings complete control to your inventory without expensive software.',
        keywords: 'garment software Ahmedabad, kapda store software Ahmedabad, retail control system Ahmedabad, cloth shop inventory Ahmedabad, clothing store management Ahmedabad, stock control Ahmedabad, garment billing software Ahmedabad'
    },
    surat: {
        name: 'Surat',
        hindiName: 'सूरत',
        state: 'Gujarat',
        localAreas: ['Ring Road', 'Adajan', 'Varachha', 'Piplod', 'Textile Market'],
        description: 'Surat, the textile capital of India, has unique garment retail challenges. From readymade garment stores to cloth shops, our Stock Certainty System helps Surat retailers fix stock mismatch and recover lost profits in 30 days.',
        keywords: 'garment software Surat, textile shop management Surat, kapde ki dukaan system Surat, stock control software Surat, clothing store Surat, retail management Surat, garment inventory Surat'
    },
    gandhinagar: {
        name: 'Gandhinagar',
        hindiName: 'गांधीनगर',
        state: 'Gujarat',
        localAreas: ['Sector 11', 'Sector 21', 'Kudasan', 'Infocity', 'Pethapur'],
        description: 'Gandhinagar garment store owners need modern stock control without complexity. Our Stock Certainty System provides complete inventory visibility and control for clothing stores across Gandhinagar and surrounding areas.',
        keywords: 'garment store software Gandhinagar, retail software Gandhinagar Gujarat, clothing shop system Gandhinagar, stock control Gandhinagar, kapde ki dukaan Gandhinagar, inventory management Gandhinagar'
    },
    bangalore: {
        name: 'Bangalore',
        hindiName: 'बेंगलुरु',
        state: 'Karnataka',
        localAreas: ['Commercial Street', 'Jayanagar', 'Koramangala', 'Indiranagar', 'MG Road'],
        description: 'Bangalore\'s competitive garment retail market demands precision. Whether you operate in Commercial Street or Jayanagar, our Stock Certainty System helps you track every piece, control stock mismatch, and maximize profitability.',
        keywords: 'garment software Bangalore, clothing store system Bengaluru, stock control retail Bangalore, kapde ki dukaan software Bangalore, retail management Bangalore, inventory control Bangalore, garment shop Bangalore'
    },
    delhi: {
        name: 'Delhi',
        hindiName: 'दिल्ली',
        state: 'Delhi NCR',
        localAreas: ['Lajpat Nagar', 'Karol Bagh', 'Sarojini Nagar', 'Chandni Chowk', 'Nehru Place'],
        description: 'Delhi NCR garment stores handle high volume and variety. From Karol Bagh to Lajpat Nagar, our Stock Certainty System brings order to chaos - fixing stock mismatch and giving you complete control over your inventory.',
        keywords: 'garment software Delhi NCR, clothing store inventory Delhi, stock mismatch solution Delhi, kapde ki dukaan consultant Delhi, retail control Delhi, garment management Delhi, cloth shop software Delhi'
    },
    mumbai: {
        name: 'Mumbai',
        hindiName: 'मुंबई',
        state: 'Maharashtra',
        localAreas: ['Linking Road', 'Colaba', 'Dadar', 'Andheri', 'Bandra'],
        description: 'Mumbai\'s fast-paced garment retail needs robust systems. Whether you\'re in Linking Road or Dadar, our Stock Certainty System helps you manage high-volume sales while maintaining perfect stock accuracy.',
        keywords: 'garment software Mumbai, clothing shop inventory Mumbai, stock control system Mumbai, kapde ki dukaan consultant Mumbai, retail management Mumbai, garment store Mumbai, inventory software Mumbai'
    },
    mysore: {
        name: 'Mysore',
        hindiName: 'मैसूर',
        state: 'Karnataka',
        localAreas: ['Devaraja Market', 'Saraswathipuram', 'Vijayanagar', 'Kuvempunagar', 'Gokulam'],
        description: 'Mysore garment stores need simple yet effective stock control. Our Stock Certainty System is perfect for clothing retailers in Mysore - no complex software, just complete control over your inventory.',
        keywords: 'garment software Mysore, clothing store system Mysuru, retail control Mysore Karnataka, stock software garment Mysore, kapde ki dukaan Mysore, inventory management Mysore'
    }
};

const CityLandingPage = () => {
    const { city } = useParams<{ city: string }>();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const cityInfo = city ? cityData[city] : null;

    if (!cityInfo) {
        return (
            <div className="min-h-screen bg-slate-50">
                <Header />
                <div className="container mx-auto px-4 py-32 text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">City Not Found</h1>
                    <p className="text-xl text-slate-600">We don't have information for this city yet.</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <SEOHead
                title={`Garment Store Stock Control System in ${cityInfo.name} — RCA by Nirvriksh`}
                description={`${cityInfo.description} Garment software ${cityInfo.name}, kapde ki dukaan software, clothing store inventory management, stock control system ${cityInfo.name}.`}
                keywords={cityInfo.keywords}
                ogTitle={`Garment Store Software ${cityInfo.name} | Stock Control System`}
                ogDescription={`Fix stock mismatch in ${cityInfo.name} garment stores. Vadodara client recovered Rs 3.2 lakh in 30 days. Stock control system for clothing stores in ${cityInfo.name}.`}
                canonical={`https://nirvriksh.com/garment-store-software-${city}`}
            />

            <Header />

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="h-8 w-8 text-blue-600" />
                        <span className="text-2xl font-bold text-slate-900">{cityInfo.name}, {cityInfo.state}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Garment Store Stock Control System in {cityInfo.name}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                        {cityInfo.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button
                            onClick={() => setIsBookingModalOpen(true)}
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                        >
                            Book Free Store Audit Call
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <a
                            href="tel:+919353083597"
                            className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-semibold hover:border-blue-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <Phone className="h-5 w-5" />
                            Call Now: +91 9353083597
                        </a>
                    </div>

                    {/* Local Areas */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <p className="text-sm font-semibold text-slate-600 mb-3">Serving garment stores across {cityInfo.name}:</p>
                        <div className="flex flex-wrap gap-2">
                            {cityInfo.localAreas.map((area, index) => (
                                <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vadodara Case Study */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-10 rounded-3xl border-2 border-emerald-200">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Real Results from Gujarat
                            </h2>
                        </div>

                        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                            A Vadodara garment store owner was losing money daily due to stock mismatch. After implementing our Stock Certainty System:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-2xl text-center">
                                <div className="text-5xl font-bold text-red-600 mb-2">17%</div>
                                <p className="text-slate-600 font-semibold">Stock Mismatch Before</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl text-center">
                                <div className="text-5xl font-bold text-emerald-600 mb-2">2%</div>
                                <p className="text-slate-600 font-semibold">Stock Mismatch After</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">₹3.2L</div>
                                <p className="text-slate-600 font-semibold">Recovered in 30 Days</p>
                            </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Same stock. Same team. Same billing software. Just one proper system — and complete control.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Common Problems in {cityInfo.name} Garment Stores
                    </h2>

                    <p className="text-xl text-slate-600 mb-12">
                        Whether you run a kapde ki dukaan in {cityInfo.localAreas[0]} or a clothing store in {cityInfo.localAreas[1]}, these challenges are universal:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Stock Never Matches</h3>
                            <p className="text-slate-600 leading-relaxed">
                                System mein kuch aur, physical count mein kuch aur. Daily reconciliation takes hours but problems remain.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Dead Stock Piling Up</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Lakhs locked in slow-moving inventory. No clear data on what's selling and what's not.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <div className="text-4xl mb-4">📝</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Manual Register Dependency</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Billing software hai lekin manual register bhi. Two systems = double confusion, zero control.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-200">
                            <div className="text-4xl mb-4">❌</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">No Buying Intelligence</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Kaunsa size, color, style fast move karta hai? Guesswork pe buying decisions = profit loss.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Stock Certainty System for {cityInfo.name}
                    </h2>

                    <p className="text-xl text-slate-600 mb-12">
                        30-day program to fix stock mismatch permanently. No new software needed.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Control Gap Audit</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Exact measurement of system vs physical stock. Your leakage in Rupees.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Foundation Reset</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Clean SKU structure. Remove duplicates. Reliable baseline for tracking.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Entry Lock</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No stock enters without digital verification. Gatekeeper for incoming inventory.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Sales Deduction</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Every sale automatically reduces stock. No manual adjustments needed.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Single System</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Remove manual registers. One digital truth. No parallel Excel or paper logs.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Owner Dashboard</h3>
                            <p className="text-slate-600 leading-relaxed">
                                10-minute daily visibility. YOU verify independently. Full transparency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Free Store Audit Call for {cityInfo.name} Retailers
                    </h2>

                    <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                        30-minute call to identify exact leaks in your store and create a clear roadmap. No sales pressure.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                        <div className="text-center">
                            <div className="text-5xl mb-2">✓</div>
                            <p className="text-slate-300">No sales pressure</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-2">⏱️</div>
                            <p className="text-slate-300">30 min strategy session</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-2">📋</div>
                            <p className="text-slate-300">30-day roadmap</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-xl"
                    >
                        Book Your Free Call Now
                        <ArrowRight className="h-5 w-5" />
                    </button>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
                        <a href="tel:+919353083597" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="h-5 w-5" />
                            +91 9353083597
                        </a>
                        <a href="mailto:aakash@nirvriksh.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="h-5 w-5" />
                            aakash@nirvriksh.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CityLandingPage;
