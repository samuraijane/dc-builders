require('dotenv').config(); //lets us create environment variables, when call them use process.env.varname. GOOD FOR HIDING SECRETS 

const Sequelize = require('sequelize'); //Sequelize is a Class name so that is why it's capitalized

const dbPassword = process.env.DB_PASS || null; //dbPassword is either the variable and the variable is equal to "", then it would be null --> checks whether password exists/is defined

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, dbPassword, { //lowercase sequelize is my instance of sequelize
    host: process.env.DB_HOST,
    dialect: 'postgres'
  });

sequelize.authenticate().then(() => {
    console.log("Connected to the database");
    sequelize.close(); //disconnect from the database
}).catch(err => {
    console.log(err)
    console.log("Can't connect to Database")})