import React from "react";
//import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./navcomponent.css"
//import * as ROUTES from '../../constants/routes'; 
//import * as Routes from '../../../public/Assets/'
 
function NavComponent() {
const location = useLocation();

return (
<Navbar id="nav" collapseOnSelect expand="lg" variant="dark" fixed="top">
  <Navbar.Brand href="/">
      <img
        src="../../Assets/MB-Vet-Logo.jpg"
        id="navbar-image"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link id="link" href="/" className={location.pathname === "/" ? "active" : "inactive"}>Home</Nav.Link>
      <Nav.Link id="link" href="/classes" className={location.pathname === "/classes" ? "active" : "inactive"}>Classes</Nav.Link>
      <Nav.Link id="link" href="/resources" className={location.pathname === "/resources" ? "active" : "inactive"}>Resources</Nav.Link>
      <Nav.Link id="link" href="/aboutmelissa" className={location.pathname === "/aboutmelissa" ? "active" : "inactive"}>About Melissa</Nav.Link>      
      <Nav.Link id="link" href="/contact" className={location.pathname === "/contact" ? "active" : "inactive"}>Contact</Nav.Link>            
      <Nav.Link id="link" href="/admin" className={location.pathname === "/admin" ? "active" : "inactive"}>Admin</Nav.Link>                  
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}; 
export default NavComponent;
