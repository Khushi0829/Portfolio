import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap"
import CustomButton from './CustomButton';
import './CustomButton.css'

import "./Navbar.css"
import { useState } from 'react';

import Hero from './Hero';



const MyNavbar = () => {
    const [active, setActive] = useState("home");

    const scrollToSection = (id) => {
  setActive(id);

  const element = document.getElementById(id);
  if(element){
    element.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  } 
};

  return (

    <section className='nav-section'>

        <Navbar className="glass-navbar" expand="lg" >

          <div className="container">
            
            <Navbar.Brand style={{ fontWeight: "bold" }} onClick={() => scrollToSection("home")}>
                Portfolio
            </Navbar.Brand>

             {/* Toggle for mobile */}
             
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             
              <Navbar.Collapse id="basic-navbar-nav">

                {/* Center Menu */}
                <Nav className="mx-auto">
                  <Nav.Link onClick={() => scrollToSection("home")} className={active === "home" ? "active" : ""}>Home</Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("about")}
                    className={active === "about" ? "active" : ""}>About</Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("about")}
                    className={active === "skills" ? "active" : ""}>Skills</Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("projects")}
                    className={active === "projects" ? "active" : ""}>Projects</Nav.Link>

                </Nav>
                {/* Right Button */}
                  <CustomButton text="Contact" className="custom-btn" onClick={() => scrollToSection("projects")}  />

              </Navbar.Collapse>
          </div>

        </Navbar>

        <Hero />

    </section>
  );
};

export default MyNavbar;
