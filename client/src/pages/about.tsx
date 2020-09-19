import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Fragment>
      <Container>
        <h2>What is the Four Birds test?</h2>
        <p>
          The four birds test is a pop psychology personality test. Based off
          the DISC model of personality types, this test has been adapted to
          birds - represented by the Eagle, Owl, Peacock and Dove.
        </p>
        <p>The test is also commonly known as the DOPE bird test</p>
        <p>
          Please note that this is a POP psychology test. It is not
          scientifically rigorous.
        </p>
      </Container>
      <Container>
        <h3>How does the test work?</h3>
        <p>
          The test will ask you 16 questions, each attuned to a specific bird of
          the test. Once you have provided your answers, your bird type will be
          determined by which type you scored the highest value in (e.g. The
          strongest agreeance with)
        </p>
        <p>
          Each bird has their own strengths and weaknesses that are primarily
          associated with that type.
        </p>
      </Container>
      <Container>
        <h3>Can I trust this test?</h3>
        <p>This test uses open source test data provided by</p>
        <p>Here is the link</p>
      </Container>
    </Fragment>
  );
};
