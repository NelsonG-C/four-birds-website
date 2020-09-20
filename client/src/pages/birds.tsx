import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../logo.svg";

export const BirdsPage = () => {
  return (
    <Fragment>
      <h2>The Birds</h2>
      <p>
        Read below to learn about each bird and their related personality traits
      </p>
      <Row>
        <Col>
          <img src={logo} alt="" />
        </Col>
        <Col>
          <h3>The Eagle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            quibusdam cumque dicta eos rerum in hic odio repudiandae possimus
            est vitae ullam modi iure necessitatibus corrupti, neque ut at
            minima?
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>The Owl</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            quibusdam cumque dicta eos rerum in hic odio repudiandae possimus
            est vitae ullam modi iure necessitatibus corrupti, neque ut at
            minima?
          </p>
        </Col>
        <Col>
          <img src={logo} alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={logo} alt="" />
        </Col>
        <Col>
          <h3>The Peacock</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            quibusdam cumque dicta eos rerum in hic odio repudiandae possimus
            est vitae ullam modi iure necessitatibus corrupti, neque ut at
            minima?
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>The Dove</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            quibusdam cumque dicta eos rerum in hic odio repudiandae possimus
            est vitae ullam modi iure necessitatibus corrupti, neque ut at
            minima?
          </p>
        </Col>
        <Col>
          <img src={logo} alt="" />
        </Col>
      </Row>
    </Fragment>
  );
};
