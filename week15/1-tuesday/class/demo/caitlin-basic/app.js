const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRouter = require('./router/product');
const db = require('./models'); //call out a folder..looks for index.js first

// THIS IS MY SEQUELIZE TEST
// db.sequelize.authenticate()
// .then(() => {console.log("Database connected")})
// .catch((err) => {console.log(err)});

db.sequelize.sync(); //connects to database and creates the table.... LOOK THIS UP

// THIS IS MY EXPRESS CONFIGURATION
app.use(bodyParser.json()); //how to use middleware
app.use('/api', productRouter);


app.listen(3000, () => {
    console.log("Server is listening at PORT 3000")
})