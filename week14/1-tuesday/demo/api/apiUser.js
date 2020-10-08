module.exports = (app, db) => {
  app.post("/users", async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const newUser = await db.User.create({
      firstName,
      lastName,
      email,
    });

    // Send back the new user's ID in the response:
    res.json({
      id: newUser.id,
    });
  });
};
