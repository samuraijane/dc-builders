var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

var todoList = [
  {
    id: 1,
    todo: "Implement a REST API",
  },
  {
    id: 2,
    todo: "Get Groceries",
  },
];

// GET /api/todos
app.get("/api/todos", (req, res) => {
  res.json(todoList);
});

// GET /api/todos/:id
app.get("/api/todos/:id", (req, res) => {
  let todo = todoList.find(
    (todo) => todo.id === Number.parseInt(req.params.id)
  );
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({
      error: `Todo with id of ${req.params.id} not found`,
    });
  }
});

// POST /api/todos
app.post("/api/todos", (req, res) => {
  let nextId =
    todoList.reduce((prev, curr) => {
      return prev.id > curr.id ? prev.id : curr.id;
    }, 0) + 1;
  let todo = {
    id: nextId,
    todo: req.body.todo,
  };
  todoList.push(todo);
  res.json(todo);
});

// PUT /api/todos/:id
app.put("/api/todos/:id", (req, res) => {
  const todoObj = todoList.find((todo) => todo.id == parseInt(req.params.id));
  const otherTodos = todoList.filter(
    (todo) => todo.id != parseInt(req.params.id)
  );
  if (todoObj) {
    todoObj.todo = req.body.todo;
    todoList = otherTodos.concat(todoObj);
    res.json(todoObj);
  } else {
    res.status(404).json({ error: "todo not found" });
  }
});

// DELETE /api/todos/:id
app.delete("/api/todos/:id", (req, res) => {
  todoList = todoList.filter((todo) => todo.id != parseInt(req.params.id));
  res.json(todoList);
});

app.listen(3000, function () {
  console.log("Todo List API is now listening on port 3000...");
});
