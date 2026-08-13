import React from 'react';
import { CORE_SKILLS_LIST, SKILL_GROUPS, TOOLS_LIST, EDUCATION, PROFILE_DATA } from '../data/portfolioData';
import { Wrench, Award, GraduationCap, Globe2, Heart, Sparkles, CheckCircle } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-[#0f172a] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 border-l-4 border-[#84cc16] pl-4">
          <div className="flex items-center space-x-2 text-[#fbbf24] mb-1">
            <Wrench className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-widest">Artistic Capabilities & Tools</span>
          </div>
          <h2 className="text-3xl font-black text-[#84cc16] uppercase tracking-tight">Skills, Tools & Education</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1 max-w-2xl">
            Comprehensive breakdown of 2D game art competencies, software proficiency, academic gold medal achievements, languages, and creative hobbies.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Skill Groups & Categorized Expertise (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-black text-[#f8fafc] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#84cc16]" />
              Categorized Core Competencies
            </h3>

            <div className="space-y-4">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#84cc16] mb-3">
                    {group.category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {group.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Complete Core Skills Tag Cloud */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#fbbf24] mb-3">
                Full Technical Skills List
              </h4>
              <div className="flex flex-wrap gap-2">
                {CORE_SKILLS_LIST.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#0f172a] border border-slate-700 text-slate-300 rounded-lg text-xs font-bold uppercase hover:border-[#84cc16] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tools, Education, Languages, Hobbies (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tools & Software Suite */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#84cc16] mb-4 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#84cc16]" />
                Software & Engine Pipeline
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {TOOLS_LIST.map((tool) => (
                  <div
                    key={tool}
                    className="bg-[#0f172a] border border-slate-700 p-3 rounded-xl flex items-center justify-between"
                  >
                    <span className="text-xs font-black text-[#f8fafc] uppercase tracking-wider">{tool}</span>
                    <span className="w-2 h-2 rounded-full bg-[#84cc16]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#fbbf24] mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#fbbf24]" />
                Education & Gold Medal
              </h3>
              <div className="space-y-3">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-[#0f172a] border border-slate-700 p-3.5 rounded-xl">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-black text-[#f8fafc] uppercase">{edu.degree}</h4>
                      <span className="text-[10px] font-mono text-[#fbbf24] font-bold">{edu.year}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{edu.institution}</p>
                    {edu.achievement && (
                      <p className="text-[11px] text-[#84cc16] font-bold mt-1.5 flex items-center gap-1 uppercase tracking-wider">
                        <Award className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                        <span>{edu.achievement}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Hobbies */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#84cc16] mb-2 flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#84cc16]" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-1">
                  {PROFILE_DATA.languages.map((lang) => (
                    <span key={lang} className="px-2 py-0.5 bg-[#0f172a] border border-slate-700 text-[#fbbf24] rounded text-[10px] font-bold uppercase">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#fbbf24] mb-2 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#fbbf24]" />
                  Interests
                </h4>
                <div className="flex flex-wrap gap-1">
                  {PROFILE_DATA.hobbies.map((hobby) => (
                    <span key={hobby} className="px-2 py-0.5 bg-[#0f172a] border border-slate-700 text-slate-300 rounded text-[10px] font-bold uppercase">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
