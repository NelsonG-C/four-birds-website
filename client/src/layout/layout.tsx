import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";

export const Layout = (props: any) => {
  return (
    <div>
      <header>
        <Navbar className="bg-light" expand="lg">
          <Navbar.Brand>
            <img
              src={logo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Four Birds
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">The Birds</Nav.Link>
              <Nav.Link href="">Data</Nav.Link>
              <Nav.Link href="">Login</Nav.Link>
              <Nav.Link href="">Take The Test</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <body>
        <div>{props.children}</div>
      </body>
      <footer>
        <Container>
          <p>Created By Nelson GC</p>
          <p>Built with React</p>
        </Container>
      </footer>
    </div>
  );
};
