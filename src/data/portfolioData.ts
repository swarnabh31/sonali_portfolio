import { PortfolioProject, ExperienceItem, EducationItem, SkillGroup } from '../types';

export const PROFILE_DATA = {
  name: 'SONALI BASAK',
  tagline: 'Senior Game Artist | Concept Artist | Art Lead',
  location: 'India',
  phone: '9701745766',
  formattedPhone: '+91 9701745766',
  email: 'sonaaaali19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sonali-basak',
  artstation: 'https://sonali_das_basak.artstation.com/',
  totalExperienceYears: 16,
  gamingExperienceYears: 12,
  currentLevel: 'Senior Artist / Individual Contributor',
  previousLeadership: 'Art Lead (Covet Fashion, Live Mobile Games)',
  summary: `Senior Game Artist and Concept Artist with 16 years of professional experience, including 12+ years in the gaming industry, specializing in 2D game art, character design, concept development, sprite sheets for animation, animatics, After Effects motion graphics, and production art. Experienced in delivering high-quality art for live mobile games and collaborating closely with designers, engineers, artists, and cross-functional teams.

Previously served as an Art Lead and Senior Artist across major mobile game franchises, contributing to character design, sprite sheet animation, avatar customization, gameplay assets, event art, marketing assets, and team art direction.

Strong combination of hands-on artistic execution, visual problem-solving, production ownership, mentoring, art reviews, and cross-functional collaboration.`,
  languages: ['English', 'Hindi', 'Bengali'],
  hobbies: ['Sketching', 'Playing Games', 'Watching Movies/Series', 'Travelling', 'Singing', 'Dancing'],
};

export const CORE_SKILLS_LIST = [
  '2D Game Art & Illustration',
  'Character & Creature Design',
  'Concept Art & Visual Development',
  'Sprite Sheets & 2D Animation',
  'After Effects Motion & FX',
  'Animatics & Storyboarding',
  'Character Turnarounds & Expression Sheets',
  'Character Portraits & Player Icons',
  'UI / Gameplay Art Assets',
  'Asset Production & Unity Integration',
  'Art Direction & Style Continuity',
  'Art Reviews & Constructive Feedback',
  'Team Collaboration & Mentoring',
  'Sprint Planning & Task Estimation',
  'Live Game Art Production',
  'Isometric & Background Design',
  'Comic Book Art & Digital Painting'
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Character & Concept Art',
    skills: [
      'Character Design & Turnarounds',
      'Creature & Hero Archetype Concepts',
      'Environment & Background Concepts',
      'Visual Development & Expression Sheets',
      'Avatar & Costume Customization Sets',
      'Comic Book Art & Digital Painting'
    ]
  },
  {
    category: 'Animation & Production Art',
    skills: [
      'Sprite Sheets & 2D Animation',
      'After Effects Motion & FX',
      'Animatics & Storyboarding',
      'Cut-out & Frame-by-Frame Animation',
      'Character Portraits & Player Icons',
      'Asset Integration & Unity Pipeline'
    ]
  },
  {
    category: 'Art Leadership & Pipeline',
    skills: [
      'Art Direction & Style Continuity',
      'Art Reviews & Actionable Feedback',
      'Sprint Planning & Task Estimation',
      'PSD & Resource Library Organization',
      'Cross-functional Collaboration (Engineers, Designers)',
      'Mentoring & Art Dojo Sessions'
    ]
  }
];

export const TOOLS_LIST = [
  'Photoshop',
  'Unity',
  'After Effects',
  'Flash/Adobe Animate',
  'Toonboom Storyboard',
  'Sketchbook Pro',
  'Spine'
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ea-mobile-senior',
    company: 'ELECTRONIC ARTS (EA)',
    role: 'Senior Artist / Concept Artist - Plants vs Zombies 3',
    duration: 'Present',
    location: 'India',
    isCurrent: true,
    summary: 'Working as a Senior Artist / Individual Contributor on Plants vs. Zombies 3, creating high-quality production-ready art across character designs, avatar customization, sprite sheets for animation, gameplay assets, and decorative content.',
    keyContributions: [
      'Designed and developed 2D character and creature concepts for gameplay and live-game content.',
      'Created character turnarounds, expression sheets, animatics, and sprite sheets for 2D character animation.',
      'Engineered frame-by-frame character sprite sheet sequences including idle, walk, attack, and hit reactions.',
      'Designed and produced avatar customization assets, costume sets, player portraits, and rendered icons.',
      'Created animated gameplay deco items, taking assets from initial concept through final rendered sprite frames.',
      'Supported creation and refinement of character sprite sheet atlases for game engine integration.',
      'Participated in playtesting and art integration reviews in Unity, providing actionable feedback.',
      'Collaborated with designers and engineers to solve visual and technical pipeline challenges within sprint timelines.',
      'Participated in internal Art Dojo sketching sessions, comic-art workshops, and creative development initiatives.'
    ],
    shippedTitles: ['Plants vs. Zombies 3'],
    tools: ['Photoshop', 'Unity', 'After Effects', 'Spine', 'Adobe Animate']
  },
  {
    id: 'ea-mobile-lead',
    company: 'ELECTRONIC ARTS (EA)',
    role: 'Art Lead — Plants vs Zombies 2',
    duration: 'Earlier EA Tenure',
    location: 'India',
    isCurrent: false,
    summary: 'Led and contributed to art production for Plants vs. Zombies 2, balancing hands-on character art creation with team leadership, planning, reviews, and cross-functional collaboration.',
    keyContributions: [
      'Led art development across character, environment, UI, event, and marketing requirements.',
      'Created character visual development, growth tiers, animation assets, and seasonal event key art.',
      'Conducted art reviews and provided actionable feedback to maintain visual style consistency.',
      'Worked closely with game designers to translate design briefs into production-ready visual assets.',
      'Participated in sprint planning, task creation, estimation, and asset prioritization.',
      'Collaborated with UI, engineering, and production teams to resolve asset integration issues in Unity.',
      'Helped organize PSD libraries, asset repositories, and production workflow templates.',
      'Mentored junior artists while contributing hands-on to critical production character assets.'
    ],
    shippedTitles: ['Plants vs. Zombies 2'],
    tools: ['Photoshop', 'Flash/Adobe Animate', 'Unity', 'After Effects']
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
      'COVET FASHION: Team Lead, Design Art Assets, Event banners',
      'QUIZZ UP: Character Level design and Animation',
      'ULTIMATE CHEF: Characters, Props, Event Banners Design'
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
      'ADVENTURE TIME - WIZARD BATTLE GAME (CARTOON NETWORK): Characters, Background and Animation',
      'CARTOON NETWORK - MINI GAMES: All Art assets for 20 Hyper casual games'
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
      'BAT PAT Animation series - Layout and Traditional Animation',
      'LILO AND STITCH Anime Movie - Traditional Animation',
      'LEGO FRIENDS - Concept Art, Storyboard and layout'
    ],
    shippedTitles: ['Bat Pat Series', 'Lilo and Stitch Anime', 'Lego Friends'],
    tools: ['After Effects', 'Toonboom Storyboard', 'Photoshop']
  },
  {
    id: 'emboss',
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

