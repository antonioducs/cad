    
import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";


import Main from "../pages/Main";
import Login from "../pages/Login";
import ControlInsc from "../pages/ControlInsc";
import Info from "../pages/Info";
import CadAdm from "../pages/CadAdm";

class Router extends Component {
  render() {
    return (
      
      <HashRouter  basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/admin" component={Login} />
          <Route path="/view/:user" component={ControlInsc} />
          <Route path="/info/:user/:id" component={Info} />
          <Route path="/cadAdm/:user" component={CadAdm} />
          </Switch>
      </HashRouter>
    );
  }
}

export default Router;