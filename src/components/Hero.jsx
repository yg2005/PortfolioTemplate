import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Github } from 'lucide-react';

export const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.from('.hero-badge', {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1.5)',
                delay: 1.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] flex items-center px-6 md:px-24 overflow-hidden"
        >
            {/* Dynamic Unsplash Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")' }}
            ></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>

            <div className="max-w-5xl z-10 relative mt-20 p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl">
                <div className="hero-badge inline-block px-4 py-1.5 rounded-full border border-accentPrimary/20 bg-accentPrimary/5 text-accentPrimary font-data text-sm font-medium mb-8 shadow-sm">
                    Rutgers Business School • Class of 2027
                </div>

                <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-textMain leading-[1.1] tracking-tight mb-6">
                    Bridging High Finance
                    <span className="block text-textSecondary italic font-medium mt-2">
                        & Deep Tech.
                    </span>
                </h1>

                <p className="hero-text text-lg md:text-2xl text-textSecondary max-w-2xl font-body leading-relaxed mb-12">
                    I'm Yash Gudimalla, building scalable data pipelines and financial models to turn complex data into actionable product strategy.
                </p>

                <div className="hero-text flex flex-wrap items-center gap-4">
                    <a
                        href="#projects"
                        className="magnetic-btn bg-textMain text-white px-8 py-4 rounded-full font-body font-medium flex items-center gap-2 hover:bg-textMain/90 transition-colors"
                    >
                        Explore Projects
                        <ArrowRight size={18} />
                    </a>
                    <a
                        href="https://github.com/yg2005"
                        target="_blank"
                        rel="noreferrer"
                        className="magnetic-btn bg-textSecondary/5 text-textMain px-8 py-4 rounded-full font-body font-medium flex items-center gap-2 hover:bg-textSecondary/10 transition-colors border border-textSecondary/10"
                    >
                        <Github size={18} />
                        View GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
