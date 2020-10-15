var express = require("express");
var bodyParser = require("body-parser");
const userRouter = require("./public/routes/user");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "database_development",
  "heatherluttrell",
  null,
  { host: "localhost", dialect: "postgres" }
);

const Todo = sequelize.define("Todo", {
  taskName: { type: DataTypes.STRING, allowNull: false },
  taskComplete: { type: DataTypes.BOOLEAN },
});

const router = require("./public/routes/user.js");

app.use(router);

sequelize
  .authenticate()
  .then(() => {
    console.log("yay!");
  })
  .catch((e) => {
    console.log("nay!");
  });

app.use(express.static(__dirname + "/public"));

app.use("/", userRouter);

app.listen(3000, function () {
  console.log("Todo List API is now listening on port 3000...");
});
