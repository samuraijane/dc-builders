require("dotenv").config();

const app = require("express")();
const db = require("./models");  //when specify a directory without specifying a file it will automatically go for index.js and then models.js...otherwise get an error
const bodyParser = require('body-parser');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config"); //destructuring!!!
const { User } = require('./models');

const apiUser = require("./api/apiUser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/heartbeat", function(req, res) {
  res.json({
    is: "working"
  });
});

const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

apiUser(app, db); //needs express and needs the models

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.get('/users/by-last-name', async (req, res) => {
    const users = await User.findAll({
        attributes: ['lastName']
    });
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    try{
        const oneUser = await User.findById(req.params.id);
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'User not found'
        });
    }
});

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});