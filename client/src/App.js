import React from "react";
import Home from "./pages/Home/home.js";
import Classes from "./pages/Classes/classes.js";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import "./App.css"
import Nav from "./components/Nav/nav.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/classes" component={Classes} />
{/*           <Route exact path="/home" component={Books} />
          <Route exact path="/books/:id" children={<Detail />} />
          <Route path="*" component={NoMatch} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
