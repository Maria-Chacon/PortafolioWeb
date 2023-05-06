import React from "react";
import { Navbar, Nav } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
      <Navbar.Brand  className="ml-3" href="#home">MACHAM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto" >
          <Nav.Link href="#about">Sobre mi</Nav.Link>
          <Nav.Link href="#projects">Mis Proyectos</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;