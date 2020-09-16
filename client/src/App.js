import React from "react";
import Home from "./pages/Home/Home.js";
import Classes from "./pages/Classes/Classes.js";
import Resources from "./pages/Resources/Resources.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import "./App.css"
import NavComponent from "./components/NavComponent/NavComponent.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavComponent/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/aboutmelissa" component={About} />          
            <Route exact path="/contact" component={Contact} />                    
            <Route exact path="/admin" component={Classes} />                              
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
