import React, {Fragment} from 'react'
import NavBar from './navBar'
import './NavBarPestaña.css'


function NavBarPestañas(){
    return(<Fragment>
        
        <NavBar></NavBar>
        <a href="/" className="button-home">HOME</a>
        </Fragment>     
    )
}

export default NavBarPestañas