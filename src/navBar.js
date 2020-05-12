import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import logo from '../src/images/maisa2.0.png'
function NavBar(){
    return(
        <div className="navBar-container">
        <ul>
            <li><img src={logo} height="60px" width="60px"/></li>
            <li><Link to= "/" className="pestaña-container">Home</Link></li>
            <li><Link to= "/Pulseras" className="pestaña-container">Pulseras</Link></li>
            <li><Link to= "/Pulseras" className="pestaña-container">Cadenas</Link></li>
            <li><Link to= "/Colgantes" className="pestaña-container">Colgantes</Link></li>
            <li><Link to= "/Gargantilla" className="pestaña-container">Gargantillas</Link></li>
            <li><Link to= "/Aros" className="pestaña-container">Aros</Link></li>
           
        </ul> </div>
           )
}


export default NavBar;