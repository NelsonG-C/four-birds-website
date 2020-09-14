CREATE DATABASE fourbirds;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Results(
    id uuid DEFAULT uuid_generate_v4 (),
    question_id SERIAL REFERENCES Questions(id),
    answer int,
    PRIMARY KEY (id)
);

CREATE TABLE Questions(
    id SERIAL PRIMARY KEY,
    q_text TEXT
);

CREATE TABLE Users(
    username VARCHAR(255) PRIMARY KEY,
    password TEXT,
    user_id uuid REFERENCES Results(id)
);