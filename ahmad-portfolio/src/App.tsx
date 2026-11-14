import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Check, Code2, Database, Download, ExternalLink, Github, GraduationCap,
  Linkedin, Mail, MapPin, Menu, Network, Search, Server, Sparkles, X,
} from 'lucide-react';
import { portfolio } from './data/portfolio';

const categoryIcons = [Code2, Server, BrainCircuit, Database];
const technologyBadges = ['React', 'TypeScript', 'Python', 'Azure', 'LangGraph'];
const specialties = ['Full-Stack Engineering', 'AI Agents', 'RAG Systems', 'Cloud Applications'];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const specialtyTimer = window.setInterval(() => {
      setSpecialtyIndex(index => (index + 1) % specialties.length);
    }, 2800);
    return () => window.clearInterval(specialtyTimer);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

    let ticking = false;
    const updateScrollState = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        const sections = portfolio.navigation
          .map(item => ({ id: item.href.slice(1), element: document.getElementById(item.href.slice(1)) }))
          .filter((item): item is { id: string; element: HTMLElement } => item.element !== null);
        const current = sections.slice().reverse().find(item => item.element.getBoundingClientRect().top <= 150);
        setActiveSection(current?.id ?? 'home');
        ticking = false;
      });
    };
    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', updateScrollState);
    };
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Ahmad Marei, home">
            <span className="brand-mark">AM<span>.</span></span>
          </a>
          <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
            {portfolio.navigation.map(item => (
              <a
                key={item.href}
                className={activeSection === item.href.slice(1) ? 'active' : undefined}
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-resume" href={portfolio.resume} download>
              Resume <Download size={15} />
            </a>
          </nav>
          <button
            className="mobile-menu"
            type="button"
            onClick={() => setMenuOpen(value => !value)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="hero-glow glow-a" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="availability"><span className="pulse" />{portfolio.role}</span>
              <h1>Hi, I’m Ahmad Marei<span className="hero-period">.</span></h1>
              <p className="hero-specialty">Focused on <span key={specialties[specialtyIndex]} className="specialty-current">{specialties[specialtyIndex]}</span></p>
              <p className="hero-lead">
                Software engineer with 5+ years of experience creating useful, dependable applications—from polished web experiences to AI-powered engineering systems.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
                <a className="button button-ghost" href={portfolio.resume} download>Download Resume <Download size={16} /></a>
              </div>
              <div className="hero-social" aria-label="Social profiles">
                <a href={portfolio.social.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={13} /></a>
                <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <div className="portrait-composition reveal">
              <div className="portrait-backdrop" aria-hidden="true" />
              <div className="portrait-frame">
                <img
                  src={portfolio.portrait}
                  alt="Ahmad Marei, software engineer"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="portrait-caption"><span className="caption-dot" /> Building at the edge of software & AI</div>
              {technologyBadges.map((technology, index) => (
                <span className={`tech-badge tech-badge-${index + 1}`} key={technology}>{technology}</span>
              ))}
            </div>
          </div>
          <a className="scroll-hint" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section id="about" className="section section-white">
          <div className="container about-layout">
            <SectionHeading eyebrow="01 / ABOUT" title="Engineering with purpose." />
            <div className="about-copy reveal">
              <p className="large-copy">I bring <strong>thoughtful engineering</strong> to the intersection of full-stack software and applied AI.</p>
              <p>
                Over 5+ years, I’ve worked with AUI and RAYSolutions, contributing to applications for Procter & Gamble and OneOncology. My work spans React and TypeScript interfaces, Python and FastAPI services, APIs, integrations, and Azure-hosted applications.
              </p>
              <p>
                More recently, I’ve been building with AI agents, retrieval-augmented generation, LangGraph, and Azure cloud services—turning emerging capabilities into practical tools.
              </p>
              <div className="about-highlights">
                <article className="highlight-card">
                  <span className="highlight-icon"><BriefcaseBusiness size={19} /></span>
                  <div><strong>5+ years</strong><span>Software engineering</span></div>
                </article>
                <article className="highlight-card">
                  <span className="highlight-icon"><BrainCircuit size={19} /></span>
                  <div><strong>AI engineering</strong><span>Agents, RAG & orchestration</span></div>
                </article>
                <article className="highlight-card">
                  <span className="highlight-icon"><Code2 size={19} /></span>
                  <div><strong>Full-stack</strong><span>From UI to cloud services</span></div>
                </article>
              </div>
              <div className="about-location"><MapPin size={16} /> {portfolio.location}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-tint">
          <div className="container">
            <SectionHeading eyebrow="02 / EXPERIENCE" title="Experience that ships." description="Contributing to thoughtful products with distributed teams and global clients." />
            <div className="timeline">
              {portfolio.experience.map((job, index) => (
                <article className="job reveal" key={job.company}>
                  <div className="job-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="job-left">
                    <span className="job-dates">{job.dates}</span>
                    <h3>{job.company}</h3>
                    <p className="job-location">{job.location}</p>
                  </div>
                  <div className="job-right">
                    <h4>{job.role}</h4>
                    <p className="job-description">{job.description}</p>
                    <ul>{job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="03 / FEATURED PROJECT" title="DevPilot AI." description="A practical AI engineering assistant built around real repository context and human review." />
            <article className="project-feature reveal">
              <div className="project-art" role="img" aria-label="Illustration of the DevPilot AI repository investigation and code review workflow">
                <div className="project-art-top"><span className="project-wordmark"><span className="project-mark"><Sparkles size={16} /></span> DEVPILOT AI</span><span className="art-label">WORKFLOW OVERVIEW · ILLUSTRATION</span></div>
                <div className="workflow-visual">
                  <div className="visual-input">
                    <span className="visual-icon"><Github size={20} /></span>
                    <strong>GitHub repository</strong>
                    <span className="visual-caption">Source code</span>
                  </div>
                  <div className="visual-connector"><span /></div>
                  <div className="visual-agent">
                    <span className="agent-orbit"><Network size={25} /></span>
                    <strong>Agent workflow</strong>
                    <span className="visual-caption">LangGraph · RAG</span>
                    <div className="agent-tools"><span>Azure AI Search</span><span>Azure OpenAI</span></div>
                  </div>
                  <div className="visual-connector"><span /></div>
                  <div className="visual-output">
                    <div><Search size={15} /><span>Investigate</span><Check size={14} /></div>
                    <div><Code2 size={15} /><span>Generate patch</span><Check size={14} /></div>
                    <div><Check size={15} /><span>Human review</span><ArrowRight size={14} /></div>
                  </div>
                </div>
                <div className="art-footer"><span className="caption-dot" /> REPOSITORY CONTEXT <span className="footer-divider">/</span> REVIEW-LED DEVELOPMENT</div>
              </div>
              <div className="project-details">
                <div className="project-kicker">AI ENGINEERING PLATFORM <span>01</span></div>
                <h3>{portfolio.project.title}</h3>
                <p className="project-subtitle">{portfolio.project.subtitle}</p>
                <p className="project-description">{portfolio.project.description}</p>
                <div className="project-workflows">
                  {portfolio.project.workflows.map((workflow, index) => (
                    <div className="workflow-detail" key={workflow.title}>
                      <span className="workflow-number">0{index + 1}</span>
                      <div><strong>{workflow.title}</strong><p>{workflow.description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="tags" aria-label="Project technologies">
                  {portfolio.project.technologies.map(technology => <span key={technology}>{technology}</span>)}
                </div>
                <div className="project-actions">
                  <a className="button button-dark" href={portfolio.project.repository} target="_blank" rel="noreferrer">View on GitHub <Github size={16} /></a>
                  <a className="text-link" href={portfolio.project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section section-tint">
          <div className="container">
            <SectionHeading eyebrow="04 / TECHNICAL SKILLS" title="A practical toolkit." description="Tools and technologies used across production software and hands-on AI engineering." />
            <div className="skills-grid">
              {portfolio.skills.map((category, index) => {
                const Icon = categoryIcons[index];
                return (
                  <article className="skill-card reveal" key={category.title}>
                    <div className="skill-card-heading"><span className="skill-icon"><Icon size={21} /></span><h3>{category.title}</h3></div>
                    <div className="skill-tags">{category.items.map(item => <span key={item}>{item}</span>)}</div>
                  </article>
                );
              })}
            </div>
            <div className="credentials">
              <div className="credential-group reveal">
                <span className="eyebrow">CONTINUOUS LEARNING</span>
                <h3>Certifications & learning</h3>
                <ul className="credential-list">
                  {portfolio.credentials.map(credential => (
                    <li key={credential.name}>
                      <span className={credential.status === 'In Progress' ? 'credential-status status-progress' : 'credential-status'}>
                        {credential.status === 'Completed' && <Check size={12} />}
                        {credential.status}
                      </span>
                      <strong>{credential.name}</strong>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="education-card reveal">
                <span className="education-icon"><GraduationCap size={21} /></span>
                <div><span className="eyebrow">EDUCATION</span><h3>{portfolio.education.degree}</h3><p>{portfolio.education.school}</p><span className="education-dates">{portfolio.education.dates}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-grid-pattern" aria-hidden="true" />
          <div className="container contact-inner reveal">
            <span className="eyebrow">05 / CONTACT</span>
            <h2>Let’s Build Something Meaningful.</h2>
            <p>Have an interesting engineering challenge or AI idea in mind? I’d be glad to hear about it.</p>
            <a className="button button-primary" href={`mailto:${portfolio.email}`}>Say hello <Mail size={17} /></a>
            <div className="contact-links">
              <a href={`mailto:${portfolio.email}`}><Mail size={17} /> {portfolio.email}</a>
              <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={portfolio.social.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-row">
          <a className="footer-brand" href="#home">AM<span>.</span></a>
          <span>© {new Date().getFullYear()} Ahmad Marei</span>
          <a href="#home">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
