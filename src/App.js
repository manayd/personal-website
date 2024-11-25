import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import paybackVideo from './payback-demo.mp4';
import lilypadVideo from './lilypad-demo.mp4'
import { Fade } from 'react-reveal';
import resumePDF from "./Manay_Divatia_Resume_copy.pdf";

import './App.css'; // Import CSS file for custom styles

function App() {
  return (
    <div className="App">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="navbar-brand">Manay Divatia</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/manaydivatia" target="_blank" className="nav-link" style={{ color: '#0072b1' }}>LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/manayd" target="_blank" className="nav-link">GitHub</Nav.Link>
            <Nav.Link href={resumePDF} target='_blank' className="nav-link">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className='about-section'>
        <Fade>
        <Row>
          <Col md={6}>
            <div className="about-section">
              <h1>Hi, I'm Manay!</h1>
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
              <img src="profile-pic.jpeg" alt="Manay Divatia" className="rounded-circle" />
            </div>
          </Col>
        </Row>
        </Fade>
      </Container>
      <hr className='divider'></hr>
      <h1 className='experiences-text'>Experiences</h1>
      <Container className='timeline-section'>
        <Row>
          <Col md={6} className='left-side'>
            <div className="timeline">
              <Fade bottom>
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
              </Fade>
            </div>
          </Col>
          <Col md={6} className='right-side'>
            <div className="timeline">
              <Fade bottom>
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
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className='divider'></hr>
      <h1 className='projects-text'>Projects</h1>
      <Container className='projects-section'>
        <Fade bottom distance='20px'>
        <Col>
          <Row md={4} className='project-row'>
            <Col md={6}>
              <div className="project">
              <h3>
                <a href="https://github.com/manayd/fin373-projects" target="_blank" rel="noopener noreferrer">
                  Policy Research Lab - Tourism Prediction
                </a>
              </h3>
                <p>In Spring 2024, I was part of the policy research lab class. 
                  Within this class, we learned about statistical methods and how they relate to domestic and foreign policy. 
                  At the conclusion of the semester, I presented a semester long project. 
                  This project looked at the various characteristics of a country that can affect the amount of tourist per year it gets. 
                  This project utilized a linear regression model, difference in differences regression, and unsupervised learning. 
                  The presentation on the right goes through the entire research process from data collection to final conclusions.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <a href="Factors-Affecting-Global-Tourism-copy.pdf" target="_blank" rel="noopener noreferrer">
                  <img src="prl-title-slide.png" alt="Manay Divatia" className="prl-title"/>
                </a>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <Row md={4} className='project-row'>
            <Col md={6}>
              <div className="project">
                <h3>
                  <a href="https://github.com/KushKG/ReceiptPaymentApp" target="_blank" rel="noopener noreferrer">
                    Payback App
                  </a>
                </h3>
                <p>In Fall 2023, I participated in a Hackathon at the University of Texas. 
                  In this hackathon, my team and I built an app that allows a user to take a picture of their reciept and split costs easier with other users. 
                  We used React Native for the frontend, Firebase for backend services, Flask as the backend framework, PyTesseract for image text recognition, GitHub for version control, and PyTorch for additional image processing. 
                  This combination allowed us to create a robust, cross-platform app with powerful image recognition capabilities. 
                  To the right is a demonstration video of the app and its functionality.</p>
              </div>
            </Col>
            <Col md={6}>
            <div>
              <video controls src={paybackVideo} type="video/mp4" className='payback-vid' />
            </div>
            </Col>
          </Row>
          <hr></hr>
          <Row md={4} className='project-row'>
            <Col md={6}>
              <div className="project">
                <h3>
                  <a href="https://github.com/KushKG/lilypad" target="_blank" rel="noopener noreferrer">
                    LilyPad App
                  </a>
                </h3>
                <p>In Spring 2024, I took a Human-Computer Interaction course at the University of Texas at Austin
                  Within this course, we conducted needfinding, prototyping, and eventually developed an app.
                  We used React Native for the frontend, Firebase for backend services, and GitHub for version control.
                  To further improve the functionality of our app and user experience, we conducted many rounds of user feedback throughout the development process.
                  Moreover, we conducted an experiment to determine which user interface for our filters page was easier for users to understand and navigate.</p>
              </div>
            </Col>
            <Col md={6} className='text-center'>
            <div>
              <video controls src={lilypadVideo} type="video/mp4" className='lilypad-vid' />
            </div>
            </Col>
          </Row>
        </Col>
        </Fade>
      </Container>
      <div className="social-icons-container">
        <a href="https://www.instagram.com/manaydivatia" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/manaydivatia" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
      </div>

    </div>
  );
}

export default App;
