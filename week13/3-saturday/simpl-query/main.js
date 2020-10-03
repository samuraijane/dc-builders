require("dotenv").config();

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config"); 
const pgp = require("pg-promise")();

const db = pgp("postgres://shayla:e90Bgtu3@localhost:5432/todo_app");
db.any("SELECT * from TASKS")
    .then(tasks => console.log(tasks))
    .catch(error => console.log(error));
    