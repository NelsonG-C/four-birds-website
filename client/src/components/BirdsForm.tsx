import React, { useState } from "react";
import { FormItem } from "./FormItem";
import { FormButton } from "./FormButton";

//setting default data structure
const defaultData = {};

//question data coming in
export const BirdsForm = (questionData: any) => {
  //where I'm storing the answers
  const [formData, setForm] = useState(defaultData);
  const [step, setStep] = useState(0);
  //need to add step logic here
  const props = { formData, setForm, step, setStep, questionData };

  //insert logic for which questions are passed
  //step update
  //function updates index for questions
  //formitem uses index to display correct question from questionData

  //Have four item elements on each page
  //form button displays either next button or submit
  //interaction with button changes step.
  //step update changes question values
  //this causes re-render of questions and update

  //need to set onChange={setform} and pass as prop into each
  return (
    <div>
      <FormItem {...props} />
      <FormItem />
      <FormItem />
      <FormItem />
      <FormButton />
    </div>
  );
};
