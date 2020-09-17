import React, { useState, useEffect } from "react";
import { FormItem } from "./FormItem";
import { FormButton } from "./FormButton";

//setting default data structure
const defaultData = {};

const questionData = {};

//fetch question data function

//question data coming in
export const BirdsForm = (questionData: any) => {
  //have a place to store questions
  const [questions, setQuestions] = useState([]);
  const [formData, setForm] = useState(defaultData);
  const [step, setStep] = useState(0);
  //need to add step logic here

  const QuestionData = async () => {
    try {
      const response = await fetch("http://localhost:5000/test", {
        method: "GET",
      });
      const data = await response.json();
      setQuestions(data);
      console.log("Setting questions");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    console.log("Now using effect");
    QuestionData();
  }, []);

  //where I'm storing the answers
  const props = { formData, setForm, step, setStep, questions };
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
  console.log("Here");
  console.log(questions);
  if (questions.length == 0) {
    console.log("In here");
    return <div></div>;
  } else {
    return (
      <div>
        <FormItem {...props} />
        <FormItem {...props} />
        <FormItem {...props} />
        <FormItem {...props} />
        <FormButton />
      </div>
    );
  }
};
