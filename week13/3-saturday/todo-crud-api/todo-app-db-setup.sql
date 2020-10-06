CREATE DATABASE todo_crud_api;
\c todo_crud_api;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (title) VALUES ('Buy milk');
INSERT INTO tasks (title) VALUES ('Sweep the house');
INSERT INTO tasks (title) VALUES ('Walk the dog');