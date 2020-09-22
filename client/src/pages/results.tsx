import React, { Fragment, useEffect, useState } from "react";

import { Row, Container } from "react-bootstrap";
import Birds from "../layout/birddata";

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
    return <div>Meow</div>;
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
