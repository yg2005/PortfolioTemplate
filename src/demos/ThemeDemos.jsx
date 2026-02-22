import React from 'react';
import { Hero } from '../components/Hero';

const themes = [
    {
        name: "Abstract Signature Blue",
        path: "/demos/abstract-blue",
        colors: {
            '--color-text-main': '#020617',
            '--color-text-secondary': '#64748B',
            '--color-accent-primary': '#3B82F6', // The exact blue from the main site
            '--color-accent-secondary': '#6366F1'
        },
        backgroundStyle: {
            // Complex abstract gradient using the signature blue
            background: `
                radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.15), transparent 40%),
                radial-gradient(circle at 85% 20%, rgba(59, 130, 246, 0.2), transparent 45%),
                radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.1), transparent 50%),
                linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)
            `,
            backgroundAttachment: 'fixed'
        },
        description: "An abstract, multi-directional gradient using the signature brand blue on a crisp silver/white canvas."
    }
];

export const ThemeDemos = () => {
    const currentPath = window.location.pathname;
    const activeTheme = themes.find(t => t.path === currentPath);

    if (!activeTheme) {
        return (
            <div className="min-h-screen bg-slate-50 text-slate-900 p-12 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)' }}>
                <h1 className="text-4xl font-bold mb-8">Theme Demo</h1>
                <div className="grid grid-cols-1 gap-6 max-w-xl w-full">
                    {themes.map(theme => (
                        <a
                            key={theme.name}
                            href={theme.path}
                            className="p-8 rounded-2xl border border-sky-200 hover:border-sky-400 transition-colors bg-white/50 backdrop-blur-md shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{theme.name}</h2>
                            <p className="text-slate-600 mb-6">{theme.description}</p>
                            <div className="flex gap-2 h-12 w-full rounded-xl overflow-hidden" style={theme.backgroundStyle}>
                                {/* Preview block of the gradient */}
                            </div>
                        </a>
                    ))}
                </div>
                <a href="/" className="mt-12 text-sky-600 hover:underline">← Back to Main Portfolio</a>
            </div>
        );
    }

    return (
        <div
            style={{ ...activeTheme.colors, ...activeTheme.backgroundStyle }}
            className="min-h-screen text-textMain transition-colors duration-500 relative"
        >

            {/* Demo Header Overlay */}
            <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md text-slate-800 p-3 flex justify-between items-center z-[10000] border-b border-slate-200 text-sm font-mono shadow-sm">
                <div>
                    <span className="opacity-50 mr-2">Previewing:</span>
                    <strong>{activeTheme.name}</strong>
                </div>
                <div className="flex gap-4">
                    <a href="/demos" className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded transition-colors">View Selection</a>
                    <a href="/" className="px-3 py-1 bg-sky-100 text-sky-700 hover:bg-sky-200 rounded transition-colors">Back to Original</a>
                </div>
            </div>

            {/* The actual Hero component rendered with scoped CSS variables */}
            <div className="pt-12">
                <Hero />
            </div>

        </div>
    );
};
