import React, { Fragment } from "react";
import logo from "../logo.svg";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

const HomePage = (props: any) => {
  return (
    <Fragment>
      <Jumbotron>
        <div>
          <h1 className="row">Four Birds Personality test</h1>
          <p className="row">Learn more about your personality</p>
        </div>
        <div>
          <Button>Take The Test</Button>
        </div>
      </Jumbotron>
      <Container>
        <TotalTests />
        <p>Tests taken so far</p>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2>What is Four Birds?</h2>
            <p>
              The Four Birds personality test is a pop psychology quiz. Commonly
              known as DOPE birds or a variant of the DISC assessment, the test
              places you into one of four categories - Eagle, Owl, Peacock and
              Dove - each with their own defining traits and relationships with
              the other birds. Find out more about the test here:
            </p>
            <Button>About the Test</Button>
          </Col>
          <Col>
            <img src={logo} alt="" />
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
      <h3>{result}</h3>
    </Fragment>
  );
};

export default HomePage;
