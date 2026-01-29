import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar expand="lg" sticky="top"
    style={{
            background: "transparent",   // or "rgba(255,255,255,0.6)"
            backdropFilter: "blur(2px)", // optional, nice glass effect
            padding: "16px 24px",
            color: "#0f172a",
            borderBottom: "2px solid rgba(0,0,0,0.08)"
          }}>
      <Container fluid>
        <Navbar.Brand href="#">S.ALSUWAIDI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/projects">All Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action3">KnowledgeVerse</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                CS50
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                3D Modeling
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Drawing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/random">placeholder</Nav.Link>

            <Nav.Link href="/private">private</Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header