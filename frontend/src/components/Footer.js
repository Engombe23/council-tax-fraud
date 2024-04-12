import React from 'react'
import {Nav, Container, Row, Col, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer class="mt-auto">
      <Container fluid>
        <Row>
          <Col>
            <p><span>&copy;</span> 2024 Council Tax Fraud. All rights reserved.</p>
          </Col>
          <Col>
            <Nav className='flex-column fs-5'>
              Useful Links
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
