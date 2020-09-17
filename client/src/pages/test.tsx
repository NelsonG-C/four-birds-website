import React, { Fragment } from "react";
import { Layout } from "../layout/layout";
import { BirdsForm } from "../components/BirdsForm";

export const TestPage = () => {
  return (
    <Fragment>
      <Layout>
        <h2>Four Birds Test</h2>
        <BirdsForm />
      </Layout>
    </Fragment>
  );
};

//Questions coming from database
//Display four at once
//All question patterns the same - four generic pages
