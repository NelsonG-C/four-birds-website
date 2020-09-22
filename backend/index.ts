import express from "express";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";

const cors = require("cors");
import { db, pgp } from "./db";

const app = express();
const port = 5000;
const uuid = "b4f8113c-b087-4660-9b96-e2eefba175d8";

//need to check understanding of this bit
app.use(cors());
app.use(express.json());
app.use(
  session({
    genid: function (req) {
      return uuidv4(); // use UUIDs for session IDs
    },

    secret: "value",
    resave: false,
    saveUninitialized: true,
  })
);

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
    const topResult = await evaluateTest(answerData);

    //insert result into users db;
    const resultQuery = await db.any(
      "INSERT INTO users (user_id, top_result) VALUES ($1, $2)",
      [uuid, topResult[0]]
    );

    req.session.topResult = topResult;
    console.log("Got here now");
  } catch (err) {
    console.log("This is where I am now");
    console.error(err.message);
  }
});

// Get questions from database
app.get("/test", async (req, res) => {
  const sess = req.session;
  console.log(sess.user_id);
  try {
    const questions = await db.any("SELECT * FROM questions");
    res.json(questions);
  } catch (err) {
    console.error(err.message);
  }
});

//get test result for results page
app.get("/result", async (req, res) => {
  var result = req.session.topResult;
  console.log(result);
  //filler val righht now without session
  let id = uuid;
  res.json(result);
  /* try {
    //UNSURE either get answers and evaluate, or do evaluation on submission into own table or columns
    //filling in for first option atm
    const result = await db.any("SELECT * from users WHERE user_id= ($1)", [
      id,
    ]);
    console.log(result);
    res.json(result);
  } catch (err) {
    console.error(err.message);
  }*/

  //use result, evaluate personality type
});

//using for session stuff - not in use
app.get("/", async (req, res) => {
  const sess = req.session;
  if (!sess.user_id) {
    sess.user_id = req.sessionID;
  }
  console.log(sess);
  console.log(sess.user_id);
});

export const evaluateTest = async (data: any) => {
  const types = ["D", "I", "S", "C"];
  const totals: number[] = [];

  //Get type total counts

  await types.forEach((i) => {
    let total = 0;
    for (let j = 0; j < data.length; j++) {
      if (i == data[j]["q_type"]) {
        total = total + data[j]["answer"];
      }
    }
    totals.push(total);
    console.log(totals);
  });
  console.log(totals);

  //determine max value
  /* var maxIndex = 0;
  for (var i = 0; i < totals.length ; i++) {
    if (totals[i] >)
  }
  */

  const max = totals.reduce((m, n) => Math.max(m, n));
  const indexes = [...totals.keys()].filter((i) => totals[i] === max);
  console.log(indexes);
  //cop out way of deciding atm
  const answer = types[indexes[0]];

  return answer;
  //to count answers for each type
  //compare totals
  //
};
