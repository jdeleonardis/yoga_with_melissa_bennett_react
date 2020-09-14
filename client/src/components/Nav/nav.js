import React from "react";
import {Link} from "react-router-dom";
import "./nav.css"
//import * as ROUTES from '../../constants/routes'; 
//import * as Routes from '../../../public/Assets/'
 
const Nav = () => (

  <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark d-flex flex-row">
    <a href="/" className="navbar-brand navbar-image d-flex justify-content-center mx-auto">
      <img src="../../Assets/MB-Vet-Logo.jpg" alt="Yoga With Melissa Bennet Logo"></img>
    </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>      

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto text-right">
        <li className="nav-item active mr-3">
          <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item mr-3">
          <a className="nav-link" href="/classes">Classes<span className="sr-only">(current)</span></a>
        </li>
        {/* <li class="nav-item mr-3">
          <a class="nav-link" href="resources.html">Resources<span class="sr-only">(current)</span></a>
        </li>                          
        <li class="nav-item mr-3">
          <a class="nav-link" href="about.html">About Melissa<span class="sr-only">(current)</span></a>
        </li>          
        <li class="nav-item mr-3">
          <a class="nav-link" href="contact.html">Contact<span class="sr-only">(current)</span></a>
        </li>                           */}
      </ul>
    </div>

  </nav>



);
 
export default Nav;
