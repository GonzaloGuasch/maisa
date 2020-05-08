import React from 'react'
import { Slide } from 'react-slideshow-image';
import './Carrusel.css'

const slideImages = [
    "http://cdn3.upsocl.com/wp-content/uploads/2019/05/Johnny-Bravo-hVKMu1juz-b.jpg",
    "http://cdn3.upsocl.com/wp-content/uploads/2019/05/Johnny-Bravo-hVKMu1juz-b.jpg",
    "http://cdn3.upsocl.com/wp-content/uploads/2019/05/Johnny-Bravo-hVKMu1juz-b.jpg"
  ];
   
  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    
  }


function Carrusel(){
    return( <div className="slide-container">
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
        </div>
      </div>
    </Slide>
  </div>
)
}

export default Carrusel