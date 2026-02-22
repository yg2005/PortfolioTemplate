import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, LineChart, ExternalLink, ShieldAlert, BookOpen, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "RUTurbo - Demand Analytics",
        role: "Founder, Product & Ops Lead",
        period: "Aug 2024 – Present",
        description: "Built a free platform that improves registration access through real-time open-seat alerts and demand analytics for student planning.",
        metrics: ["Scaled to 400+ users in 1.5 months", "75% user satisfaction rate"],
        tags: ["Product Strategy", "Growth Analytics", "Full-Stack"],
        icon: <LineChart size={24} />,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        dotColor: "bg-blue-500"
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
        bg: "bg-purple-500/10",
        dotColor: "bg-purple-500"
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
        bg: "bg-green-500/10",
        dotColor: "bg-green-500"
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
        bg: "bg-orange-500/10",
        dotColor: "bg-orange-500"
    },
    {
        id: 5,
        title: "Black-Scholes Options Pricing Tool",
        role: "Educational Web App",
        period: "Aug 2024 – Nov 2024",
        description: "Built an interactive learning tool explaining options pricing with clear inputs and outputs to reduce barriers to financial literacy.",
        metrics: ["Interactive pricing calculator", "Simplified intuition for complex derivatives"],
        tags: ["JavaScript", "Finance", "Web App"],
        icon: <BookOpen size={24} />,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        dotColor: "bg-cyan-500"
    },
    {
        id: 6,
        title: "Finance KPI Dashboard",
        role: "Analytics & Visualization",
        period: "Nov 2024 – Jan 2025",
        description: "Built a KPI dashboard comparing company performance across metrics and summarizing stock performance with clear, decision-oriented insights.",
        metrics: ["Multi-metric company comparison", "Decision-oriented stock summaries"],
        tags: ["Tableau", "Power BI", "Excel", "Analytics"],
        icon: <BarChart3 size={24} />,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        dotColor: "bg-indigo-500"
    }
];

export const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
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
        <section id="projects" className="py-24 px-6 md:px-24 bg-transparent relative z-10 overflow-hidden" ref={containerRef}>
            {/* Ambient Background Visuals */}
            <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="max-w-6xl mx-auto relative z-10">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card glass-panel group p-1 rounded-3xl overflow-hidden hover-lift"
                        >
                            <div className="bg-background rounded-[22px] h-full p-6 flex flex-col items-start relative overflow-hidden">
                                {/* Mock Terminal Header */}
                                <div className="absolute top-0 left-0 w-full h-8 bg-textSecondary/5 border-b border-textSecondary/10 flex items-center px-4 gap-1.5 z-10">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                                </div>

                                {/* Subtle gradient orb behind content */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${project.bg} blur-3xl opacity-50 transition-opacity group-hover:opacity-100 z-0`} />

                                <div className={`p-3 rounded-2xl ${project.bg} ${project.color} mb-5 mt-6 relative z-10`}>
                                    {project.icon}
                                </div>

                                <h3 className="text-xl font-heading font-semibold text-textMain mb-1.5 relative z-10">{project.title}</h3>
                                <div className="font-data text-[10px] font-semibold text-textSecondary uppercase tracking-widest mb-4">
                                    {project.role} • {project.period}
                                </div>

                                <p className="text-textSecondary font-body text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="w-full space-y-2 mb-6">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${project.dotColor} flex-shrink-0`} />
                                            <span className="font-body text-xs font-medium text-textMain">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto w-full pt-4 border-t border-textSecondary/10">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-textSecondary/5 text-textSecondary font-data text-[10px] font-medium rounded-md uppercase tracking-wide"
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
