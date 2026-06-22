import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <span style={{ color: 'var(--accent-color)' }}>&lt;</span>
          Perin Patel
          <span style={{ color: 'var(--accent-color)' }}> /&gt;</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/Perin_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
