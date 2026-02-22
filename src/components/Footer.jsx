import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-textMain text-white rounded-t-[3rem] px-6 md:px-24 py-16 mt-12 relative z-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                <div>
                    <div className="font-heading font-bold text-3xl tracking-tight mb-2">
                        YG.
                    </div>
                    <p className="font-body text-white/60 max-w-sm">
                        Bridging High Finance & Deep Tech. Building scalable data pipelines and financial models.
                    </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-6">
                    <div className="flex items-center gap-6">
                        <a href="https://linkedin.com/in/yg13" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/yg2005" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="mailto:yng9@rutgers.edu" className="text-white/60 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mt-4 md:mt-0">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-data text-xs font-medium text-white/80 uppercase tracking-wider">System Operational</span>
                    </div>
                </div>

            </div>

            <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-body text-sm">
                <p>© {new Date().getFullYear()} Yash Gudimalla. All rights reserved.</p>
                <div className="flex gap-6">
                    <span>Rutgers Business School</span>
                    <span>Class of 2027</span>
                </div>
            </div>
        </footer>
    );
};
