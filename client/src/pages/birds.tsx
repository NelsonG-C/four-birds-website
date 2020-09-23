import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Birds from "../layout/birddata";

export const BirdsPage = () => {
  return (
    <Fragment>
      <Container className="birds">
        <div className="bird-heading">
          <h2>The Birds</h2>
          <p>
            Read below to learn about each bird and their related personality
            traits
          </p>
        </div>
        <div className="bird-text">
          <Row>
            <Col md={12} lg={6}>
              <img src={Birds[0]["D"].image} alt="" />
            </Col>
            <Col md={12} lg={6}>
              <h3>The Eagle</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                quibusdam cumque dicta eos rerum in hic odio repudiandae
                possimus est vitae ullam modi iure necessitatibus corrupti,
                neque ut at minima?
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <img src={Birds[0]["C"].image} alt="" />
            </Col>
            <Col md={12} lg={6}>
              <h3>The Owl</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                quibusdam cumque dicta eos rerum in hic odio repudiandae
                possimus est vitae ullam modi iure necessitatibus corrupti,
                neque ut at minima?
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <img src={Birds[0]["I"].image} alt="" />
            </Col>
            <Col md={12} lg={6}>
              <h3>The Peacock</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                quibusdam cumque dicta eos rerum in hic odio repudiandae
                possimus est vitae ullam modi iure necessitatibus corrupti,
                neque ut at minima?
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <img src={Birds[0]["S"].image} alt="" />
            </Col>
            <Col md={12} lg={6}>
              <h3>The Dove</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                quibusdam cumque dicta eos rerum in hic odio repudiandae
                possimus est vitae ullam modi iure necessitatibus corrupti,
                neque ut at minima?
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
