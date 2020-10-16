const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); 

// Test Sequelize Setup
// db.sequelize.authenticate().then(()=>{
//     console.log("Hall-a-lur-ya")
// })

db.sequelize.sync().then( () => {
    console.log("Create all tables in Databases")
});

const todoRouter = require('./routers/todo')

// Setup Express Server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"))

app.use('/api', todoRouter)

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})




