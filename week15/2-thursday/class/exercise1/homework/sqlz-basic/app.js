const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const productRouter = require('./router/product')
const db = require('./models')

// THIS IS MY SEQUELIZE TEST
// db.sequelize.authenticate().then( ()=> {
//     console.log("Database connected")
// }).catch( ()=>{
//     console.log("There was an errro")
// })

db.sequelize.sync()

// THIS IS MY EXPRESS CONFIGURATION
app.use(bodyParser.json())

app.use('/api', productRouter)

app.listen(3000, ()=> {
    console.log('server is started')
})