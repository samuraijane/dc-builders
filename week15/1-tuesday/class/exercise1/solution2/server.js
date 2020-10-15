const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const todosRouter = require('./router/todos');
const db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"))
app.use('/api', todosRouter);

db.sequelize.sync();

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})