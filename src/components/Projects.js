// src/components/Projects.js
import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Tali Restaurant',
      description: 'Built using HTML5, CSS, JavaScript with structured programming concepts.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: '🍽️',
      liveLink: 'https://talicho21.github.io/Talis-Restaurant/',
      bgColor: '#fff1e6',
      accentColor: '#d44c2f'
    },
    {
      name: 'Simple Portfolio',
      description: 'Personal portfolio website built using HTML5, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: '👨‍💻',
      liveLink: 'http://68b6c4015a896.site123.me',
      bgColor: '#e6f0ff',
      accentColor: '#1e1e2a'
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1 className="projects-main-title">MY PROJECTS</h1>
        <div className="title-underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ backgroundColor: project.bgColor }}
          >
            <div className="card-content">
              <div className="card-icon">{project.icon}</div>
              <h2 className="card-title">{project.name}</h2>
              <p className="card-description">{project.description}</p>
              
              <div className="tech-section">
                <h3 className="tech-title">TECHNOLOGIES USED</h3>
                <div className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="tech-item">
                      <span className="tech-bullet">▶</span>
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
                style={{ 
                  backgroundColor: project.accentColor,
                  borderColor: project.accentColor
                }}
              >
                View Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;