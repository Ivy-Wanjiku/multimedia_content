import React, {useState} from 'react';
import './index.css'


function Navbar(){
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto': 'hidden';


       
    };


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };


    return(

        <div className='Navbar-container'>
            <div className='logo-image'>
            <img src='/media/Inganji.png' alt='logo' className='logo-image'/>
            </div>
            <div className={`hamburger-menu ${isMenuOpen? 'active': ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <div className=  {`show-nav ${isMenuOpen ? 'active': ''}`}>
                <a href="#Home" onClick={(e)=>{e.preventDefault(); scrollToSection('Home');}}> Home</a>
                <a href="#Videosection" onClick={(e)=> {e.preventDefault();scrollToSection ('Videosection');}}>Videos</a>
                <a href="#Blogs" onClick={(e)=> {e.preventDefault();scrollToSection ('Blogs');}}>Blogs</a>
                <a href="#Review" onClick={(e)=>{e.preventDefault(); scrollToSection ('Review');}}>Review</a>
                <a href="#Podcast" onClick={(e)=>{e.preventDefault();scrollToSection ('Podcast');}}>Podcast</a>
                <a href="#Portfolio" onClick={(e)=>{e.preventDefault();scrollToSection ('Portfolio');}}>Portfolio</a>
                <a href="#footer" onClick={(e)=>{e.preventDefault(); scrollToSection ('footer');}}>Contacts</a>
            </div>
        </div>
    
    );
}
export default Navbar;