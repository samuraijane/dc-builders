const pgp = require("pg-promise")();
const db = pgp('postgres://anna:p0T9bwkN@localhost:5432/todo_app');
db.any('SELECT * FROM tasks')
    .then(res => console.log(res))
    .catch(err => console.log(err));