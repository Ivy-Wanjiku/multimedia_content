import React from 'react';
import './index.css'

const Portfolio =()=>{
 return(
    <div id='Portfolio'>
    <div className='whole'>
        <div>
            <h1 className='team'>OUR TEAM</h1>
        </div>
        <div className='images'>
            <div className='top'>
        <div className='ivy'>
           <img src='pics/ivy.png' alt='Ivy' className='pic'/>
           <figcaption>Ivy Wanjiku</figcaption>
           <figcaption>Software Developer</figcaption>
           <figcaption >Nationality:Kenyan</figcaption>
           <figcaption className='port'>< >View Portfolio</></figcaption>
           </div>
           <div className='fanny'>
           <img src='pics/fanny.png' alt='Fanny' className='pic'/>
           <figcaption>Ingabire Fanny</figcaption>
           <figcaption>Software Developer</figcaption>
           <figcaption >Nationality:Rwandan</figcaption>
           <figcaption className='port'><a href='https://fanny-portfolio-ashy.vercel.app/' >View Portfolio</a></figcaption>
           
           </div>
           </div>
           <div className='akwang'>
           <img src='pics/akwang.png' alt='Akwang' className='pic'/>
           <figcaption>Akwang Deu</figcaption>
           <figcaption>Software Developer</figcaption>
           <figcaption >Nationality:Kenyan</figcaption>
           <figcaption className='port'><a href='' >View Portfolio</a></figcaption>
           </div>
           <div className='bottom'>
           <div className='ajema'>
           <img src='pics/ajema.png' alt='Ajema'className='pic'/>
           <figcaption>Ajema Agnes</figcaption>
           <figcaption>Software Developer</figcaption>
           <figcaption >Nationality:Kenyan</figcaption>
           <figcaption className='port'><a href='https://myportfolio-eosin-eight.vercel.app/' >View Portfolio</a></figcaption>
           </div>
           <div className='raziah'>
           <img src='pics/raziah.png' alt='Raziah' className='pic'/>
           <figcaption>Raziah Abdulahi</figcaption>
           <figcaption>Software Developer</figcaption>
           <figcaption >Nationality:Kenyan</figcaption>
           <figcaption className='port'>Portfolio</figcaption>
           </div>
           </div>
        </div>
                  
    </div>
    </div>

 ) ;  
}

export default Portfolio;