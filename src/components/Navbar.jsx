import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Linkedin, Github, Mail, Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            }
        );
    }, []);

    const navLinks = [
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-12 ${scrolled
                    ? 'bg-background/80 backdrop-blur-xl border border-textSecondary/20 shadow-lg'
                    : 'bg-background/60 backdrop-blur-md'
                    }`}
                style={{ opacity: 1 }}
            >
                <div className="font-heading font-bold text-xl tracking-tight text-textMain whitespace-nowrap -ml-2">
                    Yash Gudimalla
                </div>

                <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-textSecondary">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="hover:text-textMain transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://linkedin.com/in/yg13"
                        target="_blank"
                        rel="noreferrer"
                        className="magnetic-btn bg-accentPrimary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accentSecondary transition-colors flex items-center gap-2"
                    >
                        <Linkedin size={16} />
                        <span className="hidden sm:inline">Connect</span>
                    </a>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-full text-textMain hover:bg-textSecondary/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-textMain/20 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setMobileOpen(false)}
                />

                {/* Panel */}
                <div
                    className={`absolute top-[88px] left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm bg-background/95 backdrop-blur-xl rounded-3xl border border-textSecondary/15 shadow-2xl p-6 transition-all duration-300 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                >
                    <div className="flex flex-col gap-1">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-4 py-3 rounded-xl text-textMain font-body font-medium hover:bg-textSecondary/5 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-textSecondary/10 flex items-center gap-4 px-4">
                        <a href="https://linkedin.com/in/yg13" target="_blank" rel="noreferrer" className="text-textSecondary hover:text-textMain transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/yg2005" target="_blank" rel="noreferrer" className="text-textSecondary hover:text-textMain transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="mailto:yng9@rutgers.edu" className="text-textSecondary hover:text-textMain transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
