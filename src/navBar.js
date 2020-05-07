import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar(){
    return(
        <div className="navBar-container">
        <ul>
            <li><Link to= "/Pulseras" className="pestaña-container">Pulseras</Link></li>
            <li><Link to= "/Pulseras" className="pestaña-container">Caenas</Link></li>
            <li><Link to= "/Colgantes" className="pestaña-container">Colgantes</Link></li>
            <li><Link to= "/Gargantilla" className="pestaña-container">Gargantillas</Link></li>
            <li><Link to= "/Aros" className="pestaña-container">Aros</Link></li>
        </ul> </div>
           )
}


export default NavBar;