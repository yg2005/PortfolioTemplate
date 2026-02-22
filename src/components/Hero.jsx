import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Github, TrendingUp, Terminal, PieChart } from 'lucide-react';

export const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text entrance animations
            gsap.fromTo('.hero-text',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.12,
                    ease: 'power3.out',
                    delay: 0.3
                }
            );

            gsap.fromTo('.hero-badge',
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.5)',
                    delay: 0.8
                }
            );

            // Floating Cards Entrance
            gsap.fromTo('.floating-card',
                { y: 100, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'back.out(1.2)',
                    delay: 0.6
                }
            );

            // Continuous Floating Animation
            const cards = gsap.utils.toArray('.floating-card');
            cards.forEach((card, i) => {
                const yOffset = i % 2 === 0 ? -15 : 15;
                const duration = 3 + (i * 0.5); // Randomize duration slightly so they float out of sync

                gsap.to(card, {
                    y: yOffset,
                    duration: duration,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: 2 // Wait for entrance animation to finish
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] flex items-center px-6 md:px-24 overflow-hidden pt-20"
        >
            {/* Ambient Background Lights */}
            <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-accentPrimary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accentSecondary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #020617 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Column: Text & CTAs (7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                    <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accentPrimary/20 bg-accentPrimary/5 text-accentPrimary font-data text-sm font-medium mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <span className="w-2 h-2 rounded-full bg-accentPrimary animate-pulse"></span>
                        Rutgers Business School • Class of 2027
                    </div>

                    <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-textMain leading-[1.1] tracking-tight mb-6">
                        Business Intelligence
                        <span className="block text-accentPrimary mt-2">
                            Meets Product Strategy.
                        </span>
                    </h1>

                    <p className="hero-text text-lg md:text-xl text-textSecondary max-w-xl font-body leading-relaxed mb-10">
                        I'm <span className="font-semibold text-textMain">Yash Gudimalla</span>, building scalable data pipelines and financial models to turn complex data into actionable product strategy.
                    </p>

                    <div className="hero-text flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="magnetic-btn group bg-textMain text-white px-8 py-4 rounded-full font-body font-medium flex items-center gap-2 hover:bg-textMain/90 transition-all hover:shadow-[0_0_20px_rgba(2,6,23,0.3)]"
                        >
                            Explore Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://github.com/yg2005"
                            target="_blank"
                            rel="noreferrer"
                            className="magnetic-btn bg-background text-textMain px-8 py-4 rounded-full font-body font-medium flex items-center gap-2 hover:bg-textSecondary/5 transition-colors border border-textSecondary/20 shadow-sm"
                        >
                            <Github size={18} />
                            View GitHub
                        </a>
                    </div>
                </div>

                {/* Right Column: Floating Visuals (5 cols) */}
                <div className="hidden lg:block lg:col-span-5 h-[600px] relative perspective-1000 preserve-3d">

                    {/* Visual 1: Finance / Alpha Gen Node */}
                    <div className="floating-card absolute top-[10%] right-[10%] w-[240px] glass-panel-deep rounded-2xl p-5 isometric-left z-30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
                                <PieChart size={16} />
                            </div>
                            <span className="font-data text-xs font-semibold uppercase tracking-wider text-textSecondary">Alpha Generation</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="font-data text-[10px] text-textSecondary">Sharpe Ratio</span>
                                <span className="font-heading font-medium text-indigo-400">2.4</span>
                            </div>
                            <div className="h-1.5 w-full bg-textSecondary/10 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[75%] rounded-full"></div>
                            </div>
                            <div className="flex justify-between items-end pt-1 border-t border-textSecondary/10">
                                <span className="font-data text-[10px] text-textSecondary">Volatility (σ)</span>
                                <span className="font-data text-[10px] font-medium text-textMain">12.4%</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual 2: Finance / Analytics Metric */}
                    <div className="floating-card absolute top-[35%] -left-[10%] w-[280px] glass-panel-deep rounded-2xl p-6 isometric-left z-20 shadow-[0_20px_40px_rgba(59,130,246,0.1)]">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="font-data text-xs font-semibold text-textSecondary uppercase tracking-wider block mb-1">User Growth</span>
                                <span className="font-heading font-bold text-3xl text-textMain">400+</span>
                            </div>
                            <div className="p-2.5 bg-green-500/10 rounded-xl text-green-500">
                                <TrendingUp size={20} />
                            </div>
                        </div>
                        <svg className="w-full h-12" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,10 L60,18 L70,5 L80,12 L90,2 L100,5" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,10 L60,18 L70,5 L80,12 L90,2 L100,5 L100,30 L0,30 Z" fill="url(#gradient-green)" opacity="0.2" />
                            <defs>
                                <linearGradient id="gradient-green" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#22c55e" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Visual 3: Strategy / Terminal Output */}
                    <div className="floating-card absolute bottom-[10%] right-[5%] w-[300px] bg-[#020617] rounded-2xl p-5 isometric-left z-10 border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="font-data text-xs leading-relaxed text-blue-400">
                            <span className="text-green-400">yg@terminal</span>
                            <span className="text-white/50"> ~ % </span>
                            run_forecast.py
                            <br /><br />
                            <span className="text-white/70">&gt; Parsing cohort data... [OK]</span><br />
                            <span className="text-white/70">&gt; Simulating unit econ... [OK]</span><br />
                            <span className="text-accentPrimary font-medium">&gt; Forecast Accuracy Lift: +20%</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
