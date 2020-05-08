import React, { Fragment } from 'react'
import './Pulseras.css'
import NavBar from './navBar'


function Pulseras(){
    return(
        <Fragment>
            <NavBar></NavBar>
            <div className="pulseras-container">
            
             <div className="image-container">
                 <img src="http://cdn3.upsocl.com/wp-content/uploads/2019/05/Johnny-Bravo-hVKMu1juz-b.jpg" width="300px" height="300px"/>
              </div>
              <div className="descripcion">
                Soy jhonny bravo xd
              </div>
            </div>
            <div className="pulseras-container">
            
             <div className="image-container">
                 <img src="http://cdn3.upsocl.com/wp-content/uploads/2019/05/Johnny-Bravo-hVKMu1juz-b.jpg" width="300px" height="300px"/>
              </div>
              <div className="descripcion">
                Soy jhonny bravo xd
              </div>
            </div><div className="pulseras-container">
            
            <div className="image-container">
                <img src="http://cdn3.upsocl.com/wp-content/uploads/2019/05/Johnny-Bravo-hVKMu1juz-b.jpg" width="300px" height="300px"/>
             </div>
             <div className="descripcion">
               Soy jhonny bravo xd
             </div>
           </div>
        </Fragment>
    )
}

export default Pulseras