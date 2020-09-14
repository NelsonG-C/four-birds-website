import express from "express";
const cors = require("cors");
import pool from "./db";

const app = express();
const port = 5000;

//need to check understanding of this bit
app.use(cors());
app.use(express.json());

// ROUTES

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
