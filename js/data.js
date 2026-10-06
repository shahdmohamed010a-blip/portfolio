// Edit this file to update portfolio content. Replace image paths with your real assets.
// Keep missing links as '#'; the interface hides their actions automatically.
const personalInfo = {
  name: 'Shahd M. Abo-Elmkarem', title: 'Full-Stack Web Developer',
  email: 'shahdadly560@gmail.com', phone: '01153454413', phoneInternational: '+201153454413', location: 'Beni Suef, Egypt',
  photo: 'assets/images/profile/shahd-profile.jpg', cvUrl: '#', canonicalUrl: '#', socialImage: '#',
  headline: 'Building Web Experiences & Intelligent Digital Solutions.', headlineHighlight: 'Web Experiences',
  tagline: 'Building modern web applications, scalable backend systems, and intelligent automation solutions.',
  description: 'Full-Stack Web Developer focused on React.js, Next.js, PHP/Laravel, Node.js, REST APIs, and modern business solutions, with additional experience in AI automation, prompt engineering, and Odoo.',
  coreStack: ['React.js', 'Next.js', 'PHP / Laravel', 'Node.js', 'REST APIs'],
  badges: ['Full-Stack', 'AI Automation', 'Odoo'],
  about: ['I’m a Full-Stack Web Developer with hands-on experience building modern web applications, backend systems, REST APIs, and business automation solutions.', 'My experience spans React.js, Next.js, PHP/Laravel, Node.js, databases, API integrations, Odoo ERP, and AI-powered automation.', 'I started my professional journey in AI Automation, transitioned into Web Development, and progressed into a Web Development & Operations Supervisor role, combining technical development with team leadership, project coordination, marketing support, and business operations.']
};
const socialLinks = [{label: 'GitHub', url: '#'}, {label: 'LinkedIn', url: '#'}];
const skills = [
  {name:'Frontend', icon:'⌘', items:['React.js','Next.js','JavaScript','HTML5','CSS3','Tailwind CSS','Bootstrap','React Router','Axios']},
  {name:'Backend', icon:'{ }', items:['PHP','Laravel','Node.js','Express.js','REST APIs']},
  {name:'Database', icon:'▤', items:['MySQL','SQL','SQL Server']},
  {name:'AI & Automation', icon:'✳', items:['Prompt Engineering','LLM Integration','AI Agents','n8n','OpenAI API','LangChain','AI Workflow Automation','API Automation']},
  {name:'ERP', icon:'◇', items:['Odoo','ERP Workflows','Business Process Automation','Odoo Customization']},
  {name:'Tools', icon:'↗', items:['Git','GitHub','API Testing','Debugging']}
];
const experience = [
  {title:'Web Development & Operations Supervisor', date:'Dec 2025 – Present', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Develop and maintain web applications using React.js, Next.js, PHP/Laravel, and Node.js.','Build responsive and reusable frontend interfaces.','Develop and integrate RESTful APIs.','Work with databases and backend business logic.','Supervise multidisciplinary teams.','Coordinate development, AI, marketing, sales, and creative activities.','Manage priorities, deliverables, and project progress.','Support project planning and technical decision-making.','Coordinate technical and non-technical teams.','Support marketing and business operations.']},
  {title:'Web Developer', date:'Sep 2025 – Nov 2025', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Developed web applications using React.js, JavaScript, PHP, and Laravel.','Built responsive interfaces.','Integrated frontend applications with REST APIs.','Developed backend functionality.','Worked with databases and CRUD operations.','Integrated third-party APIs.','Debugged and improved applications.']},
  {title:'AI Automation Trainee', date:'Jul 2025 – Aug 2025', company:'Tarawud', location:'Beni Suef, Egypt', responsibilities:['Designed AI-powered automation workflows.','Created structured prompts for LLM applications.','Built n8n workflows.','Integrated AI services with APIs.','Designed automated business processes.']}
];
const projects = [
  {id:1,title:'Web Application Project',category:'Full-Stack',categories:['Web Development','Full-Stack'],type:'Web Application',description:'A full-stack web application project. Detailed scope, screenshots, and implementation notes will be added with the final project materials.',technologies:['React.js','Laravel','MySQL','REST API'],featured:true},
  {id:2,title:'AI Automation Platform',category:'AI & Automation',categories:['AI & Automation'],type:'Automation Platform',description:'An AI automation project. Workflow details and demonstrations will be added with the final project materials.',technologies:['n8n','LLM','OpenAI API','REST APIs','Prompt Engineering'],featured:true},
  {id:3,title:'Odoo ERP Project 01',category:'Odoo',categories:['Odoo'],type:'ERP Project',description:'A practical Odoo ERP project. Business workflow scope and screenshots will be added with the final project materials.',technologies:['Odoo','ERP','Business Workflow Automation']},
  {id:4,title:'Odoo ERP Project 02',category:'Odoo',categories:['Odoo'],type:'ERP Project',description:'A second practical Odoo ERP project. Configuration and process details will be added with the final project materials.',technologies:['Odoo','ERP','Business Process Automation']},
  {id:5,title:'Amazon Category Sales Dashboard',category:'Dashboard',categories:['Dashboards'],type:'Business Intelligence',description:'A sales dashboard project. Analysis scope and dashboard screenshots will be added with the final project materials.',technologies:['Power BI','Data Analysis','Business Intelligence']},
  {id:6,title:'Spotify Analysis & Visualization',category:'Dashboard / Data',categories:['Dashboards'],type:'Data Visualization',description:'A Spotify data analysis and visualization project. Dataset context and visualizations will be added with the final project materials.',technologies:['Python','Data Visualization','Data Analysis']},
  {id:7,title:'AI-Powered Job Market Analysis',category:'AI / Data',categories:['AI & Automation','Dashboards'],type:'Data Analysis',description:'An AI-powered job market analysis project. Methods and findings will be added with the final project materials.',technologies:['Python','Data Analysis','AI']}
].map(p=>({image:`assets/images/projects/project-${p.id}-cover.webp`,gallery:[`assets/images/projects/project-${p.id}-1.webp`,`assets/images/projects/project-${p.id}-2.webp`],liveUrl:'#',githubUrl:'#',caseStudyUrl:'#',videoUrl:'#',...p}));
// Replace each project image with your actual project screenshot. Override gallery/URLs above as needed.
const services = [
  {title:'Full-Stack Web Development',description:'Modern web applications built with React.js, Next.js, PHP/Laravel, and Node.js.'},
  {title:'Frontend Development',description:'Responsive and interactive interfaces with modern component-based development.'},
  {title:'Backend & API Development',description:'Scalable REST APIs, authentication, databases, integrations, and backend systems.'},
  {title:'AI Automation',description:'AI-powered workflows, LLM integrations, n8n automation, and intelligent business processes.'},
  {title:'Odoo ERP Solutions',description:'Odoo configuration, workflows, business process automation, and ERP solutions.'},
  {title:'Technical & Operations Supervision',description:'Team coordination, project planning, workflow management, and technical operations.'}
];
const certifications = [
  {title:'AI Diploma',organization:'Instant'}, {title:'Business English',organization:'Digital Egypt Pioneers Initiative'},
  {title:'Data Science',organization:'MCIT / EYouth / DEPI'}, {title:'AI & Data Science Training',organization:'Instant'}, {title:'Odoo ERP Course',organization:'Udemy'}
].map((c,i)=>({date:'',image:`assets/images/certificates/certificate-${i+1}.webp`,url:'#',...c}));
const content = {
  navigation:['Home','About','Skills','Experience','Projects','Services','Contact'],
  headings:{about:['01 / THE PERSON BEHIND THE CODE','A developer’s mindset. A broader perspective.'],skills:['02 / MY TOOLKIT','The right tools. Thoughtfully connected.'],experience:['03 / THE JOURNEY','Growing through building.'],projects:['04 / SELECTED WORK','Ideas, brought to life.'],services:['05 / WHAT I CAN HELP WITH','From interface to infrastructure.'],certifications:['09 / CONTINUOUS LEARNING','Always building on what I know.']},
  projectIntro:'Web applications, intelligent workflows, and business systems. A selection of my work across the stack.',
  filters:['All','Web Development','Full-Stack','AI & Automation','Odoo','Dashboards'],
  aiTitle:'Where Web Development Meets AI', aiText:'I combine modern web development with AI automation to build applications that are not only functional, but intelligent and efficient.',
  aiSkills:['Prompt Engineering','LLM Integration','AI Agents','n8n Automation','API Integration','Business Process Automation'],
  workflow:[['User','An action starts the process.'],['Web Application','A clear interface captures the request.'],['REST API','The request connects to backend services.'],['AI / LLM','A model processes the context.'],['Automation Workflow','Connected steps coordinate the work.'],['Business System','The result reaches the business workflow.']],
  odooTitle:'ERP & Odoo',odooText:'Hands-on Odoo experience supported by dedicated training and practical projects, focused on ERP workflows, business processes, customization, and automation.',odooSkills:['Odoo ERP','Business Workflows','ERP Automation','Module Configuration','API Integration'],
  leadershipTitle:'Beyond Development',leadershipText:'Alongside technical development, I have experience supervising multidisciplinary teams and coordinating development, AI, marketing, sales, HR, and creative activities.',leadershipSkills:['Team Supervision','Project Coordination','Marketing Coordination','Operations Management','KPI Tracking','Cross-Functional Collaboration'],
  contactTitle:'Let’s Build Something Great', contactText:'Have a project, opportunity, or idea? Let’s talk.', copyrightYear:2026
};

