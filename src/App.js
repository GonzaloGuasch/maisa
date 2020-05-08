import React, {Fragment} from 'react';
import NavBar from './navBar'
import Carrusel from './Carrusel'
import Catalogo from './Catalogo'
import './maisa.css';

function App() {
  return (
      <Fragment>
        <div>
        <NavBar/>
        <div className="logo-container">LOGO</div>
        </div>
        <Carrusel/>
        <Catalogo/>
      </Fragment>
  );
}

export default App;
 
//footer