import React from "react";
import {useLocation} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./NavComponent.css"
 
function NavComponent() {
  const location = useLocation();

  // const [loggedInStatus, setLoginStatus] = useState([false]); 

  // useEffect(() => {
  //   fetch('api/token')
  //   .then(res => {
  //     //alert(res.status)
  //     if (res.status === 200) {
  //       setLoginStatus(true)
  //     } else {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     setLoginStatus(false)
  //   });
  // }, [loggedInStatus]); 

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
          {/* <Nav.Link id="link" href="/test" className={location.pathname === "/test" ? "active" : "inactive"}>Test Link</Nav.Link>   */}
          {/* <Nav.Link id="link" href="/login" className={location.pathname === "/login" ? "active" : "inactive"}>Admin</Nav.Link>                   */}
          <Nav.Link id="link" href="/adminhome" className={location.pathname === "/adminhome" || location.pathname === "/login" ? "active" : "inactive"}>Admin</Nav.Link>   
          
          {/* {(loggedInStatus) ?   
          <Nav.Link id="link" href="/adminhome" className={location.pathname === "/adminhome" ? "active" : "inactive"}>Logout</Nav.Link>  
          :
          null  
          }     */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}; 
export default NavComponent;
