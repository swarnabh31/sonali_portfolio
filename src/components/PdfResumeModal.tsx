import React, { useState } from 'react';
import { PROFILE_DATA, CORE_SKILLS_LIST, TOOLS_LIST, EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Printer, Copy, Check, X, Download, FileText, Loader2, Sun, Moon, FileCode } from 'lucide-react';
import { generatePdfResume, PdfTheme } from '../utils/generatePdfResume';

interface PdfResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfResumeModal: React.FC<PdfResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [activeTheme, setActiveTheme] = useState<PdfTheme>('light');

  if (!isOpen) return null;

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClose();
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.print();
  };

  const handleDownloadPdf = (e: React.MouseEvent, themeToDownload: PdfTheme = activeTheme) => {
    e.preventDefault();
    e.stopPropagation();

    setIsGeneratingPdf(true);
    setActiveTheme(themeToDownload);

    setTimeout(() => {
      try {
        generatePdfResume(themeToDownload);
      } catch (error) {
        console.error('PDF generation error:', error);
      } finally {
        setIsGeneratingPdf(false);
      }
    }, 100);
  };

  const plainTextResume = `
${PROFILE_DATA.name}
${PROFILE_DATA.tagline}
Location: ${PROFILE_DATA.location} | Phone: ${PROFILE_DATA.formattedPhone} | Email: ${PROFILE_DATA.email}
LinkedIn: ${PROFILE_DATA.linkedin} | ArtStation: ${PROFILE_DATA.artstation}

==================================================
PROFESSIONAL SUMMARY
==================================================
${PROFILE_DATA.summary}

==================================================
CORE SKILLS
==================================================
${CORE_SKILLS_LIST.map((s) => `• ${s}`).join('\n')}

TOOLS: ${TOOLS_LIST.join(' | ')}

==================================================
PROFESSIONAL EXPERIENCE
==================================================
${EXPERIENCES.map(
  (exp) => `
${exp.company}
${exp.role}
${exp.location} | ${exp.duration}
Summary: ${exp.summary}
Key Contributions:
${exp.keyContributions.map((c) => `  - ${c}`).join('\n')}
`
).join('\n')}

==================================================
EDUCATION
==================================================
${EDUCATION.map((e) => `• ${e.degree} — ${e.institution} (${e.year})${e.achievement ? ` [${e.achievement}]` : ''}`).join('\n')}

Languages: ${PROFILE_DATA.languages.join(', ')}
Hobbies: ${PROFILE_DATA.hobbies.join(', ')}
Total Experience: ${PROFILE_DATA.totalExperienceYears} Years (12+ Years Gaming)
`.trim();

  const handleCopyText = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const blob = new Blob([plainTextResume], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sonali_Basak_Resume.txt';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 500);
  };

  const isDark = activeTheme === 'dark';

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0f172a]/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static print:inset-auto"
      onClick={handleClose}
    >
      {/* Container */}
      <div 
        className="bg-[#1e293b] border border-slate-700 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none print:w-full print:bg-white print:text-black"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Modal Toolbar (Hidden in Print) */}
        <div className="px-6 py-4 bg-[#0f172a] border-b border-slate-700 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center space-x-2 text-[#84cc16]">
            <FileText className="w-5 h-5 text-[#84cc16]" />
            <div>
              <h3 className="font-black text-[#f8fafc] text-base uppercase tracking-tight">Printable & Downloadable PDF Resume</h3>
              <p className="text-xs font-bold text-[#fbbf24] uppercase tracking-wider">Select Theme & Export Official Studio Resume</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-wrap">
            {/* Theme Toggle Pill */}
            <div className="flex items-center bg-[#1e293b] border border-slate-700 rounded-lg p-0.5 mr-1">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveTheme('light');
                }}
                className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md flex items-center space-x-1 transition-all cursor-pointer ${
                  activeTheme === 'light'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveTheme('dark');
                }}
                className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md flex items-center space-x-1 transition-all cursor-pointer ${
                  activeTheme === 'dark'
                    ? 'bg-[#84cc16] text-[#0f172a] shadow-sm font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-slate-900" />
                <span>Dark</span>
              </button>
            </div>

            {/* Quick Theme Download Buttons */}
            <button
              type="button"
              onClick={(e) => handleDownloadPdf(e, 'light')}
              disabled={isGeneratingPdf}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-black uppercase tracking-wider rounded-lg flex items-center space-x-1 transition-all shadow-md disabled:opacity-50 cursor-pointer"
            >
              {isGeneratingPdf && activeTheme === 'light' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-900" />
              ) : (
                <Download className="w-3.5 h-3.5 text-slate-900" />
              )}
              <span>Light PDF</span>
            </button>

            <button
              type="button"
              onClick={(e) => handleDownloadPdf(e, 'dark')}
              disabled={isGeneratingPdf}
              className="px-3 py-1.5 bg-[#84cc16] hover:bg-[#a3e635] text-[#0f172a] text-xs font-black uppercase tracking-wider rounded-lg flex items-center space-x-1 transition-all shadow-md disabled:opacity-50 cursor-pointer"
            >
              {isGeneratingPdf && activeTheme === 'dark' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0f172a]" />
              ) : (
                <Download className="w-3.5 h-3.5 text-[#0f172a]" />
              )}
              <span>Dark PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadTxt}
              className="px-2.5 py-1.5 bg-[#0f172a] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
              title="Download plain text file"
            >
              <FileCode className="w-3.5 h-3.5 text-sky-400" />
              <span>TXT</span>
            </button>

            <button
              type="button"
              onClick={handleCopyText}
              className="px-2.5 py-1.5 bg-[#0f172a] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
              title="Copy plain text to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#84cc16]" /> : <Copy className="w-3.5 h-3.5 text-[#fbbf24]" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="p-1.5 bg-[#0f172a] hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print Dialog"
            >
              <Printer className="w-4 h-4 text-[#fbbf24]" />
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet (Styled dynamically for Screen & Export) */}
        <div 
          id="resume-pdf-content"
          className={`p-6 sm:p-10 overflow-y-auto flex-1 space-y-6 text-sm font-sans transition-colors duration-200 print:bg-white print:text-black print:p-0 print:overflow-visible ${
            isDark 
              ? 'bg-[#0f172a] text-slate-200' 
              : 'bg-white text-slate-900'
          }`}
        >
          
          {/* Header Block */}
          <div className={`border-b pb-5 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
            <h1 className={`text-3xl sm:text-4xl font-black tracking-tight uppercase ${isDark ? 'text-[#84cc16]' : 'text-slate-900 print:text-black'}`}>
              {PROFILE_DATA.name}
            </h1>
            <p className={`text-sm font-black uppercase tracking-widest mt-1 ${isDark ? 'text-[#fbbf24]' : 'text-[#65a30d] print:text-gray-800'}`}>
              {PROFILE_DATA.tagline}
            </p>

            <div className={`mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono font-bold ${isDark ? 'text-slate-300' : 'text-slate-600 print:text-gray-700'}`}>
              <span>{PROFILE_DATA.location}</span>
              <span>•</span>
              <span>{PROFILE_DATA.formattedPhone}</span>
              <span>•</span>
              <span>{PROFILE_DATA.email}</span>
              <span>•</span>
              <a 
                href={PROFILE_DATA.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                onClick={(e) => e.stopPropagation()}
                className={`underline print:no-underline print:text-gray-700 ${isDark ? 'text-[#84cc16]' : 'text-slate-800'}`}
              >
                LinkedIn
              </a>
              <span>•</span>
              <a 
                href={PROFILE_DATA.artstation} 
                target="_blank" 
                rel="noreferrer" 
                onClick={(e) => e.stopPropagation()}
                className={`underline print:no-underline print:text-gray-700 ${isDark ? 'text-[#fbbf24]' : 'text-slate-800'}`}
              >
                ArtStation
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className={`text-xs font-black uppercase tracking-widest border-b pb-1 mb-2 ${isDark ? 'text-[#84cc16] border-slate-700' : 'text-[#65a30d] border-slate-300 print:text-gray-900'}`}>
              PROFESSIONAL SUMMARY
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium ${isDark ? 'text-slate-300' : 'text-slate-800 print:text-gray-800'}`}>
              {PROFILE_DATA.summary}
            </p>
          </div>

          {/* Core Skills & Tools */}
          <div>
            <h2 className={`text-xs font-black uppercase tracking-widest border-b pb-1 mb-2 ${isDark ? 'text-[#84cc16] border-slate-700' : 'text-[#65a30d] border-slate-300 print:text-gray-900'}`}>
              CORE SKILLS & TOOLS
            </h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-800 print:text-gray-800'}`}>
              <ul className="space-y-1">
                {CORE_SKILLS_LIST.slice(0, 10).map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
              <ul className="space-y-1">
                {CORE_SKILLS_LIST.slice(10).map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className={`mt-2 text-xs font-mono font-bold uppercase ${isDark ? 'text-[#fbbf24]' : 'text-amber-800 print:text-gray-900'}`}>
              <strong>TOOLS:</strong> {TOOLS_LIST.join(' | ')}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className={`text-xs font-black uppercase tracking-widest border-b pb-1 mb-3 ${isDark ? 'text-[#84cc16] border-slate-700' : 'text-[#65a30d] border-slate-300 print:text-gray-900'}`}>
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className={`font-black text-sm uppercase ${isDark ? 'text-white' : 'text-slate-900 print:text-black'}`}>
                      {exp.company} — <span className={isDark ? 'text-[#fbbf24]' : 'text-amber-800 print:text-gray-800'}>{exp.role}</span>
                    </h3>
                    <span className={`text-xs font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-600 print:text-gray-600'}`}>
                      {exp.location} | {exp.duration}
                    </span>
                  </div>
                  <p className={`text-xs italic font-medium ${isDark ? 'text-slate-400' : 'text-slate-600 print:text-gray-700'}`}>{exp.summary}</p>
                  
                  <ul className={`list-disc list-inside text-xs space-y-0.5 pt-1 pl-1 font-medium ${isDark ? 'text-slate-300' : 'text-slate-800 print:text-gray-800'}`}>
                    {exp.keyContributions.map((c, i) => (
                      <li key={i} className="leading-snug">{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Personal */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 border-t pt-4 ${isDark ? 'border-slate-700' : 'border-slate-300 print:border-gray-300'}`}>
            <div>
              <h2 className={`text-xs font-black uppercase tracking-widest mb-2 ${isDark ? 'text-[#84cc16]' : 'text-[#65a30d] print:text-gray-900'}`}>
                EDUCATION
              </h2>
              <div className={`space-y-2 text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-800 print:text-gray-800'}`}>
                {EDUCATION.map((edu, idx) => (
                  <div key={idx}>
                    <strong className={isDark ? 'text-white' : 'text-slate-900 print:text-black uppercase'}>{edu.degree}</strong>
                    <div className={isDark ? 'text-slate-400' : 'text-slate-600 print:text-gray-700'}>{edu.institution} | {edu.year}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`text-xs font-black uppercase tracking-widest mb-2 ${isDark ? 'text-[#84cc16]' : 'text-[#65a30d] print:text-gray-900'}`}>
                ADDITIONAL INFORMATION
              </h2>
              <div className={`text-xs space-y-1 font-medium ${isDark ? 'text-slate-300' : 'text-slate-800 print:text-gray-800'}`}>
                <p><strong>Total Experience:</strong> 16 years (12+ years in gaming)</p>
                <p><strong>Specialization:</strong> 2D Game Art | Concept Art | Character Design | Animation</p>
                <p><strong>Languages:</strong> {PROFILE_DATA.languages.join(', ')}</p>
                <p><strong>Hobbies:</strong> {PROFILE_DATA.hobbies.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Print Styles Injection */}
        <style>{`
          @media print {
            body {
              background: white !important;
              color: black !important;
            }
            header, footer, nav, button {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};



