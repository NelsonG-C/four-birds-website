import React, { Fragment } from "react";
import { Container, Button } from "react-bootstrap";

export const AboutPage = () => {
  return (
    <Fragment>
      <Container className="about-container">
        <h2>About the test</h2>
        <h3>What is the Four Birds test?</h3>
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
        <h3>Can I trust this test?</h3>
        <p>This test uses open source test data provided by</p>
        <Button
          href="https://openpsychometrics.org/tests/ODAT/development/"
          target="__blank"
        >
          Test Data
        </Button>
        <h3>How was this test developed?</h3>
        <p>This test uses the open source psychometrics question data from</p>

        <h3>Other Tests</h3>
        <p>Looking for more personality tests?</p>
        <p>
          Try the OCEAN test, which is the most scientifically sound personality
          test available
        </p>
        <p>Follow the link below</p>
        <Button
          href="https://openpsychometrics.org/tests/ODAT/"
          target="__blank"
        >
          OCEAN test
        </Button>
      </Container>
    </Fragment>
  );
};
