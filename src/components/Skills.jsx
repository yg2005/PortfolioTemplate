import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
    {
        title: "Finance & Operations",
        skills: ["Variance Analysis", "Unit Economics", "Budgeting & Forecasting", "Reconciliations", "Cost Reduction", "Process Improvement"]
    },
    {
        title: "Tools & Technologies",
        skills: ["SQL", "Python", "Tableau", "Power BI", "Excel", "Java", "JavaScript", "React", "R", "Jupyter", "Snowflake"]
    },
    {
        title: "Analytics & Strategy",
        skills: ["A/B Testing", "Cohort Analysis", "Churn Modeling", "Reporting Automation", "Cross-Functional Leadership"]
    }
];

const certifications = [
    "Bloomberg Market Concepts (BMC)",
    "Databricks Generative AI Fundamentals",
    "NVIDIA Data Analytics Certificate",
    "Forage: JPMorgan Quant Research",
    "AmplifyME Investment Banking Simulation"
];

export const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skill-chip', {
                scrollTrigger: {
                    trigger: '.skills-grid',
                    start: 'top 85%',
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                stagger: 0.03,
                ease: 'back.out(1.5)'
            });

            gsap.from('.cert-item', {
                scrollTrigger: {
                    trigger: '.certs-list',
                    start: 'top 85%',
                },
                x: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="py-24 px-6 md:px-24 bg-transparent relative z-10" ref={containerRef}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

                <div className="lg:col-span-2">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-textMain tracking-tight mb-12">
                        Technical Stack
                    </h2>

                    <div className="skills-grid space-y-12">
                        {skillCategories.map((cat, idx) => (
                            <div key={idx}>
                                <h3 className="font-heading font-semibold text-lg text-textMain mb-4">{cat.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {cat.skills.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="skill-chip px-4 py-2 rounded-xl bg-white shadow-sm border border-textSecondary/10 text-textSecondary font-body text-sm font-medium hover:shadow-md transition-[box-shadow,color,background-color] duration-300 cursor-default"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-textMain tracking-tight mb-12">
                        Certifications
                    </h2>

                    <ul className="certs-list space-y-6">
                        {certifications.map((cert, i) => (
                            <li key={i} className="cert-item flex items-center gap-4 group p-4 bg-white shadow-sm border border-textSecondary/10 rounded-2xl hover:shadow-md transition-[box-shadow,color,background-color] duration-300">
                                <div className="w-2.5 h-2.5 rounded-full bg-accentPrimary/40 transition-colors group-hover:bg-accentPrimary flex-shrink-0" />
                                <span className="font-body font-medium text-textSecondary group-hover:text-textMain transition-colors">{cert}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};
