model.exports = (app, db) => {
    app.post('/author', async function (req, res) { //client makes a request to books
        const { name } = req.body; //destructuring - grabbing key names out of a structure
        const newAuthor = await db.Author.create({
            name
        })   
        res.json({ //send body back in the response
           id: newAuthor.id
        });
    });
}
