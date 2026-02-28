// src/components/Contact.js
import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  // Function to handle link clicks
  const handleLinkClick = (url, isEmail = false, isPhone = false) => {
    if (isEmail) {
      window.location.href = `mailto:${url}`;
    } else if (isPhone) {
      window.location.href = `tel:${url}`;
    } else {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="contact-main-wrapper">
      
      {/* LEFT FRAME: Information */}
      <div className="contact-box info-side">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          I'm currently available for freelance work and collaborative projects.
        </p>
        
        <div className="info-grid">
          {/* EMAIL - opens mail client */}
          <div 
            className="small-frame clickable"
            onClick={() => handleLinkClick('yonatanshitaye@gmail.com', true, false)}
          >
            <span className="label">EMAIL</span>
            <p className="link-text">yonatanshitaye@gmail.com</p>
          </div>

          {/* PHONE - opens dialer */}
          <div 
            className="small-frame clickable"
            onClick={() => handleLinkClick('+251963781330', false, true)}
          >
            <span className="label">PHONE</span>
            <p className="link-text">+251963781330</p>
          </div>

          {/* GITHUB - opens in new tab */}
          <div 
            className="small-frame clickable"
            onClick={() => handleLinkClick('https://github.com/Talicho21')}
          >
            <span className="label">GITHUB</span>
            <p className="link-text">github.com/Talicho21</p>
          </div>

          {/* LINKEDIN - opens in new tab */}
          <div 
            className="small-frame clickable"
            onClick={() => handleLinkClick('https://linkedin.com/in/yonatan-shitaye')}
          >
            <span className="label">LINKEDIN</span>
            <p className="link-text">linkedin.com/in/yonatan-shitaye</p>
          </div>
        </div>

        <button className="status-button">⚡ Open to work & collaborations</button>
      </div>

      {/* RIGHT FRAME: Form */}
      <div className="contact-box form-side">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-split">
            <input type="text" placeholder="Name" className="neubrutal-input" />
            <input type="text" placeholder="Phone" className="neubrutal-input" />
          </div>
          <input type="email" placeholder="Email address" className="neubrutal-input full" />
          <textarea placeholder="Message" className="neubrutal-input full msg-box"></textarea>
          <button type="submit" className="neubrutal-btn">SEND MESSAGE</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;