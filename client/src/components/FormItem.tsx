import React, { Fragment } from "react";
import "../styles/styles.css";

//need to link correct values to each radio button
//could reduce code with for loop up to 5 or something

export const FormItem = ({
  formData,
  setForm,
  questions,
  i,
  onChange,
}: any) => {
  console.log("questions", questions);
  let comp;
  let val = 2;
  console.log("Formdata in item", formData);
  return (
    <div className="inline-radio">
      <h2>{questions[i].q_text}</h2>
      <p>Agree</p>
      <input
        type="radio"
        id={formData[i].question_id}
        value="1"
        checked={formData[i]["answer"] === 1}
        onChange={(e) => onChange(e)}
      />
      <input
        type="radio"
        id={formData[i].question_id}
        value="2"
        checked={formData[i]["answer"] === 2}
        onChange={(e) => onChange(e)}
      />
      <input
        type="radio"
        id={formData[i].question_id}
        value="3"
        checked={formData[i]["answer"] === 3}
        onChange={(e) => onChange(e)}
      />
      <input
        type="radio"
        id={formData[i].question_id}
        value="4"
        checked={formData[i]["answer"] === 4}
        onChange={(e) => onChange(e)}
      />
      <input
        type="radio"
        id={formData[i].question_id}
        value="5"
        checked={formData[i]["answer"] === 5}
        onChange={(e) => onChange(e)}
      />
      <p>Disagree</p>
    </div>
  );
};
