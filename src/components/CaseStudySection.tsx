import { useEffect, useRef } from 'react';
import { Target, TrendingUp, Smile, Award } from 'lucide-react';

const CaseStudySection = () => {
    const beforeChartRef = useRef<HTMLCanvasElement>(null);
    const radarChartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Dynamically load Chart.js
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.async = true;
        script.onload = () => {
            initCharts();
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initCharts = () => {
        if (typeof window === 'undefined' || !(window as any).Chart) return;

        const Chart = (window as any).Chart;

        // Before Chart
        if (beforeChartRef.current) {
            const ctx1 = beforeChartRef.current.getContext('2d');
            new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['Saree', 'Lehenga', 'Suits', 'Kids Wear'],
                    datasets: [{
                        label: 'Missing Stock (Reality Gap)',
                        data: [35, 48, 22, 55],
                        backgroundColor: '#ef4444',
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: (v: number) => v + '%'
                            }
                        }
                    }
                }
            });
        }

        // Impact Radar
        if (radarChartRef.current) {
            const ctx2 = radarChartRef.current.getContext('2d');
            new Chart(ctx2, {
                type: 'radar',
                data: {
                    labels: ['Accuracy', 'Profit Margin', 'Owner Freedom', 'Staff Control', 'Customer Smile'],
                    datasets: [{
                        label: 'Old Manual Way',
                        data: [40, 50, 20, 30, 60],
                        borderColor: '#94a3b8',
                        backgroundColor: 'rgba(148, 163, 184, 0.2)'
                    }, {
                        label: 'After RCA Stock Certainty',
                        data: [99, 92, 95, 90, 98],
                        borderColor: '#2563EB',
                        backgroundColor: 'rgba(37, 99, 235, 0.2)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Top Banner */}
                <div className="bg-blue-600 text-white py-3 px-6 rounded-2xl text-center text-sm font-semibold mb-12">
                    CASE STUDY: See how Lalitha Garments recovered <span className="underline decoration-yellow-400 font-bold">5.2% Net Profit</span> in 90 days!
                </div>

                {/* Hero */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full text-xs font-bold uppercase mb-4">
                        Retailer Success Story
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Lalitha Garments: Stock ka "Lafda" khatam,<br />
                        <span className="text-blue-600">Business Control shuru!</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Pehle Lalitha Garments mein sab "Andaze" (Guesswork) par chalta tha. System bolta tha stock hai, par counter par customer ko <span className="font-bold text-blue-600">"Sorry, khatam ho gaya"</span> bolna padta tha.
                    </p>
                </div>

                {/* Before Situation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center">
                    <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 hover:border-red-300 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
                            <span className="mr-2">⚠️</span> Situation Before RCA
                        </h3>
                        <ul className="space-y-4 text-slate-700">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2 font-bold">●</span>
                                <span><strong>Stock Blindness:</strong> System dikhata tha 100 piece, par galla check karo toh sirf 40 milte the.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2 font-bold">●</span>
                                <span><strong>Chori-Chakari:</strong> Unexplained shrinkage was killing 4% of total revenue.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2 font-bold">●</span>
                                <span><strong>Owner ki Tension:</strong> 24/7 store par rehna padta tha, warna dhanda nahi chalta tha.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-200">
                        <h4 className="text-center font-bold text-slate-800 mb-4">Stock Difference (Per Category)</h4>
                        <div className="relative w-full h-64">
                            <canvas ref={beforeChartRef}></canvas>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-4 italic">Red = Mismanaged Stock (The Loss Zone)</p>
                    </div>
                </div>

                {/* The Solution */}
                <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white text-center mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">How Stock Certainty System Fixed It?</h2>
                    <p className="text-blue-200 mb-10 max-w-2xl mx-auto">
                        Retail Control Architect (RCA) ne Lalitha Garments ka "Operational DNA" badal diya.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-800/40 p-6 rounded-2xl border border-blue-700">
                            <div className="text-4xl mb-3">📋</div>
                            <h4 className="font-bold mb-2">Auto-Audit</h4>
                            <p className="text-sm text-blue-100">Ab daily audit manually nahi, system se automatic hota hai. Error ki koi jagah nahi.</p>
                        </div>
                        <div className="bg-blue-800/40 p-6 rounded-2xl border border-blue-700">
                            <div className="text-4xl mb-3">🔍</div>
                            <h4 className="font-bold mb-2">Phantom Tracking</h4>
                            <p className="text-sm text-blue-100">Jo stock gayab tha, system ne usse track kiya. Chori aur damages instantly pakde gaye.</p>
                        </div>
                        <div className="bg-blue-800/40 p-6 rounded-2xl border border-blue-700">
                            <div className="text-4xl mb-3">🚀</div>
                            <h4 className="font-bold mb-2">Remote Control</h4>
                            <p className="text-sm text-blue-100">Owner ab ghar se bhi stock aur cash monitor kar sakta hai with 100% Trust.</p>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">The Impact: Numbers Don't Lie!</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center p-6 bg-white rounded-2xl border-2 border-slate-200 border-l-8 border-l-green-500 hover:shadow-lg transition-all">
                                <Target className="h-12 w-12 text-green-600 mr-4" />
                                <div>
                                    <h4 className="text-2xl font-bold text-green-700">99.8% Accuracy</h4>
                                    <p className="text-slate-600">Stock mismatch zero ho gaya.</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-2xl border-2 border-slate-200 border-l-8 border-l-blue-500 hover:shadow-lg transition-all">
                                <TrendingUp className="h-12 w-12 text-blue-600 mr-4" />
                                <div>
                                    <h4 className="text-2xl font-bold text-blue-700">+₹3,40,000 / Month</h4>
                                    <p className="text-slate-600">Paisa jo pehle "waste" ho raha tha, ab pocket mein hai.</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-white rounded-2xl border-2 border-slate-200 border-l-8 border-l-amber-500 hover:shadow-lg transition-all">
                                <Smile className="h-12 w-12 text-amber-600 mr-4" />
                                <div>
                                    <h4 className="text-2xl font-bold text-amber-700">100% Peace of Mind</h4>
                                    <p className="text-slate-600">No more daily arguments with staff.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border-2 border-slate-200">
                            <h4 className="text-center font-bold text-slate-800 mb-4">Operational Improvement Radar</h4>
                            <div className="relative w-full h-64">
                                <canvas ref={radarChartRef}></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verdict */}
                <div className="bg-slate-900 rounded-3xl p-10 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex justify-center mb-6 text-yellow-400 text-2xl">
                            ⭐ ⭐ ⭐ ⭐ ⭐
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Lalitha Garments ka Verdict:</h3>
                        <p className="text-xl italic text-slate-300 mb-8 max-w-2xl mx-auto">
                            "Pehle lagta tha ki software sirf bill banane ke liye hai... par RCA ne bataya ki software dhanda bachane ke liye hota hai. Ab hum sirf bech nahi rahe, hum <span className="text-white font-bold">CONTROL</span> kar rahe hain."
                        </p>
                        <a
                            href="#audit"
                            className="inline-block px-8 py-4 bg-green-600 rounded-xl font-bold text-lg hover:bg-green-700 transition-all cursor-pointer"
                        >
                            Start Your Own Success Story →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
