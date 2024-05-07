import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import './App.css'; // Import CSS file for custom styles

function App() {
  return (
    <div className="App">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="navbar-brand">Manay Divatia</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/manaydivatia" className="nav-link" style={{ color: '#0072b1' }}>LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/manayd" className="nav-link">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className='about-section'>
        <Row>
          <Col md={6}>
            <div className="about-section">
              <h2>Hi, I'm Manay!</h2>
              <p>
              I am a dedicated student at the <span style={{ color: '#CC5500' }}>University of Texas at Austin</span>. 
              Majoring in <b>Computer Science</b> with a minor in <b>Business</b> and a certificate in <b>Innovation, Creativity, and Entrepreneurship</b>, I'm passionate about bridging the gap between technology and business.
              </p>
              <p>
              I am experienced in Python, Java, JavaScript, React, R, SQL, and C.
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
              <img src="profile-pic.jpeg" alt="Manay Divatia" className="rounded-circle" />
            </div>
          </Col>
        </Row>
      </Container>
      <h1 className='experiences-text'>Experiences</h1>
      <Container className='timeline-section'>
        <Row>
          <Col md={6}>
            <div className="timeline">
              <div className="experience">
                <h3>Deck To Memo</h3>
                <h4>Software Engineering Intern (May 2023 - August 2023)</h4>
                <p>Built a full-stack application that converts a company’s pitch deck into a standard deal memo in 6 paragraphs.
                    Developed a website using Python with a Django web framework using Docker containerization.
                   Coordinated with 2 entrepreneurs to organize and carry out the entire project using an Agile framework.
                   Skills used: Python, Javascript, Django Framework, HTTP API, HTML.
                   </p>
              </div>
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
          </Col>
          <Col md={6} className='right-side'>
            <div className="timeline">
              <div className="experience">
              <h3>Melo</h3>
                <h4>Software Engineering Intern (June 2022 - December 2022)</h4>
                <p>Spearheaded development of in-app notifications to increase engaged sessions per user from 1.2 to 4.5 per day.
                   Resolved UI issues through Dart and backend issues through Google Firebase for 1.3K users.
                   Identified potential functionality bugs through user and code-based testing.
                   Skills used: Dart, Flutter, UI, Google Firebase, iOS Development.
                   </p>
              </div>
              <div className="experience-last">
                <h3>MIT Beaver Works Summer Institute</h3>
                <h4>Operations Team Leader - Remote Sensing for Disaster Response (July 2021-August 2021)</h4>
                <p>Analyzed raster and satellite imagery through spatial data analysis using Python, pandas, and sklearn.
                   Utilized and responded to simulated hurricane data to minimize displacement of simulated citizens.
                   Developed a machine learning algorithm to identify destroyed objects in satellite imagery with 76% accuracy.
                   Skills used: Python, Pandas, MatPlotLib, Machine Learning, Neural Networks, Remote Sensing, Deep Learning.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <h1 className='experiences-text'>Projects</h1>
      <Container className='projects-section'>
        <Col>
          <Row md={4}>
            <Col md={6}>
              <div className="project">
              <h3>Policy Research Lab - Tourism Prediction</h3>
              <p>This is a description of project 1.</p>
            </div>
            </Col>
            <Col md={6}>
            <div>
              <img src="profile-pic.jpeg" alt="Manay Divatia" className="rounded-circle" />
            </div>
            </Col>
          </Row>
          <Row md={4}>
            <Col md={6}>
              <div className="project">
              <h3>Payback App</h3>
              <p>This is a description of project 1.</p>
            </div>
            </Col>
            <Col md={6}>
            <div>
              <img src="profile-pic.jpeg" alt="Manay Divatia" className="rounded-circle" />
            </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
