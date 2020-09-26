var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

let data = { counter: 0 };

app.get("/counter", (req, res) => {
  res.send(data);
});

app.get("/increment", (req, res) => {
  data.counter++;
  res.send(data);
});

app.get("/decrement", (req, res) => {
  data.counter--;
  res.send(data);
});

app.get("/reset", (req, res) => {
  data.counter = 0;
  res.send(data);
});

app.listen(3000, function () {
  console.log("Pets API is now listening on port 3000...");
});
