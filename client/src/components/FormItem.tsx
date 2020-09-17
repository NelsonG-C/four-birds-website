import React, { Fragment } from "react";
import "../styles/styles.css";

export const FormItem = ({ FormData, setForm, questions }: any) => {
  console.log("questions", questions);
  let comp;
  let val = 2;
  return (
    <div className="inline-radio">
      <h2>{questions[0].q_text}</h2>
      <p>Agree</p>
      <input type="radio" id="" value="1" />
      <input type="radio" id="" value="2" />
      <input type="radio" id="" value="3" />
      <input type="radio" id="" value="4" />
      <input type="radio" id="" value="5" />
      <p>Disagree</p>
    </div>
  );
};
