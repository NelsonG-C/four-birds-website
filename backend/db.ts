import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "46pxj?nm2q",
  host: "localhost",
  port: 5432,
  database: "fourbirds",
});

export default pool;
