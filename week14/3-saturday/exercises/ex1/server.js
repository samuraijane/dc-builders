const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/heartbeat", function(req, res) {
    res.json({
        is: "working"
    });
});

app.post("/author", function(req, res) {
    const {authorname, title, publicationdate} = req.body
    res.json({
        authorname,
        publicationdate,
        title
    });
});


app.listen(3001, function() {
  console.log('The server at port 3001 is listening.');
});
