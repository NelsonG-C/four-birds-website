import React, { Fragment, useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";

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
    console.log(results[0].top_result);
    return (
      <Fragment>
        <h2>Results Time!</h2>
        <h3>Your main bird type is...</h3>
        <Container>
          <Row>
            <h3>{results[0].top_result}</h3>
          </Row>
        </Container>
      </Fragment>
    );
  }
};

//could add in details about the bird here at a later date
