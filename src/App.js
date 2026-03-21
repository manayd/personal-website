import { useEffect, useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import resumePDF from "./Manay_Divatia_Resume_copy.pdf";
import amazonPic from "./amazon_pic.png";
import claritevPic from "./claritev_pic.jpg";
import meloPic from "./melo_pic.jpg";

import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const phrases = [
  'Software Engineer',
  'AI/ML Explorer',
  'Lifelong Learner',
];

const experiences = [
  {
    company: 'Amazon',
    logo: amazonPic,
    color: '#FF9900',
    role: 'SDE Intern · Jun–Aug 2025',
    description: 'Created a new feature requiring full stack development in TypeScript and Kotlin within the Devices organization. Utilized Amazon\'s internal AI resources to help me with productivity in all aspects of my internship project.',
    tags: ['TypeScript', 'Kotlin', 'AWS'],
  },
  {
    company: 'MultiPlan',
    logo: claritevPic,
    color: '#0072CE',
    role: 'IT Intern – Cloud · May–Aug 2024',
    description: 'Optimized Azure infrastructure, helping to create 11 modules using Terraform for automated provisioning. Improved 20+ Azure and AWS cloud infrastructure resources to better manage and run applications.',
    tags: ['Terraform', 'Azure', 'AWS'],
  },
  {
    company: 'Deck to Memo',
    initial: 'D',
    color: '#7C3AED',
    role: 'SWE Intern · May–Aug 2023',
    description: 'Built a full-stack application that converts a company\'s pitch deck into a standard deal memo. Developed using Python with Django and Docker containerization. Coordinated with 2 entrepreneurs using Agile.',
    tags: ['Python', 'Django', 'Docker'],
  },
  {
    company: 'Melo',
    logo: meloPic,
    color: '#10B981',
    role: 'SWE Intern · Jun–Dec 2022',
    description: 'Spearheaded development of in-app notifications to increase engaged sessions per user from 1.2 to 4.5 per day. Resolved UI and backend issues through Dart/Flutter and Google Firebase for 1.3K users.',
    tags: ['Dart', 'Flutter', 'Firebase'],
  },
];

function useTyped(phrases, typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return text;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeExp, setActiveExp] = useState(0);
  const typedText = useTyped(phrases);
  const appRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const container = appRef.current;
    if (!container) return;
    const handleScroll = () => setScrolled(container.scrollTop > 20);
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const exp = experiences[activeExp];

  return (
    <div className="App" ref={appRef}>
      <nav className={`navbar-modern${scrolled ? ' scrolled' : ''}`}>
        <a href="#about" className="nav-logo">MD</a>
        <div className="nav-links">
          <a href="#experiences" className="nav-item">Experience</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
          <span className="nav-separator" />
          <a href="https://www.linkedin.com/in/manaydivatia" target="_blank" rel="noopener noreferrer" className="nav-item nav-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/manayd" target="_blank" rel="noopener noreferrer" className="nav-item nav-icon" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="nav-item nav-btn">Resume</a>
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <section className='snap-section about-section' id='about'>
        <div className="section-inner">
          <Row className="align-items-center">
            <Col md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
              >
                <motion.h1 className="headline" variants={fadeUp}>
                  Hi, I'm Manay!
                </motion.h1>
                <motion.p className="subtitle" variants={fadeUp}>
                  {typedText}<span className="cursor" />
                </motion.p>
                <motion.p variants={fadeUp}>
                  Senior at the <strong>University of Texas at Austin</strong> studying 
                  <strong> Computer Science</strong> with a minor in Business and certificate in Entrepreneurship. <strong>Incoming Software Engineer at Amazon.</strong>
                </motion.p>
                <motion.div className="skill-tags" variants={fadeUp}>
                  {[
                    { name: 'Python', cls: 'skill-python' },
                    { name: 'Java', cls: 'skill-java' },
                    { name: 'JavaScript', cls: 'skill-js' },
                    { name: 'React', cls: 'skill-react' },
                    { name: 'R', cls: 'skill-r' },
                    { name: 'SQL', cls: 'skill-sql' },
                    { name: 'C', cls: 'skill-c' },
                  ].map((skill) => (
                    <span className={`skill-tag ${skill.cls}`} key={skill.name}>{skill.name}</span>
                  ))}
                </motion.div>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                className="profile-picture"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src="profile-pic.jpeg" alt="Manay Divatia" loading="lazy" />
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      <section className='snap-section timeline-section' id='experiences'>
        <div className="section-inner">
          <h1 className='experiences-text'>Experiences</h1>
          <div className="exp-layout">
            <div className="exp-sidebar">
              {experiences.map((e, i) => (
                <button
                  key={e.company}
                  className={`exp-tab${i === activeExp ? ' active' : ''}`}
                  onClick={() => setActiveExp(i)}
                  style={{ '--tab-color': e.color }}
                >
                  {e.logo
                    ? <img className="exp-logo-img" src={e.logo} alt={e.company} />
                    : <span className="exp-logo" style={{ background: e.color }}>{e.initial}</span>}
                  <span className="exp-tab-name">{e.company}</span>
                </button>
              ))}
            </div>
            <div className="exp-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="experience"
                  style={{ borderLeftColor: exp.color }}
                >
                  <div className="exp-header">
                    {exp.logo
                      ? <img className="exp-logo-img" src={exp.logo} alt={exp.company} />
                      : <span className="exp-logo" style={{ background: exp.color }}>{exp.initial}</span>}
                    <div>
                      <h3>{exp.company}</h3>
                      <h4>{exp.role}</h4>
                    </div>
                  </div>
                  <p>{exp.description}</p>
                  <div className="project-tags">
                    {exp.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className='snap-section projects-section' id='projects'>
        <div className="section-inner">
          <h1 className='projects-text'>Projects</h1>
          <motion.div
            className="projects-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.div className="project-row" variants={fadeUp}>
              <div className="project-row-header">
                <h3>
                  <a href="https://github.com/manayd" target="_blank" rel="noopener noreferrer">
                    AI-Powered Financial Data Pipeline
                  </a>
                </h3>
                <span className="project-date">March 2026</span>
              </div>
              <p>Built a real-time financial pipeline via Apache Kafka with dead-letter queues and content-hash deduplication. Processed streams through Faust for enrichment and windowed aggregations, served via a FastAPI REST API. Integrated LLM analysis (Claude via AWS Bedrock) to generate summaries on live financial data. Designed dual-storage architecture with PostgreSQL and S3/Parquet data lake.</p>
              <div className="project-tags">
                <span className="tag">Apache Kafka</span>
                <span className="tag">FastAPI</span>
                <span className="tag">AWS Bedrock</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Python</span>
              </div>
            </motion.div>

            <motion.div className="project-row" variants={fadeUp}>
              <div className="project-row-header">
                <h3>
                  <a href="https://github.com/manayd" target="_blank" rel="noopener noreferrer">
                    AI Research Analyst (Multi-Agent RAG System)
                  </a>
                </h3>
                <span className="project-date">January 2026</span>
              </div>
              <p>Built a multi-agent research analyst using LangGraph + RAG, producing consulting-style memos with citations. Implemented vector search with Chroma and benchmarked retrieval quality using RAGAS. Added a tool using a Data Agent for quantitative validation and reducing numeric hallucinations.</p>
              <div className="project-tags">
                <span className="tag">LangGraph</span>
                <span className="tag">RAG</span>
                <span className="tag">Chroma</span>
                <span className="tag">RAGAS</span>
              </div>
            </motion.div>

            <motion.div className="project-row" variants={fadeUp}>
              <div className="project-row-header">
                <h3>
                  <a href="https://github.com/manayd/fin373-projects" target="_blank" rel="noopener noreferrer">
                    Policy Research Lab - Tourism Prediction
                  </a>
                </h3>
                <span className="project-date">April 2024</span>
              </div>
              <p>Conducted analysis on factors predicting country tourism rates. Employed regression analyses, k-means clustering, and network visualization in R.</p>
              <div className="project-tags">
                <span className="tag">R</span>
                <span className="tag">Regression</span>
                <span className="tag">K-means</span>
                <span className="tag">Network Visualization</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="snap-section cta-footer-section">
        <div className="cta" id="contact">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp}>Let's build something together.</motion.h2>
            <motion.p variants={fadeUp}>I'm always open to new opportunities and conversations.</motion.p>
            <motion.a className="btn btn-primary" href="mailto:manaydivatia@gmail.com" variants={fadeUp}>Get in Touch</motion.a>
          </motion.div>
        </div>

        <footer className="footer">
          <div className="social-icons-container">
            <a href="https://www.instagram.com/manaydivatia" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/manaydivatia" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/manayd" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
          </div>
          <p className="footer-text">Manay Divatia &middot; {new Date().getFullYear()}</p>
        </footer>
      </section>
    </div>
  );
}

export default App;
