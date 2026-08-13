import { PortfolioProject, ExperienceItem, EducationItem, SkillGroup } from '../types';

const videoPath = new URL('../assets/videos/Sonali.mp4', import.meta.url).href;

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
    keyContributions: [
      'Lead character design and visual development for PvZ3',
      'Develop concept art for plants, characters, zombies, and gameplay elements',
      'Create animatics and sprite sheets for game asset integration'
    ],
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
    keyContributions: [
      'Art Lead for Plants vs Zombies 2 - team management and direction',
      'Art direction and mentoring for junior artists',
      'Created concept art for characters, events, and marketing materials'
    ],
    shippedTitles: ['Plants vs. Zombies 2'],
    tools: ['Photoshop', 'Adobe Animate', 'After Effects']
  },
  {
    id: 'glu-mobile',
    company: 'GLU MOBILE INDIA',
    role: 'Senior Concept Artist / Team Lead',
    duration: '2016 – Present (Prior)',
    location: 'India',
    isCurrent: false,
    summary: 'Spearheaded character design, prop design, and team leadership across popular live mobile game titles.',
    keyContributions: [
      'Team Lead for Covet Fashion - Design art assets and event banners',
      'Character level design and Animation for Quizz Up',
      'Characters, Props, Event Banners Design for Ultimate Chef'
    ],
    shippedTitles: ['Covet Fashion', 'Quizz Up', 'Ultimate Chef'],
    tools: ['Photoshop', 'Adobe Animate', 'After Effects']
  },
  {
    id: 'purple-talk',
    company: 'PURPLE TALK INDIA PVT LTD',
    role: 'Senior 2D Artist',
    duration: '2015 – 2016',
    location: 'India',
    isCurrent: false,
    summary: 'Delivered character designs, background art, and full asset production for Cartoon Network mobile games.',
    keyContributions: [
      'Adventure Time - Wizard Battle Game: Characters, Background and Animation',
      'Cartoon Network - Mini Games: All Art assets for 20 Hyper casual games'
    ],
    shippedTitles: ['Adventure Time: Wizard Battle Game', 'Cartoon Network 20 Hyper Casual Games'],
    tools: ['Photoshop', 'Flash/Adobe Animate', 'Sketchbook Pro', 'After Effects']
  },
  {
    id: 'rudra-masta',
    company: 'RUDRA MASTA (Animation Studio)',
    role: 'Classical Animator and Pre-Production Artist',
    duration: '2013 – 2015',
    location: 'India',
    isCurrent: false,
    summary: 'Pre-production art, layout design, and traditional animation for internationally recognized animated series and films.',
    keyContributions: [
      'Bat Pat Animation series - Layout and Traditional Animation',
      'Lilo and Stitch Anime Movie - Traditional Animation',
      'Lego Friends - Concept Art, Storyboard and layout'
    ],
    shippedTitles: ['Bat Pat Series', 'Lilo and Stitch Anime', 'Lego Friends'],
    tools: ['After Effects', 'Toonboom Storyboard', 'Photoshop']
  },
  {
    id: 'emboss-animation',
    company: 'EMBOSS ANIMATION STUDIO',
    role: '2D Animator / Supervisor',
    duration: '2011 – 2013',
    location: 'India',
    isCurrent: false,
    summary: 'Supervised 2D animation production pipelines, character layouts, and e-learning series development.',
    keyContributions: [
      'Supervised animation team across 2D animation series and e-learning projects',
      'Character design, layout generation, and production supervision'
    ],
    shippedTitles: ['2D Educational & Animated Series'],
    tools: ['Flash/Adobe Animate', 'Photoshop', 'After Effects']
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
    video: videoPath,
    description: 'Click play to watch the professional portfolio showcase'
  }
];
