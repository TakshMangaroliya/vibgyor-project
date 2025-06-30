import React, { useEffect, useState } from 'react';
import { Crown, Star, Heart, Clock, Globe } from 'lucide-react';

function Visionary() {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({ years: 0, weddings: 0, countries: 0 });

    useEffect(() => {
        setIsVisible(true);

        // Animate counters
        const animateCounter = (target, setter, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setter(target);
                    clearInterval(timer);
                } else {
                    setter(Math.floor(start));
                }
            }, 16);
        };

        setTimeout(() => {
            animateCounter(15, (value) => setCounters(prev => ({ ...prev, years: value })));
            animateCounter(500, (value) => setCounters(prev => ({ ...prev, weddings: value })));
            animateCounter(50, (value) => setCounters(prev => ({ ...prev, countries: value })));
        }, 500);
    }, []);

    return (
        <div className="min-h-screen bg-[#FFF6D5] overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-[#9B6B6B] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-[#EB6C20] rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#E44B2D] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#C87C38] rounded-full opacity-20 animate-bounce"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 pt-8">
                <div className="flex items-center justify-center mb-8">
                    <Crown className="w-8 h-8 text-[#3A2F25] mr-3" />
                    <h1 className="text-1.5xl font-bold bg-gradient-to-r from-[#EB6C20] to-[#E44B2D] bg-clip-text text-transparent">
                        MEET OUR VISIONARY
                    </h1>
                    <Crown className="w-8 h-8 text-[#3A2F25] ml-3" />
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    {/* Left Side - Circular Design */}
                    <div className="relative flex items-center justify-center">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            {/* Outer Gradient Ring */}
                            <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-[#EB6C20] via-[#E44B2D] to-[#F7931E] p-2 animate-spin-slow">
                                <div className="w-full h-full rounded-full bg-[#FFF6D5] flex items-center justify-center">
                                    {/* Inner Content */}
                                    <div className="text-center">
                                        <div className="text-6xl font-bold bg-gradient-to-r from-[#3A2F25] to-[#000000] bg-clip-text text-transparent mb-4">
                                            AS
                                        </div>
                                        <Crown className="w-12 h-12 text-[#3A2F25] mx-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute top-4 left-4 w-12 h-12 bg-[#EB6C20] rounded-full flex items-center justify-center animate-float">
                                <Crown className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute bottom-8 left-0 w-12 h-12 bg-[#F7931E] rounded-full flex items-center justify-center animate-float-delayed">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                        {/* Title Section */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Crown className="w-8 h-8 text-[#3A2F25]" />
                                <h2 className="text-4xl font-bold text-[#3A2F25]">Mr. Abhishek Shukla</h2>
                            </div>
                            <p className="text-xl text-[#E44B2D] font-semibold">Founder & Visionary</p>
                        </div>

                        {/* Description */}
                        <div className="space-y-6 text-[#3A2F25] leading-relaxed">
                            <p className="text-lg">
                                With <span className="font-semibold text-[#EB6C20]">15+ years of experience</span> and expertise here is the
                                <span className="font-semibold text-[#E44B2D]"> V.E.C. (Vibgyor Events and Concepts)</span> most trusted by flocks all over with scrupulously delivered more than best to make the occasion indelible for each and every one celebrating moments.
                            </p>
                            <p className="text-lg">
                                With his undying spirit and guidance hundreds of wedding across the globe took place (of course lot more to be added.)
                            </p>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-6 py-8">
                            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#9B6B6B]/20">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#EB6C20] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#EB6C20] mb-1">{counters.years}+</div>
                                <div className="text-sm text-[#3A2F25] uppercase tracking-wide">Years Experience</div>
                            </div>

                            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#9B6B6B]/20">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#E44B2D] to-[#EB6C20] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#E44B2D] mb-1">{counters.weddings}+</div>
                                <div className="text-sm text-[#3A2F25] uppercase tracking-wide">Weddings</div>
                            </div>

                            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#9B6B6B]/20">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#F7931E] to-[#FFC200] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#C87C38] mb-1">{counters.countries}+</div>
                                <div className="text-sm text-[#3A2F25] uppercase tracking-wide">Countries</div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#EB6C20] to-[#E44B2D] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 mt-[-25px]">
                                <span className="relative z-10">Learn More About Our Journey</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F7931E] to-[#C87C38] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Visionary;