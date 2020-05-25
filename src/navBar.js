import React, { Fragment } from 'react'
import './NavBar.css'
import logo from '../src/images/logo.jpg'
function NavBar(){
    return(
        <Fragment>
                <div class="topnav" id="myTopnav">
                    <a href="/" class="active">Inicio</a>
                    <a href="/Pulseras">Pulseras</a>
                    <a href="/Gargantilla">Gargantillas</a>
                    <a href="/Aros">Aros</a>
                </div>
            </Fragment>
           )
}

export default NavBar;


