import React, { Fragment, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Birds from "../layout/birddata";

interface TestResult {
  password?: string;
  username?: string;
  user_id: string;
  top_result: string;
}

export const ResultsPage = () => {
  const [results, setResult] = useState<TestResult | null>(null);

  const resultData = async () => {
    try {
      const response = await fetch("/resultData", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    resultData();
  }, []);

  if (results == null) {
    return <div></div>;
  } else {
    console.log(results);
    const letter = results.top_result;
    console.log(letter);
    const bird = Birds[0][letter];
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
          <img src={bird.image} alt="Bird Image" />
        </Row>
      </Fragment>
    );
  }
};
