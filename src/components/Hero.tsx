import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { FileDown, ExternalLink, Mail, Phone, MapPin, Award, CheckCircle2, Sparkles, Send, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenPdfResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPdfResume, onNavigate }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#84cc16]/10 via-[#fbbf24]/10 to-[#84cc16]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Studio Tags Ribbon */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-black uppercase tracking-wider bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16]">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#84cc16]" />
            EA Senior Artist & IC
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-black uppercase tracking-wider bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24]">
            <Award className="w-3.5 h-3.5 mr-1.5 text-[#fbbf24]" />
            Live Mobile Games Art Lead
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-[#1e293b] border border-slate-700 text-slate-300">
            16 Years Exp (12+ Gaming)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-[#1e293b] border border-slate-700 text-slate-300">
            B.F.A. Gold Medalist
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-[#84cc16] pl-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#84cc16] uppercase tracking-tighter leading-none">
                {PROFILE_DATA.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-[#fbbf24]">
                {PROFILE_DATA.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Specializing in <span className="text-white font-bold">2D game art, character design, concept development, 2D sprite sheets for animation, After Effects motion graphics, and production art</span>. Experienced in leading multidisciplinary art teams for top-charting live mobile titles and hands-on IC asset delivery at <span className="text-[#84cc16] font-bold">Electronic Arts (EA)</span> and <span className="text-[#fbbf24] font-bold">Glu Mobile</span>.
            </p>

            {/* Quick Contact & Verification Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-1.5 bg-[#1e293b] border border-slate-700 px-3 py-1.5 rounded">
                <MapPin className="w-4 h-4 text-[#84cc16]" />
                <span className="font-mono text-xs">{PROFILE_DATA.location}</span>
              </div>
              <a 
                href={`mailto:${PROFILE_DATA.email}`} 
                className="flex items-center space-x-1.5 bg-[#1e293b] border border-slate-700 hover:border-[#84cc16] px-3 py-1.5 rounded transition-colors"
              >
                <Mail className="w-4 h-4 text-[#fbbf24]" />
                <span className="font-mono text-xs">{PROFILE_DATA.email}</span>
              </a>
              <a 
                href={`tel:${PROFILE_DATA.phone}`} 
                className="flex items-center space-x-1.5 bg-[#1e293b] border border-slate-700 hover:border-[#84cc16] px-3 py-1.5 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#84cc16]" />
                <span className="font-mono text-xs">{PROFILE_DATA.formattedPhone}</span>
              </a>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPdfResume}
                className="px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#0f172a] bg-[#84cc16] hover:bg-[#a3e635] rounded-lg shadow-lg shadow-[#84cc16]/20 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3.5 text-xs font-black uppercase tracking-wider text-[#fbbf24] hover:bg-[#1e293b] rounded-lg flex items-center space-x-1.5 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Contact Sonali</span>
              </button>
            </div>
          </div>

          {/* Key Stat Cards & Featured Banner (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#84cc16]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#84cc16]/20 transition-all" />

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
                <span className="text-xs font-black uppercase tracking-widest text-[#84cc16] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#84cc16]" />
                  Studio Experience Summary
                </span>
                <span className="text-xs font-mono text-[#fbbf24]">16 YRS TOTAL</span>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0f172a] p-3.5 rounded-xl border border-slate-700/80">
                  <span className="text-3xl font-black text-[#84cc16] block">16</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Years Experience</span>
                </div>
                <div className="bg-[#0f172a] p-3.5 rounded-xl border border-slate-700/80">
                  <span className="text-3xl font-black text-[#fbbf24] block">12+</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Gaming Industry Yrs</span>
                </div>
                <div className="bg-[#0f172a] p-3.5 rounded-xl border border-slate-700/80">
                  <span className="text-lg font-black text-[#f8fafc] block">Electronic Arts</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#84cc16]">Senior IC & Art Lead</span>
                </div>
                <div className="bg-[#0f172a] p-3.5 rounded-xl border border-slate-700/80">
                  <span className="text-2xl font-black text-[#f8fafc] block">20+</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Shipped Game Titles</span>
                </div>
              </div>

              {/* Verified Links */}
              <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Profiles:</span>
                <div className="flex items-center space-x-2">
                  <a
                    href={PROFILE_DATA.artstation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#0f172a] hover:bg-slate-800 text-[#84cc16] border border-slate-700 rounded-lg transition-colors text-xs font-bold uppercase flex items-center space-x-1"
                    title="ArtStation Portfolio"
                  >
                    <span>ArtStation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={PROFILE_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#0f172a] hover:bg-slate-800 text-[#fbbf24] border border-slate-700 rounded-lg transition-colors text-xs font-bold uppercase flex items-center space-x-1"
                    title="LinkedIn Profile"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
