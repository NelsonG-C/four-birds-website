import React, { Fragment, useEffect, useState } from "react";

import { Row, Container } from "react-bootstrap";
import Birds from "../layout/birddata";

export const ResultsPage = () => {
  const [results, setResult] = useState<any>([]);

  const resultData = async () => {
    try {
      const response = await fetch("/resultData", {
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
    const letter: any = results.top_result;
    console.log(letter);
    const bird: any = Birds[0][letter];
    console.log(bird);
    return (
      <Fragment>
        <div className="result-heading">
          <h2>Results Time!</h2>
          <h3>Your main bird type is...</h3>
        </div>
        <Row>
          <h3 className="results">{bird.name}</h3>
        </Row>
        <Row className="results">
          <img src={bird.image} alt="" />
        </Row>
      </Fragment>
    );
  }
};

//could add in details about the bird here at a later date
