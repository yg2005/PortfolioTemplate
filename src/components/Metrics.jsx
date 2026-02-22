import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, TrendingUp, Cpu, MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const containerRef = useRef(null);
    const [items, setItems] = useState([
        { id: 1, label: "Variance Analysis", value: "13% accuracy lift" },
        { id: 2, label: "Cohort Churn", value: "Surfaced $40K" },
        { id: 3, label: "Cost Forecast", value: "RMSE 0.75 → 0.70" }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems(prev => {
                const newItems = [...prev];
                const last = newItems.pop();
                newItems.unshift(last);
                return newItems;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel p-6 rounded-3xl h-full flex flex-col relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-accentPrimary/10 rounded-xl text-accentPrimary">
                    <Database size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Data-Driven Finance</h3>
            </div>
            <p className="text-textSecondary text-sm mb-6 flex-grow">
                Automating financial reporting pipelines and building complex regression models to extract actionable insights.
            </p>
            <div ref={containerRef} className="relative h-[120px] w-full mt-auto">
                {items.map((item, i) => (
                    <div
                        key={item.id}
                        className="absolute left-0 w-full p-4 rounded-xl bg-background border border-textSecondary/10 shadow-sm flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{
                            top: `${i * 12}px`,
                            transform: `scale(${1 - i * 0.05}) translateY(${i * 8}px)`,
                            opacity: 1 - i * 0.2,
                            zIndex: 10 - i
                        }}
                    >
                        <span className="font-body text-sm font-medium">{item.label}</span>
                        <span className="font-data text-accentPrimary font-semibold text-sm">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState('');
    const [fading, setFading] = useState(false);
    const fullText = "Scaled platform to 400+ users in 1.5 months. Achieved 75% satisfaction. Led cross-functional teams and guided product roadmap.";

    useEffect(() => {
        let i = 0;
        let timeout;

        const typeNext = () => {
            if (i <= fullText.length) {
                setText(fullText.slice(0, i));
                i++;
                timeout = setTimeout(typeNext, 45);
            } else {
                // Pause at end, then fade and restart
                timeout = setTimeout(() => {
                    setFading(true);
                    timeout = setTimeout(() => {
                        i = 0;
                        setText('');
                        setFading(false);
                        timeout = setTimeout(typeNext, 400);
                    }, 600);
                }, 2500);
            }
        };

        timeout = setTimeout(typeNext, 800);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="glass-panel p-6 rounded-3xl h-full flex flex-col relative group">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-accentSecondary/10 rounded-xl text-accentSecondary">
                    <TrendingUp size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Product Strategy</h3>
                <div className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-data font-medium text-green-600 uppercase tracking-wider">Live</span>
                </div>
            </div>
            <p className="text-textSecondary text-sm mb-6">
                Bridging technical development with business outcomes to build platforms students actually use.
            </p>

            <div className="mt-auto bg-textMain rounded-xl p-4 min-h-[140px] font-data text-sm text-accentPrimary/80 leading-relaxed relative">
                <div className="flex gap-1.5 mb-3 border-b border-white/10 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className={`text-white/90 transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
                    {text}
                    <span className="inline-block w-2.5 h-4 ml-1 bg-accentPrimary animate-pulse align-middle" />
                </div>
            </div>
        </div>
    );
};

const SchedulerCard = () => {
    const cursorRef = useRef(null);
    const cellRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to(cursorRef.current, {
                x: 120,
                y: 40,
                duration: 1,
                ease: "power2.inOut"
            })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(cellRef.current, { backgroundColor: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.4)', duration: 0.1 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(cursorRef.current, {
                    x: 200,
                    y: 110,
                    duration: 0.8,
                    ease: "power2.inOut",
                    delay: 0.2
                })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to('.train-btn', { scale: 0.95, backgroundColor: '#3B82F6', duration: 0.1 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to('.train-btn', { scale: 1, backgroundColor: '#020617', duration: 0.1 }, "<")
                .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
                .set(cellRef.current, { backgroundColor: 'transparent', borderColor: 'rgba(0,0,0,0.05)' })
                .set(cursorRef.current, { x: 0, y: 0, opacity: 1 });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="glass-panel p-6 rounded-3xl h-full flex flex-col relative group overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                    <Cpu size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Machine Learning</h3>
            </div>
            <p className="text-textSecondary text-sm mb-6 flex-grow">
                Developing predictive models, segmenting users, and forecasting outcomes using scikit-learn and Python.
            </p>

            <div className="mt-auto border border-textSecondary/10 bg-background/50 rounded-xl p-4 relative">
                <MousePointer2
                    ref={cursorRef}
                    className="absolute z-20 text-textMain drop-shadow-md w-5 h-5 pointer-events-none"
                    style={{ top: '20px', left: '20px' }}
                />

                <div className="grid grid-cols-4 gap-2 mb-4">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            ref={i === 5 ? cellRef : null}
                            className="h-8 rounded-md border border-textSecondary/5 bg-background transition-colors duration-200"
                        />
                    ))}
                </div>

                <div className="flex justify-between items-center border-t border-textSecondary/10 pt-3">
                    <span className="font-data text-xs text-textSecondary uppercase">Pipeline Status</span>
                    <button className="train-btn px-3 py-1.5 rounded-lg bg-textMain text-white font-data text-xs transition-colors duration-200">
                        Deploy Model
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Metrics = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.metric-card',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="metrics" className="py-24 px-6 md:px-24 bg-transparent relative z-10 overflow-hidden" ref={containerRef}>
            {/* Ambient Background Visuals */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accentSecondary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-textMain mb-4">
                        Core Competencies
                    </h2>
                    <p className="text-textSecondary text-lg max-w-2xl mx-auto font-body">
                        A precise skill set built at the intersection of quantitative analysis and software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="metric-card hover-lift">
                        <ShufflerCard />
                    </div>
                    <div className="metric-card hover-lift">
                        <TypewriterCard />
                    </div>
                    <div className="metric-card hover-lift">
                        <SchedulerCard />
                    </div>
                </div>
            </div>
        </section>
    );
};
