import { Pool } from "pg";
import pgPromise, { IMain } from "pg-promise";

const cn = {
  user: "postgres",
  password: "46pxj?nm2q",
  host: "localhost",
  port: 5432,
  database: "fourbirds",
};
const pgp: IMain = pgPromise({ capSQL: true });

const db = pgp(cn);

export { db, pgp };
