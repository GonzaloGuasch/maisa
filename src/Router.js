import React from 'react'
import App from './App' 
import Pulseras from './Pulseras'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function Router(){
    return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/Pulseras" component={Pulseras}/>
          <Route exact path="/Cadenas" component={App}/>
          <Route exact path="/Colgantes" component={App}/>
          <Route exact path="/Gargantillas" component={App}/>
          <Route exact path="/Aros" component={App}/>
          <Route exact path="/SobreNosotros" component={App}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Router

