import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const { toggleCartHandler } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>{props.name}</Navbar.Brand>
        <Cart onClick={toggleCartHandler} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Store">
              Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
