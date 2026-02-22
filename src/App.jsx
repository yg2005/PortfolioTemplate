import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global animations or scroll triggers can be registered here
    }, appRef);

    // Refresh ScrollTriggers after elements (like fonts and images) finish rendering
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen relative overflow-x-hidden selection:bg-accentPrimary/20 selection:text-textMain">
      {/* SVG Noise Filter Component */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      <div className="noise-overlay" style={{ filter: 'url(#noiseFilter)' }}></div>

      <Navbar />
      <Hero />
      <Metrics />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
