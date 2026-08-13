import React from 'react';
import { PROFILE_DATA, CORE_SKILLS_LIST, TOOLS_LIST, EDUCATION } from '../data/portfolioData';
import { UserCheck, Award, Briefcase, FileText, Download, Check, Sparkles, Building2, CheckCircle } from 'lucide-react';

interface RecruiterDeckProps {
  onOpenPdfResume: () => void;
  onNavigateContact: () => void;
}

export const RecruiterDeck: React.FC<RecruiterDeckProps> = ({ onOpenPdfResume, onNavigateContact }) => {
  return (
    <section id="recruiter-deck" className="py-16 bg-[#0f172a] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="border-l-4 border-[#84cc16] pl-4">
            <div className="flex items-center space-x-2 text-[#fbbf24] mb-1">
              <UserCheck className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">Recruiter & Art Director Quick Deck</span>
            </div>
            <h2 className="text-3xl font-black text-[#84cc16] uppercase tracking-tight">Profile At-a-Glance</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1 max-w-2xl">
              Curated overview for studio hiring managers, art directors, and lead recruiters.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <button
              onClick={onOpenPdfResume}
              className="px-4 py-2 text-xs font-black uppercase tracking-wider text-[#0f172a] bg-[#84cc16] hover:bg-[#a3e635] rounded-lg flex items-center space-x-1.5 transition-all shadow-md shadow-[#84cc16]/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Printable PDF Resume</span>
            </button>
          </div>
        </div>

        {/* 3-Column Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Key Qualifications & Roles */}
          <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-700 text-[#84cc16]">
                <Briefcase className="w-4 h-4" />
                <h3 className="font-black text-[#f8fafc] text-xs uppercase tracking-wider">Key Roles & Seniority</h3>
              </div>
              <ul className="mt-4 space-y-3 text-xs text-slate-300">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold">Current Level:</strong> Senior Artist / Individual Contributor (Live Mobile Titles)
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold">Leadership Proven:</strong> Art Lead (Live Service Mobile Games, Events & Team Mentoring)
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold">Specializations:</strong> 2D Game Art, Character & Creature Design, 2D Sprite Sheets for Animation, After Effects Motion, Player Avatars & Icons
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold">Target Roles:</strong> Art Lead, Senior Concept Artist, Senior 2D Game Artist, Visual Development Lead
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Location: {PROFILE_DATA.location}</span>
              <span className="text-[#84cc16] font-bold">16 YRS EXP</span>
            </div>
          </div>

          {/* Card 2: Production Pipeline & Quality Control */}
          <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-700 text-[#fbbf24]">
                <Building2 className="w-4 h-4" />
                <h3 className="font-black text-[#f8fafc] text-xs uppercase tracking-wider">Studio Track Record</h3>
              </div>
              <div className="mt-4 space-y-3">
                <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-black text-[#f8fafc]">Electronic Arts (EA)</span>
                    <span className="text-[#84cc16] font-mono text-[10px] uppercase font-bold">Flagship Live Games</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">PvZ3 (Senior IC) & PvZ2 (Art Lead)</p>
                </div>

                <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-black text-[#f8fafc]">GLU Mobile India</span>
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Senior Concept / Lead</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Covet Fashion, Quizz Up, Ultimate Chef</p>
                </div>

                <div className="bg-[#0f172a] p-3 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-black text-[#f8fafc]">Cartoon Network Projects</span>
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Senior 2D Artist</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Adventure Time & 20 Hyper Casual Titles</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Pipeline: Brief → Unity</span>
              <span className="text-[#fbbf24] font-bold">12+ YRS GAMING</span>
            </div>
          </div>

          {/* Card 3: Academic Excellence & Core Tools */}
          <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-700 text-[#84cc16]">
                <Award className="w-4 h-4" />
                <h3 className="font-black text-[#f8fafc] text-xs uppercase tracking-wider">Education & Tool Stack</h3>
              </div>
              
              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <div className="bg-[#84cc16]/10 border border-[#84cc16]/30 p-3 rounded-xl">
                  <div className="flex items-center space-x-1 text-[#84cc16] font-black uppercase text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>B.F.A. - Gold Medalist</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-medium">Banaras Hindu University (2006 – 2010)</p>
                </div>

                <div className="text-slate-300 text-xs">
                  <strong className="text-[#fbbf24]">Diploma:</strong> 2D Animation & Storyboarding (Webel DQ)
                </div>

                <div className="pt-2">
                  <span className="text-slate-200 font-bold text-xs uppercase tracking-wider block mb-1.5">Primary Tools:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {TOOLS_LIST.map((tool) => (
                      <span key={tool} className="px-2 py-1 bg-[#0f172a] text-slate-300 rounded border border-slate-700 text-[10px] font-bold uppercase">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">{PROFILE_DATA.email}</span>
              <button 
                onClick={onNavigateContact}
                className="text-[#84cc16] font-black uppercase tracking-wider hover:underline"
              >
                Inquire Role →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
