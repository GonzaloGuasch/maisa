import React, { Fragment } from 'react'
import './Pulseras.css'
import NavBar from './navBar'
import pulseraUno from '../src/images/pulsera_uno.jpeg'
import pulseraDos from '../src/images/pulsera_dos.jpeg'


function Pulseras(){
    return(
        <Fragment>
            <NavBar></NavBar>
            <div className="pulseras-container">
             <div className="image-container">
                 <img src={pulseraUno} className="img-pulsera"/>
              </div>
              <div className="descripcion">
              De izquierda a derecha: 
              <ul>
              <li>-Pulsera Visión. Plata 925. $500. </li>
              <li>-Pulsera Plata 925 rodinada y oro. $800. </li>
              <li>-Pulsera Ramses. Plata 925 y oro. Ideal para grabar. $1700. </li>
              <li>-Pulsera Rose torzada.Plata 925. $900.</li>
              <li>-Pulsera Dua. Plata 925. $1100 </li>
               </ul>
              </div>
            </div>
            <div className="pulseras-container">
            
             <div className="image-container">
             <img src={pulseraDos} className="img-pulsera"/>
              </div>
              <div className="descripcion">
                <ul>
              De izquierda a derecha: 
              <li>- Pulsera Doble eslabón con cierre marinero. Plata 925 masiza. $2900 </li>
              <li>- Pulsera Roló con cierre marinero. Plata 925. $1500 </li>
              <li>- Pulsera eslabón nudo con cierre marinero. Plata 925 masiza. $2760.</li> 
              <li>- Pulsera timón. Plata 925. $1500. </li>
              <li> - Pulsera Olivia. Plata 925. $1800. </li>
              <li>- Pulsera Lara. Plata 925. $980. </li>
              <li>- Pulsera Soga gruesa. Plata 925 rodinada. $900. </li>
              <li>- Pulsera Soga fina. Plata 925 rodinada. $800.</li>
              </ul>
              </div>
            </div>
        </Fragment>
    )
}

export default Pulseras