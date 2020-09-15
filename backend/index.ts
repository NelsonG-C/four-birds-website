import express from "express";
const cors = require("cors");
import { db, pgp } from "./db";

const app = express();
const port = 5000;

//need to check understanding of this bit
app.use(cors());
app.use(express.json());

// ROUTES

//Submit Test
app.post("/test", async (req, res) => {
  // need to handle multiple answer inserts
  console.log("Here now");
  try {
    //using https://stackoverflow.com/questions/37300997/multi-row-insert-with-pg-promise
    //as reference

    //setting column headers
    const cs = new pgp.helpers.ColumnSet(["question_id", "answer"], {
      table: "results",
    });
    const answers = req.body;

    //creating SQL query
    const query = pgp.helpers.insert(answers, cs) + "RETURNING id";

    const result = await db.many(query);

    res.json(result);
  } catch (err) {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
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
