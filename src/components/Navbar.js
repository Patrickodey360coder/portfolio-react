import React from "react";
import { Navbar, Container, Nav,} from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled.div`
  .navbar{
    background: #000;
    margin-bottom: 2em;
  }

  .navbar-brand, .navbar-nav, .nav-link, .navbar-toggler-icon  {
    color: #fff!important;

    &:hover {
      color: #fff
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Navbar expand="lg" className="navbar-dark">
        <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNav>
  )
}


export default Navigation;