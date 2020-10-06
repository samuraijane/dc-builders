const pgp = require("pg-promise")();

const db = pgp("postgres://localhost:5432/likeypixdb");

db.any("SELECT * from USERS").then((users) => console.log(users));