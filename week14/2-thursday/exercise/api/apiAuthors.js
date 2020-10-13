module.exports = (app, db) => {
  // -----------------------------------------------------------------------------
  //                                     POST
  // -----------------------------------------------------------------------------
  app.post("/authors", async (req, res) => {
    const { author } = req.body;
    console.log(req.body);
    const newAuthor = await db.Author.create({
      name: author,
    });

    // Send back the new user's ID in the response:
    res.json({
      id: newAuthor.id,
    });
  });
};
