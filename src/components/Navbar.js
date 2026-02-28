// src/components/Navbar.js
import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  // Navbar uses native anchor links; no JS scroll needed.

  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact" className="contact">Contact</a>
    </nav>
  );
};

export default Navbar;