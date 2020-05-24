import React from 'react'
import { Slide } from 'react-slideshow-image';
import './Carrusel.css'
import collarUno from '../src/images/collar_seis.jpeg'
import collarDos from '../src/images/collar_dos.jpeg'
import collarTres from '../src/images/collar_tres.jpeg'

const slideImages = [
    collarUno,
    collarDos, 
    collarTres
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
        <div style={{'backgroundImage': `url(${slideImages[0]})`,
        'backgroundSize':'contain'}}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`,
        'backgroundSize':'contain'}}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`,
        'backgroundSize':'contain'}}>
        </div>
      </div>
    </Slide>
  </div>
)
}

export default Carrusel