import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Building2, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Award, Wrench } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('ea-pvz3');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-16 bg-[#0f172a] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="border-l-4 border-[#84cc16] pl-4">
            <div className="flex items-center space-x-2 text-[#fbbf24] mb-1">
              <Briefcase className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">Career Journey & Leadership</span>
            </div>
            <h2 className="text-3xl font-black text-[#84cc16] uppercase tracking-tight">Professional Work Experience</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1 max-w-2xl">
              16 years of professional track record, including 12+ years in mobile game studios delivering AAA live game content, character design, and team art direction.
            </p>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:md:left-8 before:w-0.5 before:bg-slate-700">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-12 md:pl-16">
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute left-4 md:left-6 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    exp.isCurrent
                      ? 'bg-[#84cc16] border-[#a3e635] shadow-lg shadow-[#84cc16]/30'
                      : 'bg-[#0f172a] border-slate-600'
                  }`}
                >
                  {exp.isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a]" />}
                </div>

                {/* Experience Card */}
                <div className="bg-[#1e293b] border border-slate-700 rounded-2xl overflow-hidden transition-all shadow-lg">
                  {/* Card Header (Clickable) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 cursor-pointer hover:bg-slate-800/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-black text-[#84cc16] uppercase tracking-wider">
                          {exp.company}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-[#84cc16] text-[#0f172a] rounded">
                            PRESENT
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-black text-[#f8fafc] mt-1 uppercase tracking-tight">{exp.role}</h3>
                      <p className="text-xs font-medium text-slate-300 mt-1">{exp.summary}</p>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0">
                      <span className="text-xs font-mono font-bold text-[#fbbf24] bg-[#0f172a] px-3 py-1 rounded-lg border border-slate-700">
                        {exp.duration}
                      </span>
                      <button className="p-1.5 text-slate-400 hover:text-white rounded-lg">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Body Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-700 space-y-4 text-xs text-slate-300">
                      <div>
                        <h4 className="font-black text-[#84cc16] uppercase tracking-wider text-xs mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#84cc16]" />
                          Key Contributions & Achievements
                        </h4>
                        <ul className="space-y-2 text-slate-300 pl-1">
                          {exp.keyContributions.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] shrink-0 mt-1.5" />
                              <span className="leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Shipped Titles & Tools */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-700">
                        <div>
                          <strong className="text-white uppercase tracking-wider font-bold text-[11px] block mb-2">Shipped Game Titles & Projects:</strong>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.shippedTitles.map((title) => (
                              <span key={title} className="px-2.5 py-1 bg-[#0f172a] border border-slate-700 text-[#84cc16] font-bold rounded text-[11px] uppercase">
                                {title}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <strong className="text-white uppercase tracking-wider font-bold text-[11px] block mb-2">Software & Pipeline Tools:</strong>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tools.map((tool) => (
                              <span key={tool} className="px-2 py-1 bg-[#0f172a] text-slate-300 border border-slate-700 rounded text-[10px] font-bold uppercase">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
