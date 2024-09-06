import React from 'react';
import Home from './Home';
import Portfolio from './Homepage';
import Podcasts from './Podcast';
import Review from './Review/review';
import Blogs from './Blog';
import Videos from './Videosection';
import Contact from './Contacts';
import Navbar from './Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Videos/> 
    <Blogs/> 
    <Review/> 
    <Podcasts/> 
    <Portfolio/> 
    <Contact/>
    </div>
  );
}
export default App;
