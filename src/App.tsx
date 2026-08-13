import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecruiterDeck } from './components/RecruiterDeck';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactForm } from './components/ContactForm';
import { PdfResumeModal } from './components/PdfResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Header */}
      <Header
        onOpenPdfResume={() => setIsPdfModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenPdfResume={() => setIsPdfModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Recruiter & Art Director Quick Deck */}
        <RecruiterDeck
          onOpenPdfResume={() => setIsPdfModalOpen(true)}
          onNavigateContact={() => handleNavigate('contact')}
        />

        {/* Professional Experience & Leadership Timeline */}
        <ExperienceTimeline />

        {/* Skills, Tools, Education & Interests Matrix */}
        <SkillsMatrix />

        {/* Integrated Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onOpenPdfResume={() => setIsPdfModalOpen(true)} />

      {/* Downloadable PDF Resume Modal */}
      <PdfResumeModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
