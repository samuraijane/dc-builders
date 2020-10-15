const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const productRouter = require('./router/product')
const db = require('./models')

// This is my seqeuelize test
db.sequelize.authenticate().then( () => {
    console.log("Database connected")
}).catch( () => {
    console.log("There was an error")
})

db.sequelize.sync()


// This is my express configuration
app.use(bodyParser.json())

app.use('/api', productRouter)

app.listen(3000, () => {
    console.log('Server has started')
})