import React from "react";
import Home from "./pages/Home/home.js";
import Classes from "./pages/Classes/classes.js";
import Resources from "./pages/Resources/resources.js";
import About from "./pages/About/about.js";
import Contact from "./pages/Contact/contact.js";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import "./App.css"
import NavComponent from "./components/NavComponent/navcomponent.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <NavComponent/>
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/classes" component={Classes} />
//             <Route exact path="/resources" component={Resources} />
//             <Route exact path="/aboutmelissa" component={About} />          
//             <Route exact path="/contact" component={Contact} />                    
//             <Route exact path="/admin" component={Classes} />                              
//         </Switch>
//         <Footer/>
//       </div>
//     </BrowserRouter>
//   );
  return (
        <BrowserRouter>
          <div className="Site">
            
                <NavComponent/>
        <div className="Site-content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/classes" component={Classes} />
                    <Route exact path="/resources" component={Resources} />
                    <Route exact path="/aboutmelissa" component={About} />          
                    <Route exact path="/contact" component={Contact} />                    
                    <Route exact path="/admin" component={Classes} />                              
                </Switch>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
      );
}
export default App;
