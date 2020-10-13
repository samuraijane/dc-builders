module.exports = (app, db) => {

    app.post("/authors", async (req, res) => {
        const { firstName, lastName } = req.body;
        const newAuthor = await db.Authors.create({
            firstName, 
            lastName,
        });

        res.json({
            id: newAuthor.id,
        });

    });
}