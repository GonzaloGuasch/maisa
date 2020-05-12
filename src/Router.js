import React from 'react'
import App from './App' 
import Pulseras from './Pulseras'
import Aros from './Aros.js'
import Gargantilla from './Gargantilla.js'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function Router(){
    return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/Pulseras" component={Pulseras}/>
          <Route exact path="/Cadenas" component={App}/>
          <Route exact path="/Colgantes" component={App}/>
          <Route exact path="/Gargantilla" component={Gargantilla}/>
          <Route exact path="/Aros" component={Aros}/>
          <Route exact path="/SobreNosotros" component={App}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Router

