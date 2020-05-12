import React, { Fragment } from 'react'
import './Aros.css'
import NavBar from './navBar'
import aroUno from '../src/images/aros_uno.jpeg'
import aroDos from '../src/images/aros_dos.jpeg'
import aroTres from '../src/images/aros_tres.jpeg'
import aroCuatro from '../src/images/aros_cuatro.jpeg'

export default function Aros(){
    return(
        <Fragment>
            <NavBar/>
            <div className="image-description-container-uno">
                <div>
                    <img src={aroUno} className="aros-container"/>
                </div>
                <div className="description-container">Aros Nefertari medianos. Plata 925. $800</div>
            </div>

            <div className="image-description-container">
                <div >
                    <img src={aroDos} className="aros-container"/>
                </div>
                <div className="description-container">Aros trepadores. Plata 925. $700</div>
            </div>

            <div className="image-description-container">
                <div >
                    <img src={aroTres} className="aros-container"/>
                </div>
                <div className="description-container">Aros argolla chica con dije. Plata 925. $400</div>
            </div>

            <div className="image-description-container">
                <div >
                    <img src={aroCuatro} className="aros-container"/>
                </div>
                <div className="description-container">Aros argolla chicos. Plata 925. $300</div>
            </div>

        </Fragment>
    );
}