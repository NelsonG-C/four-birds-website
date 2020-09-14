CREATE DATABASE fourbirds;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Results(
    id uuid uuid_generate_v4 (),
    question_id REFERENCES Questions(id),
    answer int,
    PRIMARY KEY (id)
);

CREATE TABLE Questions(
    id SERIAL PRIMARY KEY,
    q_text TEXT,
)

CREATE TABLE User(
    username VARCHAR(255) PRIMARY KEY,
    password TEXT,
    user_id REFERENCES Results(id)
    
)