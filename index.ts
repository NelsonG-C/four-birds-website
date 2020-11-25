import express from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const cors = require("cors");

// imports from files
import { db, pgp } from "./db";
import { evaluateTest } from "./evaluateTest";

// setup of express
const app = express();
const port = process.env.PORT || 5000;
app.set("user_id", uuidv4());
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Requests

// Handle test data and save data to db
app.post("/testData", async (req, res) => {
  try {
    const columnSet = new pgp.helpers.ColumnSet(["question_id", "answer"], {
      table: "answers",
    });
    const answerData = req.body;
    //creating SQL query
    const query = pgp.helpers.insert(answerData, columnSet) + "RETURNING id";
    const result = await db.many(query);
    res.json(result);

    //Evaluate test result
    const topResult = await evaluateTest(answerData);

    //insert result into users db;
    await db.any("INSERT INTO users (user_id, top_result) VALUES ($1, $2)", [
      req.app.settings.user_id,
      topResult,
    ]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get questions from database
app.get("/testData", async (req, res) => {
  console.log(req.app);
  try {
    const questions = await db.any("SELECT * FROM questions");
    res.json(questions);
  } catch (err) {
    console.error(err.message);
  }
});

// Get test result for results page
app.get("/resultData", async (req, res) => {
  const result = await db.one("SELECT * FROM users WHERE user_id=($1)", [
    req.app.settings.user_id,
  ]);
  res.json(result);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
