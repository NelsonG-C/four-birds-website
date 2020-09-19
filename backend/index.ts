import express from "express";
const cors = require("cors");
import { db, pgp } from "./db";

const app = express();
const port = 5000;

//need to check understanding of this bit
app.use(cors());
app.use(express.json());

// ROUTES

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//Submit Test
app.post("/test", async (req, res) => {
  // need to handle multiple answer inserts
  console.log("Here now");
  try {
    //using https://stackoverflow.com/questions/37300997/multi-row-insert-with-pg-promise
    //as reference

    //setting column headers
    const cs = new pgp.helpers.ColumnSet(["question_id", "answer"], {
      table: "answers",
    });
    const answerData = req.body;
    //creating SQL query
    // need to match question_id heading
    const query = pgp.helpers.insert(answerData, cs) + "RETURNING id";
    const result = await db.many(query);
    res.json(result);

    //Evaluate test result
    evaluateTest(answerData);
  } catch (err) {
    console.log("This is where I am now");
    console.error(err.message);
  }
});

// Get questions from database
app.get("/test", async (req, res) => {
  try {
    const questions = await db.any("SELECT * FROM questions");
    res.json(questions);
  } catch (err) {
    console.error(err.message);
  }
});

//get test result for results page
app.get("/result", async (req, res) => {
  let id = 0;
  try {
    //UNSURE either get answers and evaluate, or do evaluation on submission into own table or columns
    //filling in for first option atm
    const result = await db.any("SELECT * from results WHERE id=${id}", id);
  } catch (err) {
    console.error(err.message);
  }

  //use result, evaluate personality type
});

export const evaluateTest = async (data: any) => {};
