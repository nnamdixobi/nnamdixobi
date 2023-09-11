import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiFillHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';

export const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const isSectionInView = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= 0;
  };

  const handleScroll = () => {
    if (isSectionInView('home')) {
      setActiveSection('home');
    } else if (isSectionInView('about')) {
      setActiveSection('about');
    } else if (isSectionInView('experience')) {
      setActiveSection('experience');
    } else if (isSectionInView('portfolio')) {
      setActiveSection('portfolio');
    }
  };

  useEffect(() => {
    // Add a scroll listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
        <AiFillHome />
      </a>
      <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>
        <BiUserCircle />
      </a>
      <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleNavClick('experience')}>
        <BsPersonWorkspace />
      </a>
      <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => handleNavClick('portfolio')}>
        <MdComputer />
      </a>
    </nav>
  );
};

export default Nav;
