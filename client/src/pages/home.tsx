import React, { Fragment } from "react";
import logo from "../images/fourbirds.png";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = (props: any) => {
  return (
    <Fragment>
      <Jumbotron>
        <div className="jumbo-cover">
          <h1>Four Birds Personality test</h1>
          <p>Learn more about your personality</p>
        </div>
        <div>
          <Button>
            <Link to="/test" color="white">
              Take The Test
            </Link>
          </Button>
        </div>
      </Jumbotron>
      <Container>
        <TotalTests />
      </Container>
      <Container>
        <Row>
          <Col className="home-about" md={12} lg={6}>
            <h2>What is Four Birds?</h2>
            <p>
              The Four Birds personality test is a pop psychology quiz. Commonly
              known as DOPE birds or a variant of the DISC assessment, the test
              places you into one of four categories - Eagle, Owl, Peacock and
              Dove - each with their own defining traits and relationships with
              the other birds. Find out more about the test here:
            </p>
            <Button className="about-test-btn">
              <Link to="/about">About the Test</Link>
            </Button>
          </Col>
          <Col>
            <img className="fourbirds" src={logo} alt="" />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const TotalTests = (props: any) => {
  //handling calculation in backend
  //will want to move into own component folder for reuse
  //TODO
  const result = props.total;
  return (
    <Fragment>
      <div className="totalTests">
        <h3>3000</h3>
        <h3>tests taken so far</h3>
      </div>
    </Fragment>
  );
};

export default HomePage;
