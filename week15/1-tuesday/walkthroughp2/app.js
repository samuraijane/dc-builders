const express = require('express')
const app = express()
const productRouter = require('./router/product')
const bodyParser = require('body-parser')
const db = require('./models')



db.sequelize.authenticate().then( () => {
    console.log("Database connected")
}).catch ( () => {
    console.log("There was an error")
})


app.use(bodyParser.json())

app.use('/api', productRouter)




app.listen(3000, () => {
    console.log("Server is running")
})