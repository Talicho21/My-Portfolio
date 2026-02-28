// src/components/About.js
import React from 'react';
import '../Styles/About.css';  // Make sure this path is correct

const About = () => {
  const skills = [
    'React', 'JavaScript ES6+', 'HTML5', 'CSS3', 
    'Responsive Design', 'Component Architecture', 
    'CSS Modules', 'ESLint/Prettier'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-frame">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-text">
            I am a Software Engineering student passionate about frontend development. 
            I build responsive, accessible, and user-friendly web interfaces using modern 
            JavaScript and React. Main skills: React, JavaScript (ES6+), HTML5, CSS3, 
            component-based architecture, and responsive design. I use CSS Modules or plain 
            CSS for styling and prefer clean, semantic markup.
          </p>
          
          <p className="about-text">
            I enjoy learning state management patterns, performance optimization, and improving 
            developer experience with tooling like ESLint and Prettier. I'm continuously building 
            projects to strengthen UI/UX and frontend engineering skills.
          </p>
        </div>

        <div className="availability-badge">
          ⚡ Open to work & collaborations
        </div>

        <div className="quote-section">
          <p className="quote-text">
            "Passionate about creating meaningful web experiences and always learning."
          </p>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">TECHNICAL SKILLS</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-bullet">▶</span>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;