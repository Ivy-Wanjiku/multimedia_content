
import React, { useState } from 'react';
import './index.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="landing-page">
      <header>
        <nav className={menuOpen ? 'open' : ''}>
          <div className="logo">
            <img src="images/concoror.png" alt="Logo"/>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#podcasts" onClick={toggleMenu}>Podcasts</a></li>
            <li><a href="#blogs" onClick={toggleMenu}>Blogs</a></li>
            <li><a href="#videos" onClick={toggleMenu}>Videos</a></li>
          </ul>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <div className="hero-content">
            <h5>Discover inspiring multimedia content and advanced technical skills.</h5>
          </div>
 
    </div>
  );
};

export default Home;