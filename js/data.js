// Edit this file to update portfolio content. Replace image paths with your real assets.
// Keep missing links as '#'; the interface hides their actions automatically.
const personalInfo = {
  name: 'Shahd M. Abo-Elmkarem', title: 'Full-Stack Web Developer',
  email: 'shahdadly5602@gmail.com', phone: '01029668470', phoneInternational: '+201029668470', location: 'Beni Suef, Egypt',
  photo: 'assets/images/profile/shahd-profile-cutout.png', cvUrl: '#', canonicalUrl: '#', socialImage: '#',
  headline: 'Building Web Experiences & Intelligent Digital Solutions.', headlineHighlight: 'Web Experiences',
  tagline: 'Building modern web applications, scalable backend systems, and intelligent automation solutions.',
  description: 'I build modern web products from polished, responsive interfaces to reliable backend systems, APIs, and databases using React.js, Next.js, Laravel, and Node.js.',
  coreStack: ['React.js', 'Next.js', 'PHP / Laravel', 'Node.js', 'REST APIs'],
  badges: ['Full-Stack', 'AI Automation'],
  about: ['I’m a Full-Stack Web Developer with hands-on experience building modern web applications, backend systems, REST APIs, and business automation solutions.', 'My experience spans React.js, Next.js, PHP/Laravel, Node.js, databases, API integrations, and AI-powered automation.', 'I started my professional journey in AI Automation, transitioned into Web Development, and progressed into a Web Development & Operations Supervisor role, combining technical development with team leadership, project coordination, marketing support, and business operations.']
};
const socialLinks = [{label: 'GitHub', url: '#'}, {label: 'LinkedIn', url: 'https://www.linkedin.com/in/shahd-m-abo-elmkarem-8abb09277'}];
const skills = [
  {name:'Frontend', icon:'⌘', items:['React.js','Next.js','JavaScript','HTML5','CSS3','Tailwind CSS','Bootstrap','React Router','Axios']},
  {name:'Backend', icon:'{ }', items:['PHP','Laravel','Node.js','Express.js','REST APIs']},
  {name:'Database', icon:'▤', items:['MySQL','SQL','SQL Server']},
  {name:'AI & Automation', icon:'✳', items:['Prompt Engineering','LLM Integration','AI Agents','n8n','OpenAI API','LangChain','AI Workflow Automation','API Automation']},
  {name:'Tools', icon:'↗', items:['Git','GitHub','API Testing','Debugging']}
];
const experience = [
  {title:'Web Development & Operations Supervisor', date:'Dec 2025 – Present', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Develop and maintain web applications using React.js, Next.js, PHP/Laravel, and Node.js.','Build responsive and reusable frontend interfaces.','Develop and integrate RESTful APIs.','Work with databases and backend business logic.','Supervise multidisciplinary teams.','Coordinate development, AI, marketing, sales, and creative activities.','Manage priorities, deliverables, and project progress.','Support project planning and technical decision-making.','Coordinate technical and non-technical teams.','Support marketing and business operations.']},
  {title:'Web Developer', date:'Sep 2025 – Nov 2025', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Developed web applications using React.js, JavaScript, PHP, and Laravel.','Built responsive interfaces.','Integrated frontend applications with REST APIs.','Developed backend functionality.','Worked with databases and CRUD operations.','Integrated third-party APIs.','Debugged and improved applications.']},
  {title:'AI Automation Trainee', date:'Jul 2025 – Aug 2025', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Designed AI-powered automation workflows.','Created structured prompts for LLM applications.','Built n8n workflows.','Integrated AI services with APIs.','Designed automated business processes.']}
];
const projects = [
  {id:1,title:'Web Application Project',category:'Full-Stack',categories:['Web Development','Full-Stack'],type:'Web Application',description:'A full-stack web application project. Detailed scope, screenshots, and implementation notes will be added with the final project materials.',technologies:['React.js','Laravel','MySQL','REST API'],featured:true},
  {id:8,title:'Hallil — Education Management Platform',category:'EdTech',categories:['Web Development','Full-Stack'],type:'Education Platform',description:'An Arabic platform for teachers and schools across Gulf markets, supporting exam creation, certificate generation, and structured learning-content management.',technologies:['React.js','Education Platform','Content Management','Arabic UX'],image:'https://7ll.tek-part.com/logo/nav_logo.png',imageFit:'contain',gallery:[],liveUrl:'https://7ll.tek-part.com/',mark:'ح'},
  {id:9,title:'Vovalla',category:'E-Commerce',categories:['Web Development','Full-Stack'],type:'Beauty & Fashion Store',description:'A beauty, personal care, and fashion e-commerce storefront focused on elegant product discovery and responsive shopping flows.',technologies:['React.js','E-Commerce','Responsive UI','Product Catalog'],image:'https://vovalla.tek-part.com/logo.jpg',imageFit:'contain',gallery:[],liveUrl:'https://vovalla.tek-part.com/',mark:'V'},
  {id:10,title:'Watchcollector',category:'Luxury E-Commerce',categories:['Web Development','Full-Stack'],type:'Luxury Watch Platform',description:'A premium platform for rare and collectible watches, combining cinematic storytelling, multilingual browsing, and refined commerce flows.',technologies:['React.js','E-Commerce','Multilingual UX','Responsive UI'],image:'https://thewatchcollector1.com/images/dark-logo.jpeg',imageFit:'contain',gallery:[],liveUrl:'https://thewatchcollector1.com/',mark:'W'},
  {id:11,title:'Dolphin Food Industries',category:'B2B Website',categories:['Web Development','Full-Stack'],type:'Food Supply Platform',description:'A bilingual B2B website presenting frozen meat and poultry products to restaurants, hotels, and distributors across Egypt.',technologies:['React.js','Bilingual UX','B2B Website','Responsive UI'],image:'https://dolphin-factory.com/media/hero-premium.webp',gallery:[],liveUrl:'https://dolphin-factory.com/ar',mark:'D'},
  {id:12,title:'Pro Damac General Trading',category:'Corporate Website',categories:['Web Development','Full-Stack'],type:'B2B Corporate Platform',description:'A bilingual corporate website for a leading Kuwait general trading company, presenting supply, installation, and maintenance services for the general contracting sector.',technologies:['React.js','Bilingual UX','B2B Website','Responsive UI'],image:'https://demo.prodamac.com/brand/hero-poster-768.webp',gallery:[],liveUrl:'https://demo.prodamac.com/en',mark:'P'},
  {id:13,title:'Pro Damac Store',category:'E-Commerce',categories:['Web Development','Full-Stack'],type:'Electrical & Mechanical Store',description:'An online storefront for electrical and mechanical products from global brands, designed for clear product discovery and responsive commerce experiences.',technologies:['React.js','E-Commerce','Product Catalog','Bilingual UX'],image:'https://prodamac.store.tek-part.com/static/icon.png',imageFit:'contain',gallery:[],liveUrl:'https://prodamac.store.tek-part.com/',mark:'P'}
].map(p=>({image:`assets/images/projects/project-${p.id}-cover.webp`,gallery:[`assets/images/projects/project-${p.id}-1.webp`,`assets/images/projects/project-${p.id}-2.webp`],liveUrl:'#',githubUrl:'#',caseStudyUrl:'#',videoUrl:'#',...p}));
// Replace each project image with your actual project screenshot. Override gallery/URLs above as needed.
const services = [
  {title:'Full-Stack Web Development',description:'Modern web applications built with React.js, Next.js, PHP/Laravel, and Node.js.'},
  {title:'Frontend Development',description:'Responsive and interactive interfaces with modern component-based development.'},
  {title:'Backend & API Development',description:'Scalable REST APIs, authentication, databases, integrations, and backend systems.'},
  {title:'AI Automation',description:'AI-powered workflows, LLM integrations, n8n automation, and intelligent business processes.'},
  {title:'Technical & Operations Supervision',description:'Team coordination, project planning, workflow management, and technical operations.'}
];
const certifications = [
  {title:'AI Diploma',organization:'Instant'}, {title:'Business English',organization:'Digital Egypt Pioneers Initiative'},
  {title:'Data Science',organization:'MCIT / EYouth / DEPI'}, {title:'AI & Data Science Training',organization:'Instant'}
].map((c,i)=>({date:'',image:`assets/images/certificates/certificate-${i+1}.webp`,url:'#',...c}));
const content = {
  navigation:['Home','About','Skills','Experience','Projects','Services','Contact'],
  headings:{about:['01 / THE PERSON BEHIND THE CODE','A developer’s mindset. A broader perspective.'],skills:['02 / MY TOOLKIT','The right tools. Thoughtfully connected.'],experience:['03 / THE JOURNEY','Growing through building.'],projects:['04 / SELECTED WORK','Ideas, brought to life.'],services:['05 / WHAT I CAN HELP WITH','From interface to infrastructure.'],certifications:['08 / CONTINUOUS LEARNING','Always building on what I know.']},
  projectIntro:'Live web applications, e-commerce experiences, and business platforms built for real users.',
  filters:['All','Web Development','Full-Stack'],
  aiTitle:'Where Web Development Meets AI', aiText:'I combine modern web development with AI automation to build applications that are not only functional, but intelligent and efficient.',
  aiSkills:['Prompt Engineering','LLM Integration','AI Agents','n8n Automation','API Integration','Business Process Automation'],
  workflow:[['User','An action starts the process.'],['Web Application','A clear interface captures the request.'],['REST API','The request connects to backend services.'],['AI / LLM','A model processes the context.'],['Automation Workflow','Connected steps coordinate the work.'],['Business System','The result reaches the business workflow.']],
  leadershipTitle:'Beyond Development',leadershipText:'Alongside technical development, I have experience supervising multidisciplinary teams and coordinating development, AI, marketing, sales, HR, and creative activities.',leadershipSkills:['Team Supervision','Project Coordination','Marketing Coordination','Operations Management','KPI Tracking','Cross-Functional Collaboration'],
  contactTitle:'Let’s Build Something Great', contactText:'Have a project, opportunity, or idea? Let’s talk.', copyrightYear:2026
};

