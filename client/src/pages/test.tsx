import React, { Fragment } from "react";
import { Layout } from "../layout/layout";
import { BirdsForm } from "../components/BirdsForm";

export const TestPage = () => {
  return (
    <Fragment>
      <div className="test-heading">
        <h2>Four Birds Test</h2>
        <p>
          Answer each question below, choosing from Strongly Disagree to
          Strongly Agree
        </p>
      </div>
      <BirdsForm />
    </Fragment>
  );
};

//Questions coming from database
//Display four at once
//All question patterns the same - four generic pages
