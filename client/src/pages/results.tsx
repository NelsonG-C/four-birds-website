import React, { Fragment, useEffect, useState } from "react";

import { Row, Container } from "react-bootstrap";
import eagle from "../logo.svg";
import owl from "../logo.svg";
import peacock from "../logo.svg";
import dove from "../logo.svg";

const Birds: any = [
  {
    D: {
      name: "Eagle",
      image: eagle,
    },
    I: {
      name: "Peacock",
      image: peacock,
    },
    S: {
      name: "Dove",
      image: dove,
    },
    C: {
      name: "Owl",
      image: owl,
    },
  },
];

export const ResultsPage = () => {
  const [results, setResult] = useState<any>([]);

  const resultData = async () => {
    try {
      const response = await fetch("http://localhost:5000/result", {
        method: "GET",
      });
      console.log(response.body);
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log("Now using effect");
    resultData();
  }, []);

  console.log("Results", results);

  if (results.length == 0) {
    console.log("In here");
    return <div></div>;
  } else {
    const letter: any = results[0].top_result;
    console.log(letter);
    const bird: any = Birds[0][letter];
    console.log(bird);
    return (
      <Fragment>
        <h2>Results Time!</h2>
        <h3>Your main bird type is...</h3>
        <Container>
          <Row>
            <h3>{bird.name}</h3>
          </Row>
          <Row>
            <img src={bird.image} alt="" />
          </Row>
        </Container>
      </Fragment>
    );
  }
};

//could add in details about the bird here at a later date
