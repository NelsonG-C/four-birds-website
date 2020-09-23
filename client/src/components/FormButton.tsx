import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

export const FormButton = ({ step, setStep, onSubmit }: any) => {
  //to be handled
  let button;
  if (step === 3) {
    button = (
      <Button className="test-btn" onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
    );
  } else {
    button = (
      <Button className="test-btn" onClick={() => setStep(step + 1)}>
        Next
      </Button>
    );
  }
  return <Fragment>{button}</Fragment>;
};
