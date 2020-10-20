var express = require('express');
var bodyParser = require('body-parser');
const db = require('./models')
var app = express();
const todoRouter = require('./routers/todo')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// db.sequelize.authenticate().then(()=>{
//     console.log("Connected to DB")
// })
// db.sequelize.sync().then( () => {
//     console.log("Tables Created")
// })



app.use(express.static(__dirname + "/public"))
app.use('/api', todoRouter)



app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})