import React from "react";
import Home from "./pages/Home/home.js";
import Classes from "./pages/Classes/classes.js";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import "./App.css"
import NavComponent from "./components/NavComponent/navcomponent.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavComponent/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/resources" component={Home} />
          <Route exact path="/aboutmelissa" component={Classes} />          
          <Route exact path="/contact" component={Classes} />                    
          <Route exact path="/admin" component={Classes} />                              
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
