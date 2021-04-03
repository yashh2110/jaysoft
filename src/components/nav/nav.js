import React, { useEffect, useRef } from 'react';
import Logo from '../../images/logo.png'
import "./nav.css";
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Link as Sl} from "react-scroll"
function MainNav() {
  const navbar = useRef(null)
  useEffect(()=>{
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.current.style.top = "0";
      } else {
        navbar.current.style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    }
  },[])
    return (
        <Navbar ref={navbar} collapseOnSelect expand="lg" style={{transition:"0.4s"}} sticky="top" bg="light" variant="light">
        <Navbar.Brand ><img src={Logo}width="60" alt="Logo"></img> <b style={{color:"#35D027"}}>Jay</b><b style={{color:"#C93838"}}>Soft</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link  ><Link className="text-dark" to="/">Home</Link></Nav.Link>
            <Nav.Link className="text-dark" >
              <Sl className = 'link text-dark' 
                underline = 'none'
                to="about"
                spy={true}
                smooth={true}
                duration={500}><Link className="text-dark" to="/home">
                  About Us
                  </Link>
                </Sl>
              </Nav.Link>
            <Nav.Link className="text-dark" ><Link className="text-dark" to="/contactus">Contact Us</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-dark" ><Link className="text-dark" to="/services">Services</Link></Nav.Link>
            {/* <Nav.Link className="text-dark" eventKey={2} >
              Clients
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
</Navbar>
    )
}

export default MainNav
