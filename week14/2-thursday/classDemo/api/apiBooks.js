module.exports = (app, db) => { 


    app.post("/books",async (req, res) => {
        const {title, author, pubdate} = req.body;

        const newBook = await db.Boooks.create({
        title,
        author,
        pubdate
        })

        // const newAuthor = await db.Author.create({
        //     author
        // })
    
        res.json({
            api: "book list",
            id: newBook.id,
            title,
            author,
            pubdate,
            // api: "Author",
            // id: newAuthor.id,
            // author
        });
    });

    app.get("/books", async (req, res) => {
        const books = await db.Boooks.findAll({
            attributes: ['title', 'author'],
           })
        console.log("Get test");
        
        res.json({
        is: "working" , 
        books
        })
    });

}