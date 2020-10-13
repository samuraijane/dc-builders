module.exports = (app, db) => {
  app.post("/users", async (req, res) => {
    const { author } = req.body;
    const newUser = await db.User.create({
      name: author,
    });

    // Send back the new user's ID in the response:
    res.json({
      id: newUser.id,
    });
  });
};
