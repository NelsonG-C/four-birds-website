import React, { useState, useEffect } from "react";
import { FormItem } from "./FormItem";
import { FormButton } from "./FormButton";

const questionData = {};

//fetch question data function

//question data coming in
export const BirdsForm = (questionData: any) => {
  //have a place to store questions
  const [questions, setQuestions] = useState([]);
  const [formData, setForm] = useState<any>([]);
  const [step, setStep] = useState(0);

  const QuestionData = async () => {
    try {
      const response = await fetch("http://localhost:5000/test", {
        method: "GET",
      });
      const data = await response.json();
      const answers: any = [];

      //setting default formData - dynamic
      data.forEach((e: any) => {
        console.log("e", e.id);
        let entry = {
          id: e.id,
          q_type: e.q_type,
          answer: "",
        };
        answers.push(entry);
      });
      setForm(answers);
      console.log(data);
      console.log("About to set questions");
      setQuestions(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    console.log("Now using effect");
    QuestionData();
  }, []);

  function onChange(e: any) {
    const answer = e.target.value;
    const id = e.target.id;
    console.log(formData[id]["answer"]);

    const answerIndex = formData.map((item: any) => {
      console.log(item.id);
      if (item.id == id) {
        return { ...item, answer: e.target.value };
      }
      return item;
    });

    setForm(answerIndex);
  }

  async function onSubmit() {
    console.log("The submission link works");
  }

  //calculating which part of q array to use
  const index = step * 4;

  //important props for each formItem
  const props = { formData, setForm, questions };
  console.log("Form Data", formData);

  if (questions.length == 0) {
    console.log("In here");
    return <div></div>;
  } else {
    return (
      <div>
        <FormItem {...props} i={index} onChange={onChange} />
        <FormItem {...props} i={index + 1} />
        <FormItem {...props} i={index + 2} />
        <FormItem {...props} i={index + 3} />
        <FormButton step={step} setStep={setStep} onSubmit={onSubmit} />
      </div>
    );
  }
};
