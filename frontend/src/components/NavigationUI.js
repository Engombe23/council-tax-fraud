import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavigationUI() {
  return (
    <>
    <Navbar expand="lg" fixed='top' bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>Council Tax Fraud</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse>
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/links"}>Links</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/legislation"}>Legislation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/learning"}>Learning More</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/lawful-remedies"}>Lawful Remedies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/letters"}>Letters and Templates</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationUI
