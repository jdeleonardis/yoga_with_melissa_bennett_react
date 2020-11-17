import React from "react";
import Home from "./pages/Home/Home.js";
import Classes from "./pages/Classes/Classes.js";
import Resources from "./pages/Resources/Resources.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Login from "./pages/Login/Login.js"
import AdminHome from "./pages/AdminHome/AdminHome.js"
import "./App.css"
import NavComponent from "./components/NavComponent/NavComponent.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import withAuth from '../src/utils/withAuth.js'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavComponent/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/resources" component={Resources} />
            {/* <Route exact path="/aboutmelissa" component={About} />           */}
            <Route exact path="/contact" component={Contact} />                    
            <Route exact path="/login" component={Login} />                              
            <Route exact path="/adminhome" component={withAuth(AdminHome)} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
