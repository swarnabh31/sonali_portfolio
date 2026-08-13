import { PortfolioProject, ExperienceItem, EducationItem, SkillGroup } from '../types';

export const PROFILE_DATA = {
  name: 'SONALI BASAK',
  tagline: 'Senior Game Artist | Concept Artist | Art Lead',
  location: 'India',
  phone: '9701745766',
  formattedPhone: '+91 9701745766',
  email: 'sonalibasakdas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sonali-basak',
  artstation: 'https://sonali_das_basak.artstation.com/',
  totalExperienceYears: 15,
  gamingExperienceYears: 12,
  currentLevel: 'Senior Artist / Individual Contributor',
  previousLeadership: 'Art Lead (Covet Fashion, Live Mobile Games)',
  summary: 'Creative Game Artist with 15 years of experience, including 12+ years in gaming, specializing in concept art, character design, 2D animation, illustration and visual development. Experienced in both hands-on art production and leading teams across live mobile games.',
  languages: ['English', 'Hindi', 'Bengali'],
  hobbies: ['Sketching', 'Playing Games', 'Watching Movies/Series', 'Travelling', 'Singing', 'Dancing']
};

export const CORE_SKILLS_LIST = [
  'Concept Art • Character Design • 2D Animation • Visual Development • Game Art • Illustration • Storyboarding • Animatics • Sprite Sheets • Art Direction • Team Leadership • Art Reviews • Mentoring • Creative Problem Solving'
];

export const SKILL_GROUPS: SkillGroup[] = [];

export const TOOLS_LIST = [
  'Photoshop',
  'Adobe Animate',
  'After Effects',
  'AI Tools & Creative Experimentation'
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ea-pvz3',
    company: 'ELECTRONIC ARTS (EA)',
    role: 'Senior Artist / ConceptArtist - Plants vs Zombies 3',
    duration: 'Present',
    location: 'India',
    isCurrent: true,
    summary: 'Create character, plant, avatar, gameplay and deco concepts. Develop animatics, sprite sheets, portraits and 2D animation assets. Collaborate with Design, Art and Engineering teams on production and integration.',
    keyContributions: [],
    shippedTitles: ['Plants vs. Zombies 3'],
    tools: ['Photoshop', 'Adobe Animate', 'After Effects']
  },
  {
    id: 'ea-pvz2',
    company: 'ELECTRONIC ARTS (EA)',
    role: 'Art Lead / Senior Artist - Plants vs Zombies 2',
    duration: 'Earlier EA Tenure',
    location: 'India',
    isCurrent: false,
    summary: 'Led and contributed to character, plant, event and marketing art. Created concepts, illustrations and animation for live-game content. Provided art direction, reviews, mentoring and production support.',
    keyContributions: [],
    shippedTitles: ['Plants vs. Zombies 2'],
    tools: ['Photoshop', 'Adobe Animate', 'After Effects']
  },
  {
    id: 'previous-experience',
    company: 'PREVIOUS EXPERIENCE',
    role: 'Concept Artist | Senior 2D Artist | 2D Animator / Art Lead',
    duration: '15 years across games and animation',
    location: 'India',
    isCurrent: false,
    summary: '15 years across games and animation, working on character design, visual development, illustration, storyboarding and 2D animation. Worked across mobile games, animated series and entertainment projects.',
    keyContributions: [],
    shippedTitles: [],
    tools: ['Photoshop', 'Adobe Animate', 'After Effects']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Fine Arts (B.F.A.) - Gold Medalist',
    institution: 'Banaras Hindu University',
    year: '2006 – 2010',
    achievement: 'Awarded Gold Medal for academic & artistic excellence'
  },
  {
    degree: 'Diploma in 2D Animation and Digital Storyboarding',
    institution: 'Webel DQ Entertainment',
    year: '2010 – 2011'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [];

export const ARTWORKS: Array<{
  id: string;
  title: string;
  category: 'animations' | 'pngs' | ' sketches' | 'video';
  image?: string;
  video?: string;
  description?: string;
}> = [
  {
    id: 'sonali-portfolio-video',
    title: 'Sonali Portfolio Highlight Video',
    category: 'video',
    video: '/src/assets/videos/Sonali.mp4',
    description: 'Click play to watch the professional portfolio showcase'
  }
];
