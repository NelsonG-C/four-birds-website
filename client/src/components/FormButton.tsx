import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

export const FormButton = ({ step, setStep, onSubmit }: any) => {
  //to be handled
  let submit;
  let button;
  if (step === 3) {
    button = <Button onClick={() => onSubmit()}>Submit</Button>;
  } else {
    button = <Button onClick={() => setStep(step + 1)}>Next</Button>;
  }
  return <Fragment>{button}</Fragment>;
};
