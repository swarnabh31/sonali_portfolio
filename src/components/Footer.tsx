import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Gamepad2, Heart, ExternalLink, ArrowUp, FileDown } from 'lucide-react';

interface FooterProps {
  onOpenPdfResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdfResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#84cc16] p-0.5 shadow-md">
              <div className="w-full h-full bg-[#0f172a] rounded-[10px] flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-[#84cc16]" />
              </div>
            </div>
            <div>
              <span className="text-sm font-black text-[#f8fafc] block uppercase tracking-tight">SONALI BASAK</span>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Senior Game Artist • Concept Artist • Art Lead</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider">
            <a href={PROFILE_DATA.artstation} target="_blank" rel="noreferrer" className="hover:text-[#84cc16] flex items-center gap-1 transition-colors">
              <span>ArtStation</span>
              <ExternalLink className="w-3 h-3 text-[#84cc16]" />
            </a>
            <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#fbbf24] flex items-center gap-1 transition-colors">
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#fbbf24]" />
            </a>
            <button onClick={onOpenPdfResume} className="hover:text-[#84cc16] flex items-center gap-1.5 font-black text-[#84cc16]">
              <FileDown className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#1e293b] hover:bg-slate-700 text-[#f8fafc] rounded-xl border border-slate-700 transition-colors flex items-center space-x-1"
          >
            <ArrowUp className="w-4 h-4 text-[#84cc16]" />
            <span className="text-[11px] font-black uppercase tracking-wider">Top</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 font-medium">
          <p>© {new Date().getFullYear()} Sonali Basak. All Rights Reserved. Plants vs. Zombies is a trademark of Electronic Arts Inc.</p>
          <p className="flex items-center gap-1 font-bold text-[#fbbf24] uppercase tracking-wider">
            Crafted for Recruiters, Art Leads & Art Directors
          </p>
        </div>
      </div>
    </footer>
  );
};
