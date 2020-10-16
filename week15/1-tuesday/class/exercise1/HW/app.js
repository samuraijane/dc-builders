const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const todo = require('./router/todo')

const db = require('./models')

// db.sequelize.authenticate()
//     .then( () => {
//         console.log("Database connected")
//     }) 
//     .catch( () =>{
//         console.log("Database not connected!!!")
//     })

db.sequelize.sync()

app.use(bodyParser.json())

app.use('/api', todo)

app.listen(3000, () => {
    console.log('Server started')
});