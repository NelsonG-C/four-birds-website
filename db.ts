import { Pool } from "pg";
import pgPromise, { IMain } from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const cn: any = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pgp: IMain = pgPromise({ capSQL: true });

const db = pgp(process.env.NODE_ENV === "production" ? proConfig : cn);

export { db, pgp };
