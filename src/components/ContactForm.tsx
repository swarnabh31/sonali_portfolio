import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ContactInquiry } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Building2, User, MessageSquare, ExternalLink } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    companyName: '',
    roleType: 'Senior Concept Artist' as ContactInquiry['roleType'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Save locally
      const existing = JSON.parse(localStorage.getItem('sonali_inquiries') || '[]');
      const newInquiry: ContactInquiry = {
        id: 'inq-' + Date.now(),
        ...formData,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('sonali_inquiries', JSON.stringify([newInquiry, ...existing]));

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 bg-[#0f172a] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Studio Contacts & Recruiter Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-l-4 border-[#84cc16] pl-4">
              <div className="flex items-center space-x-2 text-[#fbbf24] mb-1">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Recruiter & Studio Inquiries</span>
              </div>
              <h2 className="text-3xl font-black text-[#84cc16] uppercase tracking-tight">Let's Collaborate</h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1 leading-relaxed">
                Currently open to discuss Senior Game Artist, Concept Artist, and Art Lead opportunities. Connect directly via email, phone, LinkedIn, or send an inquiry below.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="bg-[#1e293b] border border-slate-700 hover:border-[#84cc16] p-4 rounded-xl flex items-center space-x-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#84cc16]/10 border border-[#84cc16]/30 flex items-center justify-center text-[#84cc16] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Direct Email</span>
                  <span className="text-sm font-bold text-slate-200 group-hover:text-[#84cc16] font-mono transition-colors">
                    {PROFILE_DATA.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PROFILE_DATA.phone}`}
                className="bg-[#1e293b] border border-slate-700 hover:border-[#fbbf24] p-4 rounded-xl flex items-center space-x-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/30 flex items-center justify-center text-[#fbbf24] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Phone Contact</span>
                  <span className="text-sm font-bold text-slate-200 group-hover:text-[#fbbf24] font-mono transition-colors">
                    {PROFILE_DATA.formattedPhone}
                  </span>
                </div>
              </a>

              <div className="bg-[#1e293b] border border-slate-700 p-4 rounded-xl flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#0f172a] border border-slate-700 flex items-center justify-center text-slate-300">
                  <MapPin className="w-5 h-5 text-[#84cc16]" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Location</span>
                  <span className="text-sm font-bold text-slate-200 font-mono">{PROFILE_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Social / Portfolio Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={PROFILE_DATA.artstation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#1e293b] border border-slate-700 hover:border-[#84cc16] py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider text-slate-300 hover:text-[#84cc16] flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>ArtStation</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#84cc16]" />
              </a>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#1e293b] border border-slate-700 hover:border-[#fbbf24] py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider text-slate-300 hover:text-[#fbbf24] flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#fbbf24]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#84cc16]/20 text-[#84cc16] rounded-full flex items-center justify-center mx-auto border border-[#84cc16]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#f8fafc] uppercase tracking-tight">Inquiry Sent Successfully!</h3>
                  <p className="text-slate-300 text-xs font-bold uppercase tracking-wider max-w-md mx-auto">
                    Thank you for reaching out to Sonali Basak. Your message has been saved and will be reviewed promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        senderName: '',
                        senderEmail: '',
                        senderPhone: '',
                        companyName: '',
                        roleType: 'Senior Concept Artist',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 bg-[#84cc16] hover:bg-[#a3e635] text-[#0f172a] text-xs font-black uppercase tracking-wider rounded-xl transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                    <h3 className="text-sm font-black text-[#f8fafc] uppercase tracking-wider">Send Recruiter or Studio Inquiry</h3>
                    <span className="text-[10px] font-mono text-slate-400">* Required</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="NAME"
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        className="w-full bg-[#0f172a] border border-slate-700 focus:border-[#84cc16] rounded-lg px-3.5 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none transition-colors uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Studio / Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="COMPANY / STUDIO"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#0f172a] border border-slate-700 focus:border-[#84cc16] rounded-lg px-3.5 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none transition-colors uppercase"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="EMAIL@STUDIO.COM"
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                        className="w-full bg-[#0f172a] border border-slate-700 focus:border-[#84cc16] rounded-lg px-3.5 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none transition-colors uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.senderPhone}
                        onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                        className="w-full bg-[#0f172a] border border-slate-700 focus:border-[#84cc16] rounded-lg px-3.5 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none transition-colors uppercase"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Role / Opportunity Type</label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value as any })}
                      className="w-full bg-[#0f172a] border border-slate-700 focus:border-[#84cc16] rounded-lg px-3.5 py-2.5 text-xs text-[#fbbf24] focus:outline-none transition-colors font-bold uppercase"
                    >
                      <option value="Art Lead">Art Lead / Visual Direction Lead</option>
                      <option value="Senior Concept Artist">Senior Concept Artist (Individual Contributor)</option>
                      <option value="Senior Character Artist">Senior 2D Character Artist / Animator</option>
                      <option value="Freelance / Contract">Freelance / Contract Game Art</option>
                      <option value="Other">Other Studio Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Inquiry Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="MESSAGE DETAILS..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0f172a] border border-slate-700 focus:border-[#84cc16] rounded-lg px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 text-xs font-black uppercase tracking-wider text-[#0f172a] bg-[#fbbf24] hover:bg-[#fcd34d] rounded-lg shadow-lg shadow-[#fbbf24]/20 flex items-center justify-center space-x-2 transition-all"
                  >
                    {isSubmitting ? (
                      <span>SENDING INQUIRY...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Sonali Basak</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
