import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Send, Linkedin, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-content',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out'
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="py-32 px-6 md:px-24 bg-transparent relative z-10 overflow-hidden" ref={containerRef}>
            {/* Ambient gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accentPrimary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="contact-content inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accentPrimary/20 bg-accentPrimary/5 text-accentPrimary font-data text-sm font-medium mb-8">
                    <Mail size={14} />
                    Open to Opportunities
                </div>

                <h2 className="contact-content text-4xl md:text-6xl font-heading font-bold text-textMain tracking-tight mb-6">
                    Let's Connect.
                </h2>

                <p className="contact-content text-textSecondary text-lg md:text-xl font-body leading-relaxed max-w-xl mx-auto mb-12">
                    Whether it's a new internship, a collaborative project, or just a conversation about finance and tech — I'd love to hear from you.
                </p>

                <div className="contact-content flex flex-wrap items-center justify-center gap-4 mb-16">
                    <a
                        href="mailto:yng9@rutgers.edu"
                        className="magnetic-btn group bg-textMain text-white px-8 py-4 rounded-full font-body font-medium flex items-center gap-3 hover:bg-textMain/90 transition-all hover:shadow-[0_0_30px_rgba(2,6,23,0.2)]"
                    >
                        <Send size={18} />
                        Send an Email
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yg13"
                        target="_blank"
                        rel="noreferrer"
                        className="magnetic-btn bg-accentPrimary/10 text-accentPrimary px-8 py-4 rounded-full font-body font-medium flex items-center gap-2 hover:bg-accentPrimary/20 transition-colors border border-accentPrimary/20"
                    >
                        <Linkedin size={18} />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/yg2005"
                        target="_blank"
                        rel="noreferrer"
                        className="magnetic-btn bg-background text-textMain px-8 py-4 rounded-full font-body font-medium flex items-center gap-2 hover:bg-textSecondary/5 transition-colors border border-textSecondary/20 shadow-sm"
                    >
                        <Github size={18} />
                        GitHub
                    </a>
                </div>

                <div className="contact-content flex items-center justify-center gap-8 text-textSecondary font-data text-sm">
                    <span>📍 Princeton, NJ</span>
                    <span className="w-1 h-1 rounded-full bg-textSecondary/40" />
                    <span>📞 609-721-8717</span>
                    <span className="w-1 h-1 rounded-full bg-textSecondary/40" />
                    <span>📧 yng9@rutgers.edu</span>
                </div>
            </div>
        </section>
    );
};
