import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        role: "Financial Operations Analyst Intern",
        company: "Uber Technologies, Inc.",
        location: "Los Angeles, CA",
        duration: "May 2025 – Aug 2025",
        bullets: [
            "Led end-to-end analysis in SQL and Excel to recommend promo capital and cost controls, improving retention forecast accuracy 13% and weekly engagement 12%.",
            "Built Tableau and Power BI reporting on unit economics, variance, and cohort churn that influenced operations leaders and surfaced $40K in revenue opportunities.",
            "Automated financial and operational reporting with Python and SQL, standardized inputs, and reduced reporting cycle time by 10+ hours per week.",
            "Partnered with strategy, operations, and frontline teams to improve processes and authored playbooks that lifted new-user forecast accuracy 35%."
        ],
        badges: ["SQL", "Excel", "Tableau", "Power BI", "Python"]
    },
    {
        id: 2,
        role: "Operations Finance & Data Strategy Intern",
        company: "Staffally Inc.",
        location: "Princeton, NJ",
        duration: "Jun 2024 – Aug 2024",
        bullets: [
            "Built regression models and SQL and Excel drivers to forecast demand and costs, trimming training runtime 30% and lowering RMSE from 0.75 to 0.70.",
            "Delivered standardized reporting and stakeholder documentation for finance and operations leaders, accelerating time-to-decision 20% and reducing training iterations by 6."
        ],
        badges: ["Regression Modeling", "SQL", "Excel"]
    },
    {
        id: 3,
        role: "Data Analyst Intern (Accounting & Operations)",
        company: "Staffally Inc.",
        location: "Princeton, NJ",
        duration: "Jun 2023 – Aug 2023",
        bullets: [
            "Automated reconciliations and audit-ready SQL and Python pipelines across five departments, reducing processing time 30% and decreasing reporting errors 15%.",
            "Created Power BI dashboards for spend, inventory, and exceptions, recovering $45K and mitigating $8K in potential losses."
        ],
        badges: ["SQL", "Python", "Power BI", "Reconciliations"]
    }
];

export const Experience = () => {
    const [openId, setOpenId] = useState(1);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.exp-item',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    clearProps: 'transform,opacity'
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="py-24 px-6 md:px-24 bg-transparent relative z-10 overflow-hidden" ref={containerRef}>
            {/* Ambient Background Visuals */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accentPrimary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-accentSecondary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="p-3 bg-textMain rounded-2xl text-white shadow-lg shadow-textMain/20">
                        <Briefcase size={28} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-textMain tracking-tight">
                        Professional Track Record
                    </h2>
                </div>

                <div className="space-y-4">
                    {experiences.map((exp, index) => {
                        const isOpen = openId === exp.id;
                        return (
                            <div
                                key={exp.id}
                                className={`exp-item transition-all duration-300 rounded-3xl border ${isOpen ? 'border-accentPrimary/20 bg-white shadow-xl' : 'border-textSecondary/10 bg-white/80 hover:border-textSecondary/30 hover:bg-white shadow-sm'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                                    className="w-full text-left p-6 md:px-8 md:py-6 flex items-center justify-between gap-4"
                                >
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-heading font-semibold text-textMain">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-2 mt-2 font-body text-textSecondary text-sm md:text-base">
                                            <span className="font-medium text-textMain">{exp.company}</span>
                                            <span className="w-1 h-1 rounded-full bg-textSecondary/40" />
                                            <span>{exp.duration}</span>
                                            <span className="w-1 h-1 rounded-full bg-textSecondary/40" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                    <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-accentPrimary/10 text-accentPrimary' : 'bg-textSecondary/5 text-textSecondary group-hover:bg-textSecondary/10'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 md:px-8 md:pb-8">
                                        <div className="w-full h-px bg-textSecondary/10 mb-6" />

                                        <ul className="space-y-4 mb-8">
                                            {exp.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accentPrimary/50 flex-shrink-0" />
                                                    <span className="font-body text-textSecondary leading-relaxed">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.badges.map((badge, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-lg bg-textSecondary/5 text-textMain font-data text-xs border border-textSecondary/10"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
