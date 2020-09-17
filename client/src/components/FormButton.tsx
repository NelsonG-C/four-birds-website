import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

export const FormButton = () => {
  //to be handled
  let id;
  let submit;
  let next;

  let button;
  if (id === "submit") {
    button = <Button onClick={submit}>Submit</Button>;
  } else {
    button = <Button onClick={next}>Next</Button>;
  }
  return <Fragment>{button}</Fragment>;
};
