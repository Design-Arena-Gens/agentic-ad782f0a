import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaTshirt } from 'react-icons/fa';

function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaTshirt className="me-2" />
          VirtualTryOn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tryon">
              Try On
            </Nav.Link>
            <Nav.Link as={NavLink} to="/collection">
              Collection
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
