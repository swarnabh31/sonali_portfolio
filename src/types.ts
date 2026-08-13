export interface ProjectDeliverable {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  gameTitle: string;
  studio: string;
  role: string;
  category: 'character' | 'plant' | 'avatar' | 'animation' | 'event' | 'all';
  tags: string[];
  heroImage: string;
  conceptImages?: string[];
  description: string;
  pipelineDetails: {
    brief: string;
    conceptPhase: string;
    production: string;
    animationAndIntegration: string;
  };
  deliverables: string[];
  toolsUsed: string[];
  featured?: boolean;
  spriteFrames?: number;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  isCurrent?: boolean;
  summary: string;
  keyContributions: string[];
  shippedTitles: string[];
  tools: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  achievement?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ContactInquiry {
  id: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  companyName: string;
  roleType: 'Art Lead' | 'Senior Character Artist' | 'Senior Concept Artist' | 'Freelance / Contract' | 'Other';
  message: string;
  createdAt: string;
}
