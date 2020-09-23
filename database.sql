-- CREATE DATABASE fourbirds;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Questions(
    id SERIAL PRIMARY KEY,
    q_text TEXT,
    q_type CHAR
);

CREATE TABLE answers(
    id uuid DEFAULT uuid_generate_v4(),
    question_id SERIAL REFERENCES Questions(id),
    answer int,
    PRIMARY KEY (id)
);

CREATE TABLE Users(
    username TEXT,
    password TEXT,
    user_id uuid PRIMARY KEY,
    top_result CHAR
);