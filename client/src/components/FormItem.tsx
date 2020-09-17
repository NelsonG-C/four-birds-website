import React, { Fragment } from "react";
import "../styles/styles.css";

export const FormItem = ({ FormData, setForm, questionData }: any) => {
  return (
    <Fragment>
      <h2>Test Name Right Now</h2>
      <div className="inline-radio">
        <p>Agree</p>
        <input type="radio" id="" value="1" />
        <input type="radio" id="" value="2" />
        <input type="radio" id="" value="3" />
        <input type="radio" id="" value="4" />
        <input type="radio" id="" value="5" />
        <p>Disagree</p>
      </div>
    </Fragment>
  );
};
