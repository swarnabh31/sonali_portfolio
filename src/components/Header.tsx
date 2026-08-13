import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ExternalLink, FileDown, Menu, X, Sparkles, Send, Gamepad2 } from 'lucide-react';

interface HeaderProps {
  onOpenPdfResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPdfResume, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Recruiter Deck', id: 'recruiter-deck' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills & Tools', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0f172a]/90 backdrop-blur-md border-b-4 border-[#84cc16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand Badge */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer group flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#84cc16] via-[#fbbf24] to-[#84cc16] p-0.5 shadow-lg shadow-[#84cc16]/20 group-hover:shadow-[#84cc16]/40 transition-all">
            <div className="w-full h-full bg-[#0f172a] rounded-[10px] flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-[#84cc16] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <span className="text-lg font-black tracking-tight text-[#f8fafc] group-hover:text-[#84cc16] transition-colors block uppercase">
              SONALI BASAK
            </span>
            <span className="text-xs font-bold text-[#fbbf24] flex items-center gap-1">
              Senior Game Artist <span className="text-[#84cc16]">•</span> 2D Sprite Animation & Art Lead
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="px-3.5 py-2 text-xs font-black uppercase tracking-wider text-slate-300 hover:text-[#84cc16] hover:bg-[#1e293b] rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Group */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={PROFILE_DATA.artstation}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 bg-[#1e293b] hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center space-x-1.5 transition-colors"
          >
            <span>ArtStation</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#fbbf24]" />
          </a>

          <button
            onClick={onOpenPdfResume}
            className="px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0f172a] bg-[#84cc16] hover:bg-[#a3e635] rounded-lg shadow-md shadow-[#84cc16]/20 flex items-center space-x-1.5 transition-all transform hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4" />
            <span>PDF Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={onOpenPdfResume}
            className="px-2.5 py-1.5 text-xs font-black uppercase tracking-wider text-[#0f172a] bg-[#84cc16] rounded-lg flex items-center space-x-1"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-[#1e293b] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left px-3 py-2 text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-[#84cc16] hover:bg-[#1e293b] rounded-lg"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <a
              href={PROFILE_DATA.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 bg-[#1e293b] border border-slate-700 rounded-lg flex items-center justify-between"
            >
              <span>View ArtStation Portfolio</span>
              <ExternalLink className="w-4 h-4 text-[#fbbf24]" />
            </a>
            <button
              onClick={() => {
                onOpenPdfResume();
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2.5 text-xs font-black uppercase tracking-wider text-[#0f172a] bg-[#84cc16] rounded-lg flex items-center justify-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official PDF Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
