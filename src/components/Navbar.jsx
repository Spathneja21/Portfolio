import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">Shubham</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
