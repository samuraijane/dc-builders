const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo_app", "johnloftin", null, {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log(err);
    console.log("Cannot connect to DB");
  });
