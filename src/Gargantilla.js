import React, { Fragment } from 'react'
import './Gargantilla.css'
import NavBar from './navBar'
import gargantillaUno from './images/gargantilla_uno.jpeg'

export default function Gargantilla(){
    return(
        <Fragment>
        <NavBar/>
        <div className="gargantilla-description-container">
             <div><img src={gargantillaUno} width="400px" heigh="300px"/></div>
             <div className="description-gargantilla">
              <div className="description-uno-gargantilla">Gargantilla con pequeñas esferas. Plata 925. $600.</div>    
              <div>Gargantilla conos. Plata 925. $650</div>
             </div>
        </div>  
        </Fragment>
    );
}