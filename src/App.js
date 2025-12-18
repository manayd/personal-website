import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import paybackVideo from './payback-demo.mp4';
import lilypadVideo from './lilypad-demo.mp4'
import { Fade } from 'react-reveal';
import resumePDF from "./Manay_Divatia_Resume_copy.pdf";
import { useEffect, useState } from 'react';

import './App.css'; // Import CSS file for custom styles

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar bg="transparent" expand="lg" sticky="top" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="#about" className="navbar-brand">Manay Divatia</Navbar.Brand>
          <Nav className="ms-auto nav-right">
            <Nav.Link href="https://www.linkedin.com/in/manaydivatia" target="_blank" rel="noopener noreferrer" className="nav-link nav-external" style={{ color: '#0072b1' }}>LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/manayd" target="_blank" rel="noopener noreferrer" className="nav-link nav-external">GitHub</Nav.Link>
            <Nav.Link href={resumePDF} target='_blank' rel="noopener noreferrer" className="nav-link nav-external">Resume</Nav.Link>
            <div className="theme-toggle">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  aria-label="Toggle dark mode"
                />
                <span className="slider"></span>
              </label>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid className='about-section' id='about'>
        <div className="section-inner">
          <Fade>
          <Row>
            <Col md={6}>
              <div className="about-section">
                <h1 className="headline fade-in">Hi, I'm Manay!</h1>
                <p>
                I am a Junior at the <span style={{ color: '#CC5500' }}>University of Texas at Austin</span>. 
                Majoring in <b>Computer Science</b> with a minor in <b>Business</b> and a certificate in <b>Innovation, Creativity, and Entrepreneurship</b>, I'm passionate about bridging the gap between technology and business.
                </p>
                <p>
                  I am experienced in 
                  <span style={{ color: '#3572A5' }}> Python</span>, 
                  <span style={{ color: '#B07219' }}> Java</span>, 
                  <span style={{ color: '#F4D35E' }}> JavaScript</span>, 
                  <span style={{ color: '#61DAFB' }}> React</span>, 
                  <span style={{ color: '#198CE7' }}> R</span>, 
                  <span style={{ color: '#E34C26' }}> SQL</span>, 
                  and 
                  <span style={{ color: '#555555' }}> C</span>.
                  I serve as the Academic Director for UT's Business Analytics Organization, 
                  where I'm dedicated to fostering a collaborative and enriching learning environment for students exploring the exciting realms of data analytics and technology.
                </p>
                <p>
                Right now, I am interested in gaining experience in software engineering and data analytics through personal projects and internships.
                Moreover, after graduation, I am interested in pursuing a career in those fields.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="profile-picture">
                <img src="profile-pic.jpeg" alt="Manay Divatia" className="rounded-circle fade-in delay-1" loading="lazy" />
              </div>
            </Col>
          </Row>
          </Fade>
        </div>
      </Container>
      <Container fluid className='timeline-section' id='experiences'>
        <div className="section-inner">
          <hr className='divider'></hr>
          <h1 className='experiences-text'>Experiences</h1>
          <div className="timeline">
            <Fade bottom cascade>
              <div className="timeline-item left fade-in">
                <div className="experience">
                  <h3>Amazon</h3>
                  <h4>SDE Intern (June 2025 - August 2025)</h4>
                  <p>Created a new feature requiring full stack development in TypeScript and Kotlin within the Devices organization.
                     Utilized Amazon’s internal AI resources to help me with productivity in all aspects of my internship project.
                  </p>
                </div>
              </div>
              <div className="timeline-item right fade-in delay-1">
                <div className="experience">
                  <h3>MultiPlan</h3>
                  <h4>Information Technology Intern - Cloud (May 2024 - August 2024)</h4>
                  <p>Optimized Azure infrastructure, helping to create 11 modules using Terraform for automated provisioning
                     Improved 20+ Azure and AWS cloud infrastructure resources to better manage and run applications
                  </p>
                </div>
              </div>
              <div className="timeline-item left fade-in delay-2">
                <div className="experience">
                <h3>Deck to Memo</h3>
                  <h4>Software Engineering Intern (May 2023 - August 2023)</h4>
                  <p>Built a full-stack application that converts a company’s pitch deck into a standard deal memo in 6 paragraphs.
                      Developed a website using Python with a Django web framework using Docker containerization.
                     Coordinated with 2 entrepreneurs to organize and carry out the entire project using an Agile framework.
                     Skills used: Python, Javascript, Django Framework, HTTP API, HTML.
                     </p>
                </div>
              </div>
              <div className="timeline-item right fade-in delay-3">
                <div className="experience">
                <h3>Melo</h3>
                  <h4>Software Engineering Intern (June 2022 - December 2022)</h4>
                  <p>Spearheaded development of in-app notifications to increase engaged sessions per user from 1.2 to 4.5 per day.
                     Resolved UI issues through Dart and backend issues through Google Firebase for 1.3K users.
                     Identified potential functionality bugs through user and code-based testing.
                     Skills used: Dart, Flutter, UI, Google Firebase, iOS Development.
                     </p>
                </div>
              </div>
              <div className="timeline-item left fade-in delay-4">
                <div className="experience">
                <h3>MIT Beaver Works Summer Institute</h3>
                  <h4>Operations Team Leader - Remote Sensing for Disaster Response (July 2021-August 2021)</h4>
                  <p>Analyzed raster and satellite imagery through spatial data analysis using Python, pandas, and sklearn.
                     Utilized and responded to simulated hurricane data to minimize displacement of simulated citizens.
                     Developed a machine learning algorithm to identify destroyed objects in satellite imagery with 76% accuracy.
                     Skills used: Python, Pandas, MatPlotLib, Machine Learning, Neural Networks, Remote Sensing, Deep Learning.
                     </p>
                </div>
              </div>
              <div className="timeline-item right fade-in delay-5">
                <div className="experience">
                  <h3>Pathful Connect</h3>
                  <h4>Software Development Intern (May 2021 - June 2021)</h4>
                  <p>Programmed the help section for all event pages on the Nepris website using .yaml files for 100,000+ educators.
                     Created a text messaging notification system using the Twilio REST API call in C#.
                     Collaborated with 10 developers and 2 product managers to pick up User Stories for a Sprint.
                     Skills used: C#, SQL, Front-End Development.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Container>
      <Container fluid className='projects-section' id='projects'>
        <div className="section-inner">
          <hr className='divider'></hr>
          <h1 className='projects-text'>Projects</h1>
          <Fade bottom distance='20px'>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-content">
                  <h3>
                    <a href="https://github.com/manayd/fin373-projects" target="_blank" rel="noopener noreferrer">
                      Policy Research Lab - Tourism Prediction
                    </a>
                  </h3>
                  <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Stats</span>
                    <span className="tag">Regression</span>
                  </div>
                  <p>Semester-long research on factors affecting global tourism using regression and unsupervised learning, presented with findings and visualizations.</p>
                </div>
                <div className="project-media">
                  <a href="Factors-Affecting-Global-Tourism-copy.pdf" target="_blank" rel="noopener noreferrer">
                    <img src="prl-title-slide.png" alt="Policy Research Lab title slide" loading="lazy" />
                  </a>
                </div>
              </div>

              <div className="project-card horizontal">
                <div className="project-content">
                  <h3>
                    <a href="https://github.com/KushKG/ReceiptPaymentApp" target="_blank" rel="noopener noreferrer">
                      Payback App
                    </a>
                  </h3>
                  <div className="project-tags">
                    <span className="tag">React Native</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Flask</span>
                    <span className="tag">PyTorch</span>
                  </div>
                  <p>Hackathon app to scan receipts and split costs across users with OCR and cross-platform support.</p>
                </div>
                <div className="project-media">
                  <video controls src={paybackVideo} type="video/mp4" className='payback-vid' preload="metadata" />
                </div>
              </div>

              <div className="project-card horizontal">
                <div className="project-content">
                  <h3>
                    <a href="https://github.com/KushKG/lilypad" target="_blank" rel="noopener noreferrer">
                      LilyPad App
                    </a>
                  </h3>
                  <div className="project-tags">
                    <span className="tag">React Native</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">UX Research</span>
                  </div>
                  <p>HCI course app built with iterative user feedback and experiments to refine filter UI and overall experience.</p>
                </div>
                <div className="project-media">
                  <video controls src={lilypadVideo} type="video/mp4" className='lilypad-vid' preload="metadata" />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
      <div className="cta" id="contact">
        <h2>Let’s talk!</h2>
        <p>Feel free to reach out to me. I’d love to connect!</p>
        <a className="btn btn-primary" href="mailto:manaydivatia@gmail.com">Email Me</a>
      </div>
      <div className="social-icons-container">
        <a href="https://www.instagram.com/manaydivatia" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/manaydivatia" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
      </div>

    </div>
  );
}

export default App;
