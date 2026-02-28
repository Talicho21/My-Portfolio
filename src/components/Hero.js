// src/components/Hero.js
import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  // CV file path - pointing to public folder
  const cvPath = '/My-Cv.pdf'; // This will work because public folder is served from root

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Yonatan-Shitaye-CV.pdf'; // The name the file will download as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    // Open CV in new tab
    window.open(cvPath, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm Yonatan</h1>
        <p className="hero-subtitle">Frontend Developer | React Enthusiast</p>
        
        <div className="hero-buttons">
          <button onClick={handleDownloadCV} className="btn btn-download">
            Download CV
          </button>
          <button onClick={handleViewCV} className="btn btn-view">
            View CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;