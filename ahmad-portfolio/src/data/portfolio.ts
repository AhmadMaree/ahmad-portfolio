export const portfolio = {
  name: 'Ahmad Marei',
  role: 'Software Engineer | AI Engineering',
  email: 'ahmadmarei1998@gmail.com',
  location: 'Jenin, Palestine',
  social: {
    github: 'https://github.com/AhmadMaree',
    linkedin: 'https://linkedin.com/in/ahmad-marei',
  },
  resume: '/Ahmad_Marei_Professional_CV.pdf',
  portrait: '/Confident%20Portrait%20in%20Black%20Suit.png',
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  experience: [
    {
      company: 'AUI (Augmented Intelligence)',
      location: 'New York, US · Remote',
      dates: 'June 2024 – August 2026',
      role: 'Software Engineer',
      description: 'AI product studio building LLM-powered tools and conversational interfaces for enterprise clients.',
      highlights: [
        'Owned integrations connecting AI agents with external APIs, MCP tools, generative AI, and RAG services.',
        'Built an API/MCP integration workflow for request configuration, endpoint testing, and JSON response mapping.',
        'Created reusable React and TypeScript components with backend and data engineering teams.',
        'Migrated a real-time feature from Pusher to WebSockets for streaming AI experiences.',
        'Improved dashboard state management with Zustand and Jotai and worked with Azure-hosted services.',
      ],
    },
    {
      company: 'RAYSolutions',
      location: 'Jenin, Palestine',
      dates: 'June 2021 – May 2024',
      role: 'Software Engineer / Full-Stack Engineer',
      description: 'Delivered client-facing products for OneOncology and Procter & Gamble.',
      highlights: [
        'Built a React patient-facing healthcare platform for OneOncology with a WordPress headless CMS.',
        'Developed P&G’s OnTheDot booking platform with React and Node.js.',
        'Implemented Azure DevOps CI/CD pipelines for frontend and backend releases.',
        'Developed P&G quality assessment workflows using Power Apps, SharePoint, and SPFx.',
      ],
    },
  ],
  skills: [
    { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'TanStack Query', 'Zustand', 'Jotai'] },
    { title: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'] },
    { title: 'AI Engineering', items: ['LangGraph', 'RAG', 'Azure OpenAI', 'Azure AI Search', 'Ollama'] },
    { title: 'Cloud & DevOps', items: ['Azure', 'Docker', 'GitHub Actions', 'Azure DevOps', 'Git'] },
  ],
  project: {
    title: 'DevPilot AI',
    subtitle: 'Multi-Agent AI Engineering Assistant',
    description: 'A cloud-deployed AI engineering platform that imports GitHub repositories, investigates source code, answers technical questions, and generates context-aware code patches with review and human approval workflows.',
    repository: 'https://github.com/AhmadMaree/devpilot-ai',
    demo: 'https://devpilot-frontend-dev.bravegrass-915607b9.italynorth.azurecontainerapps.io',
    workflows: [
      {
        title: 'Repository Investigation & RAG',
        description: 'GitHub repository ingestion, code indexing with Azure AI Search, and context-aware repository investigation and technical Q&A.',
      },
      {
        title: 'AI Developer & Code Review',
        description: 'AI-generated code patches orchestrated with LangGraph, followed by review and human approval workflows.',
      },
    ],
    technologies: [
      'React', 'TypeScript', 'Python', 'FastAPI', 'LangGraph', 'Azure OpenAI',
      'Azure AI Search', 'PostgreSQL', 'Docker', 'Azure Container Apps', 'GitHub Actions',
    ],
  },
  credentials: [
    { name: 'Microsoft Azure Solutions Architect Expert', status: 'In Progress' },
    { name: 'Udacity Android Nanodegree', status: 'Completed' },
    { name: 'Claude Code 101 · Anthropic', status: 'Completed' },
    { name: 'Virtualization, Docker & Kubernetes', status: 'Completed' },
  ],
  education: {
    degree: 'Computer Engineering',
    school: 'An-Najah National University',
    dates: '2016–2021',
  },
} as const;
