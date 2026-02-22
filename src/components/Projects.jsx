import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, LineChart, ExternalLink, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "RUTurbo - Demand Analytics",
        role: "Founder, Product & Ops Lead",
        period: "Aug 2024 – Present",
        description: "Built a free platform that improves registration access through real-time open-seat alerts and demand analytics for student planning.",
        metrics: ["Scaled to 350+ users in 1.5 months", "75% user satisfaction rate"],
        tags: ["Product Strategy", "Growth Analytics"],
        icon: <LineChart size={24} />,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: 2,
        title: "BudgetAI",
        role: "AI-Powered Budgeting Advisor",
        period: "Mar 2025 – Apr 2025",
        description: "Developed a prototype advisor that surfaces budgeting guidance and investment considerations using market and news trends.",
        metrics: ["Top 20 Project at HackPrinceton (264 submissions)"],
        tags: ["LLMs", "Financial APIs", "Prototyping"],
        icon: <Terminal size={24} />,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        id: 3,
        title: "Investment Recommendation Engine",
        role: "Predictive Modeler",
        period: "Dec 2024 – Jan 2025",
        description: "Segmented investors and forecasted outcomes using SQL and predictive modeling, automated reporting, and backtested returns.",
        metrics: ["Improved forecast accuracy 20%", "Backtested returns 10%"],
        tags: ["Python", "scikit-learn", "pandas", "SQL", "Power BI"],
        icon: <LineChart size={24} />,
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        id: 4,
        title: "Financial Fraud Insights Dashboard",
        role: "Data & BI Developer",
        period: "Oct 2024 – Dec 2024",
        description: "Built KPI reporting on exception trends and loss exposure, and flagged high-risk transactions.",
        metrics: ["Flagged 250+ risks monthly", "Supported $5K quarterly recoveries", "Saved 15+ review hours weekly"],
        tags: ["SQL", "Python", "Tableau", "Power BI"],
        icon: <ShieldAlert size={24} />,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    }
];

export const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" className="py-24 px-6 md:px-24 bg-background relative z-10" ref={containerRef}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-textMain tracking-tight mb-4">
                            Shipped Projects
                        </h2>
                        <p className="text-textSecondary text-lg max-w-xl font-body">
                            A selection of tools, platforms, and dashboards demonstrating technical depth and product intuition.
                        </p>
                    </div>
                    <a
                        href="https://github.com/yg2005"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex items-center gap-2 text-textMain hover:text-accentPrimary transition-colors font-medium font-body"
                    >
                        View GitHub Archive <ExternalLink size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card glass-panel group p-1 rounded-3xl overflow-hidden hover-lift"
                        >
                            <div className="bg-background rounded-[22px] h-full p-6 md:p-8 flex flex-col items-start relative overflow-hidden">
                                {/* Mock Terminal Header */}
                                <div className="absolute top-0 left-0 w-full h-8 bg-textSecondary/5 border-b border-textSecondary/10 flex items-center px-4 gap-1.5 z-10">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                                </div>

                                {/* Subtle gradient orb behind content */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${project.bg} blur-3xl opacity-50 transition-opacity group-hover:opacity-100 z-0`} />

                                <div className={`p-3 rounded-2xl ${project.bg} ${project.color} mb-6 mt-6 relative z-10`}>
                                    {project.icon}
                                </div>

                                <h3 className="text-2xl font-heading font-semibold text-textMain mb-2 relative z-10">{project.title}</h3>
                                <div className="font-data text-xs font-semibold text-textSecondary uppercase tracking-widest mb-6">
                                    {project.role} • {project.period}
                                </div>

                                <p className="text-textSecondary font-body leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="w-full space-y-3 mb-8">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${project.bg.replace('/10', '')}`} />
                                            <span className="font-body text-sm font-medium text-textMain">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto w-full pt-6 border-t border-textSecondary/10">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-textSecondary/5 text-textSecondary font-data text-[11px] font-medium rounded-md uppercase tracking-wide"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a
                        href="https://github.com/yg2005"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-textMain hover:text-accentPrimary transition-colors font-medium font-body"
                    >
                        View GitHub Archive <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
