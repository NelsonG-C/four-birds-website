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
          <p>
            While many of the traits associated with each bird can be present in
            others, this test is a general indication of which traits are often
            dominant in the personality type.
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
                The Eagle is considered to have{" "}
                <b>
                  high logical intelligence and to be very active in
                  communication.
                </b>
                They are often found to be the leaders, results orientated
                people who act with dominance and quick decision making. Eagles
                are more likely to be driven by facts, rather than the emotion
                of the situation
              </p>
              <p>
                Some words commonly associated with this personality type are:
                Extrovert, Driven, Egotistical, Leadership, Impatient, Decisive,
                Action-orientated, Insensitive.
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
                The Owl is considered to have{" "}
                <b>
                  high logical intelligence and to be very passive with
                  communication.
                </b>
                The analysts of the birds, Owls are often methodical and well
                organised. They are very detail orientated, guided by their
                careful and curious nature. They find facts convincing, and have
                no issue taking time to make a decision.
              </p>
              <p>
                Some words commonly associated with Owls are: <br />
                Diligent, Determined, Analytical, Indecisive, Introverted, Calm,
                Logical
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
                The Peacock is considered to have{" "}
                <b>
                  high emotional intelligence and to be very active with
                  communication.
                </b>
                Always the showbird, Peacocks are talkative, bringing their
                energy into conversations and quick decisions. Peacocks love a
                story, whether sharing or hearing, and often associate with
                roles such as Marketers and Salespeople for example.
              </p>
              <p>
                Some words commonly associated with Peacocks are: <br />
                Vibrant, Social, Emotional, Dominating, Talkative, Charismatic.
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
                The Dove is considered to have{" "}
                <b>
                  high emotional intelligence and to be very passive in
                  communicating.
                </b>
                The team player, Doves are known as the caring type of the
                birds, bringing their people skills together with a sympathetic
                and supportive ear. Doves are reliable and trustworthy, but
                often passive and more likely to avoid confrontation like Owls.
              </p>
              <p>
                Some words commonly associated with Owls are: <br />
                Honest, Reliable, Dependent, Follower, Giving, Patient
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
