module.exports = (app, db) => {

    // -----------------------------------------------------------------------------
    //                                     POST
    // -----------------------------------------------------------------------------
    app.post("/authors",async (req, res) => {
        const {author} = req.body;
        const newAuthor = await db.Author.create({
          author
        })
      
        res.json({
          api: "Authors",
          id: newAuthor.id,
          author
        });
      });
    }