// Edit this file to update portfolio content. Replace image paths with your real assets.
// Keep missing links as '#'; the interface hides their actions automatically.
const personalInfo = {
  name: 'Shahd Mohamed Abo-Elmkarem', title: 'Junior Full-Stack Web Developer',
  email: 'shahdadly5602@gmail.com', phone: '01029668470', phoneInternational: '+201029668470', location: 'Beni Suef, Egypt',
  photo: 'assets/images/profile/shahd-profile-original-cutout.png', cvUrl: '#', canonicalUrl: 'https://shahdmohamed010a-blip.github.io/portfolio/', socialImage: '#',
  headline: 'Building Web Experiences & Intelligent Digital Solutions.', headlineHighlight: 'Web Experiences',
  tagline: 'Building modern web applications, scalable backend systems, and intelligent automation solutions.',
  description: 'I build modern web products from polished, responsive interfaces to reliable backend systems, APIs, and databases using React.js, Next.js, Laravel, and Node.js.',
  coreStack: ['React.js', 'Next.js', 'PHP / Laravel', 'Node.js', 'REST APIs'],
  badges: ['Full-Stack', 'AI Automation'],
  about: ['I’m a Junior Full-Stack Web Developer with hands-on experience building modern web applications, backend systems, REST APIs, and business automation solutions.', 'My experience spans React.js, Next.js, PHP/Laravel, Node.js, databases, API integrations, and AI-powered automation.', 'I started my professional journey in AI Automation, transitioned into Web Development, and progressed into a Web Development & Operations Supervisor role, combining technical development with team leadership, project coordination, marketing support, and business operations.']
};
const socialLinks = [{label: 'GitHub', url: '#'}, {label: 'LinkedIn', url: 'https://www.linkedin.com/in/shahd-m-abo-elmkarem-8abb09277'}];
const skills = [
  {name:'React.js', icon:'assets/icons/skills/react.svg', category:'Frontend'},
  {name:'Next.js', icon:'assets/icons/skills/nextdotjs.svg', category:'Frontend'},
  {name:'JavaScript', icon:'assets/icons/skills/javascript.svg', category:'Programming'},
  {name:'HTML5', icon:'assets/icons/skills/html5.svg', category:'Frontend'},
  {name:'CSS3', icon:'assets/icons/skills/css.svg', category:'Frontend'},
  {name:'Tailwind CSS', icon:'assets/icons/skills/tailwindcss.svg', category:'Frontend'},
  {name:'Bootstrap', icon:'assets/icons/skills/bootstrap.svg', category:'Frontend'},
  {name:'React Router', icon:'assets/icons/skills/reactrouter.svg', category:'Frontend'},
  {name:'Axios', icon:'assets/icons/skills/axios.svg', category:'Frontend'},
  {name:'PHP', icon:'assets/icons/skills/php.svg', category:'Backend'},
  {name:'Laravel', icon:'assets/icons/skills/laravel.svg', category:'Backend'},
  {name:'Node.js', icon:'assets/icons/skills/nodedotjs.svg', category:'Backend'},
  {name:'Express.js', icon:'assets/icons/skills/express.svg', category:'Backend'},
  {name:'REST APIs', icon:'assets/icons/skills/rest-api.svg', category:'Backend'},
  {name:'MySQL', icon:'assets/icons/skills/mysql.svg', category:'Database'},
  {name:'SQL Server', icon:'assets/icons/skills/microsoftsqlserver.svg', category:'Database'},
  {name:'Prompt Engineering', icon:'assets/icons/skills/prompt-engineering.svg', category:'AI & Automation'},
  {name:'LLM Integration', icon:'assets/icons/skills/llm-integration.svg', category:'AI & Automation'},
  {name:'AI Agents', icon:'assets/icons/skills/ai-agents.svg', category:'AI & Automation'},
  {name:'n8n', icon:'assets/icons/skills/n8n.svg', category:'Automation'},
  {name:'OpenAI API', icon:'assets/icons/skills/openai.svg', category:'AI & Automation'},
  {name:'LangChain', icon:'assets/icons/skills/langchain.svg', category:'AI & Automation'},
  {name:'Workflow Automation', icon:'assets/icons/skills/workflow-automation.svg', category:'Automation'},
  {name:'Git', icon:'assets/icons/skills/git.svg', category:'Tools'},
  {name:'GitHub', icon:'assets/icons/skills/github.svg', category:'Tools'},
  {name:'API Testing', icon:'assets/icons/skills/postman.svg', category:'Tools'},
  {name:'Debugging', icon:'assets/icons/skills/debugging.svg', category:'Tools'}
];
const experience = [
  {title:'Web Development & Operations Supervisor', date:'Dec 2025 – Present', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Develop and maintain web applications using React.js, Next.js, PHP/Laravel, and Node.js.','Build responsive and reusable frontend interfaces.','Develop and integrate RESTful APIs.','Work with databases and backend business logic.','Supervise multidisciplinary teams.','Coordinate development, AI, marketing, sales, and creative activities.','Manage priorities, deliverables, and project progress.','Support project planning and technical decision-making.','Coordinate technical and non-technical teams.','Support marketing and business operations.']},
  {title:'Web Developer', date:'Sep 2025 – Nov 2025', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Developed web applications using React.js, JavaScript, PHP, and Laravel.','Built responsive interfaces.','Integrated frontend applications with REST APIs.','Developed backend functionality.','Worked with databases and CRUD operations.','Integrated third-party APIs.','Debugged and improved applications.']},
  {title:'AI Automation Trainee', date:'Jul 2025 – Aug 2025', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Designed AI-powered automation workflows.','Created structured prompts for LLM applications.','Built n8n workflows.','Integrated AI services with APIs.','Designed automated business processes.']}
];
const projects = [
  {id:14,title:'Domeera — Real Estate Brand',category:'Corporate Website',categories:['Web Development','Full-Stack'],type:'Real Estate Company Website',description:'A bilingual real-estate brand website presenting property development, marketing, engineering, investment, contracting services, and selected projects through a refined responsive experience.',technologies:['Bilingual UX','Real Estate','Responsive UI','Content Platform'],image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',gallery:[],liveUrl:'https://domeera.com/',mark:'D'},
  {id:15,title:'Domeera — Property Marketplace',category:'Real Estate Platform',categories:['Web Development','Full-Stack'],type:'Property Marketplace',description:'An Arabic real-estate marketplace for Beni Suef that brings property sales, rentals, agricultural land, finishing services, investment opportunities, and property search into one platform.',technologies:['Property Search','Arabic UX','Marketplace','Responsive UI'],image:'https://domeera.tek-part.com/beni-suef-corniche.jpeg',gallery:[],liveUrl:'https://domeera.tek-part.com/',mark:'D'},
  {id:12,title:'Pro Damac General Trading',category:'Corporate Website',categories:['Web Development','Full-Stack'],type:'B2B Corporate Platform',description:'A bilingual corporate website for a leading Kuwait general trading company, presenting supply, installation, and maintenance services for the general contracting sector.',technologies:['React.js','Bilingual UX','B2B Website','Responsive UI'],image:'https://demo.prodamac.com/brand/hero-poster-768.webp',gallery:[],liveUrl:'https://demo.prodamac.com/en',mark:'P'},
  {id:13,title:'Pro Damac Store',category:'E-Commerce',categories:['Web Development','Full-Stack'],type:'Electrical & Mechanical Store',description:'An online storefront for electrical and mechanical products from global brands, designed for clear product discovery and responsive commerce experiences.',technologies:['React.js','E-Commerce','Product Catalog','Bilingual UX'],image:'https://prodamac.store.tek-part.com/static/icon.png',imageFit:'contain',gallery:[],liveUrl:'https://prodamac.store.tek-part.com/',mark:'P'},
  {id:8,title:'Hallil — Education Management Platform',category:'EdTech',categories:['Web Development','Full-Stack'],type:'Education Platform',description:'An Arabic platform for teachers and schools across Gulf markets, supporting exam creation, certificate generation, and structured learning-content management.',technologies:['React.js','Education Platform','Content Management','Arabic UX'],image:'https://7ll.tek-part.com/logo/nav_logo.png',imageFit:'contain',gallery:[],liveUrl:'https://7ll.tek-part.com/',mark:'ح'},
  {id:9,title:'Vovalla',category:'E-Commerce',categories:['Web Development','Full-Stack'],type:'Beauty & Fashion Store',description:'A beauty, personal care, and fashion e-commerce storefront focused on elegant product discovery and responsive shopping flows.',technologies:['React.js','E-Commerce','Responsive UI','Product Catalog'],image:'https://vovalla.tek-part.com/logo.jpg',imageFit:'contain',gallery:[],liveUrl:'https://vovalla.tek-part.com/',mark:'V'},
  {id:10,title:'Watchcollector',category:'Luxury E-Commerce',categories:['Web Development','Full-Stack'],type:'Luxury Watch Platform',description:'A premium platform for rare and collectible watches, combining cinematic storytelling, multilingual browsing, and refined commerce flows.',technologies:['React.js','E-Commerce','Multilingual UX','Responsive UI'],image:'https://thewatchcollector1.com/images/dark-logo.jpeg',imageFit:'contain',gallery:[],liveUrl:'https://thewatchcollector1.com/',mark:'W'},
  {id:11,title:'Dolphin Food Industries',category:'B2B Website',categories:['Web Development','Full-Stack'],type:'Food Supply Platform',description:'A bilingual B2B website presenting frozen meat and poultry products to restaurants, hotels, and distributors across Egypt.',technologies:['React.js','Bilingual UX','B2B Website','Responsive UI'],image:'https://dolphin-factory.com/media/hero-premium.webp',gallery:[],liveUrl:'https://dolphin-factory.com/ar',mark:'D'}
].map(p=>({
  ...p,
  gallery:[`assets/images/projects/project-${p.id}-cover.webp`,...Array.from({length:({14:3,15:3,12:3,13:2,8:0,9:3,10:2,11:3})[p.id]||0},(_,i)=>`assets/images/projects/project-${p.id}-${i+1}.webp`)],
  githubUrl:'#',caseStudyUrl:'#',videoUrl:'#'
}));
const services = [
  {title:'Full-Stack Web Development',description:'Modern web applications built with React.js, Next.js, PHP/Laravel, and Node.js.'},
  {title:'Frontend Development',description:'Responsive and interactive interfaces with modern component-based development.'},
  {title:'Backend & API Development',description:'Scalable REST APIs, authentication, databases, integrations, and backend systems.'},
  {title:'AI Automation',description:'AI-powered workflows, LLM integrations, n8n automation, and intelligent business processes.'},
  {title:'Technical & Operations Supervision',description:'Team coordination, project planning, workflow management, and technical operations.'}
];
const content = {
  navigation:['Home','About','Skills','Experience','Projects','Services'],
  headings:{about:['01 / THE PERSON BEHIND THE CODE','A developer’s mindset. A broader perspective.'],skills:['02 / MY TOOLKIT','The right tools. Thoughtfully connected.'],experience:['03 / THE JOURNEY','Growing through building.'],projects:['04 / SELECTED WORK','Ideas, brought to life.'],services:['05 / WHAT I CAN HELP WITH','From interface to infrastructure.']},
  projectIntro:'Live web applications, e-commerce experiences, and business platforms built for real users.',
  leadershipTitle:'Beyond Development',leadershipText:'Alongside technical development, I have experience supervising multidisciplinary teams and coordinating development, AI, marketing, sales, HR, and creative activities.',leadershipSkills:['Team Supervision','Project Coordination','Marketing Coordination','Operations Management','KPI Tracking','Cross-Functional Collaboration'],
  copyrightYear:2026
};

