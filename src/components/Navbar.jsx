import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="navbar-brand">
          <img src={logoImage} alt="ProDex Logo" className="brand-logo-img" />
          <div className="brand-text-wrapper">
            <span className="brand-cyan">P</span>
            <span className="brand-white">ro</span>
            <span className="brand-cyan">D</span>
            <span className="brand-white">ex</span>
          </div>
        </a>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#team">Team</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="nav-bottom-line"></div>
      <div className="nav-corner-circle left"></div>
      <div className="nav-corner-circle right"></div>
    </nav>
  );
};

export default Navbar;