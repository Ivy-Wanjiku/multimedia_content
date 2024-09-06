import React, { useState } from 'react';
import './index.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id='Home'>
    <div className="landing_inspo">
      <div className="hero-content">
            <h5> Get to listen to the best Podcast produced by Inganji .</h5>
          </div>
 <div>
 </div>
    </div>
    </div>
  );
};

export default Home;