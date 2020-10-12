const express = require("express");
const app = express();

app.get("/heartbeat", function(req, res) {
    res.json({
        is: "working"
    });
});


app.listen(3001, function() {
  console.log('The server at port 3001 is listening.');
});
