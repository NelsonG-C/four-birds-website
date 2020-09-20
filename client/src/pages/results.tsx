import React, { Fragment } from "react";
import { Row } from "react-bootstrap";

export const ResultsPage = (props: any) => {
  //get result from prop
  //display bird type below
  const { results } = props;
  return (
    <Fragment>
      <h2>Results Time!</h2>
      <h3>Your main bird type is...</h3>
      <Row>{results}</Row>
    </Fragment>
  );
};

//could add in details about the bird here at a later date
