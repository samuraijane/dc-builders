
const express = require('express');
const app = express();

const bodyParser = require('body-parser')

const newRouter = require('./router/product')

const db = require('./models')


// db.sequelize.authenticate()
//     .then( () => {
//         console.log("Database connected")
//     }) 
//     .catch( () =>{
//         console.log("Database not connected!!!")
//     })


//adds new to db 
db.sequelize.sync()

app.use(bodyParser.json())

app.use('/api', newRouter)

app.listen(3000, () => {
    console.log('Server started')
});