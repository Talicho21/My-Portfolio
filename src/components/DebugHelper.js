// src/components/DebugHelper.js
import React, { useEffect } from 'react';

const DebugHelper = () => {
  useEffect(() => {
    // Log all section IDs on the page
    const sections = document.querySelectorAll('section[id]');
    console.log('Found sections:');
    sections.forEach(section => {
      console.log(`- ID: ${section.id}, Class: ${section.className}`);
    });
    
    // Check specific IDs
    const ids = ['home', 'about', 'projects', 'contact'];
    ids.forEach(id => {
      const element = document.getElementById(id);
      console.log(`Element with id "${id}":`, element ? 'FOUND' : 'NOT FOUND');
    });
  }, []);

  return null; // This component doesn't render anything
};

export default DebugHelper;