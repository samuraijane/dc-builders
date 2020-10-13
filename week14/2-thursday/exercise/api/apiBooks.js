module.exports = (app, db) => {
  // -----------------------------------------------------------------------------
  //                                     POST
  // -----------------------------------------------------------------------------
  app.post("/books", async (req, res) => {
    const { title, publicationDate } = req.body;
    const newBook = await db.Book.create({
      title,
      publicationDate,
    });

    // Send back the new user's ID in the response:
    res.json({
      id: newBook.id,
    });
  });
};
