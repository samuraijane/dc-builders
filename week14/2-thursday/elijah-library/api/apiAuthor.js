module.exports = (app, db) => {
    app.post("/author", async function(req, res) {
        const { name } = req.body;
        const newAuthor = await db.Author.create({
            name
        })
      res.json({
        id: newAuthor.id
        });
    });    
};