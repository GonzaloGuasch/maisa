import React, { Fragment } from 'react'
import './Catalogo.css'
import collarNueve from '../src/images/collar_nueve.jpeg'
import collarDoce from '../src/images/collar_doce.jpeg'
import collarSiete from '../src/images/collar_siete.jpeg'
import collarTrece from '../src/images/collar_trece.jpeg'
import collarCero from '../src/images/collar_cero.jpeg'
import gargantillaUno from '../src/images/gargantilla_uno.jpeg'

function Catalogo(){
    return(<Fragment>
        <div className="fila">
        <div className="columna">
         <div className="flip-card">
           <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={collarNueve} alt="Avatar" width="345px;" height="345px;"/>
               </div>
            <div className="flip-card-back">
                <p className="nombre-producto">Cadena Nudo masiza con cierre marinero</p>
                <p>Plata 925</p> 
                <p>$3700</p>
            </div>
        </div>
        </div> 
        </div>
        <div className="columna">
         <div className="flip-card">
           <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={collarDoce} alt="Avatar" width="345px;" height="345px;"/>
               </div>
            <div className="flip-card-back">
            <p className="nombre-producto">Colgante Nefertari</p> 
            <p>Plata 925 </p>
            <p>$1100</p>
                
            </div>
        </div>
        </div> 
        </div>
        <div className="columna">
         <div className="flip-card">
           <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={collarSiete} alt="Avatar" width="345px;" height="345px;"/>
               </div>
            <div className="flip-card-back">
                <p className="nombre-producto">Cadena de plata 925</p>
                <p>dije de plata Corazón con cubics</p>
                  <p>$900</p>
            </div>
        </div>
        </div> 
        </div>
        </div>
        <div className="fila">
        <div className="columna">
         <div className="flip-card">
           <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={collarTrece} alt="Avatar" width="345px;" height="345px;"/>
               </div>
            <div className="flip-card-back">
                <p className="nombre-producto">Cadena triple corazón </p>
                <p> Plata 925</p>
                <p>  $550 </p>
                <p>  Cadena Cubic</p>
                <p>  Plata 925</p>
                <p>  $900</p>
            </div>
        </div>
        </div> 
        </div>
        <div className="columna">
         <div className="flip-card">
           <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={collarCero} alt="Avatar" width="345px;" height="345px;"/>
               </div>
            <div className="flip-card-back">
                <p className="nombre-producto">Colgante Paris largo</p>
                <p> Plata 925</p>
                <p> $950</p>
            </div>
        </div>
        </div> 
        </div>
        <div className="columna">
         <div className="flip-card">
           <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={gargantillaUno} alt="Avatar" width="345px;" height="345px;"/>
               </div>
            <div className="flip-card-back">
                <p className="nombre-producto">Gargantilla con pequeñas esferas </p>
                <p> Plata 925</p>
                <p>  $600</p>
                <p className="nombre-producto"> Gargantilla conos</p>
                <p>  Plata 925</p>
                <p>  $650</p>
            </div>
        </div>
        </div> 
        </div>
        </div>
        </Fragment>)
}

export default Catalogo




