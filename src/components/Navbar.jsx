import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Mail } from 'lucide-react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
        });
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between gap-12 ${scrolled
                    ? 'bg-background/80 backdrop-blur-xl border border-textSecondary/20 shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="font-heading font-bold text-xl tracking-tight text-textMain">
                YG.
            </div>

            <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-textSecondary">
                <a href="#experience" className="hover:text-textMain transition-colors">Experience</a>
                <a href="#projects" className="hover:text-textMain transition-colors">Projects</a>
                <a href="#skills" className="hover:text-textMain transition-colors">Skills</a>
            </div>

            <a
                href="https://linkedin.com/in/yg13"
                target="_blank"
                rel="noreferrer"
                className="magnetic-btn bg-accentPrimary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accentSecondary transition-colors flex items-center gap-2"
            >
                <Linkedin size={16} />
                <span>Connect</span>
            </a>
        </nav>
    );
};
