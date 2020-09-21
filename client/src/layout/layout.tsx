import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import { Switch, Route, Link } from "react-router-dom";

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
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/birds">The Birds</Nav.Link>
              <Nav.Link href="/data">Data</Nav.Link>
              <Nav.Link href="">Login</Nav.Link>
              <Nav.Link href="/test">Take The Test</Nav.Link>
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
