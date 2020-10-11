module.exports = (app, db) => { 


    app.post("/title",async (req, res) => {
        const {title, author, pubdate} = req.body;

        const newTitle = await db.title.create({
            title
        })
    
        res.json({
            api: "Title",
            id: newTitle.id,
            title
        });
    });

    // app.get("/books", async (req, res) => {
    //     const books = await db.Boooks.findAll({
    //         attributes: ['title', 'author'],
    //        })
    //     console.log("Get test");
        
    //     res.json({
    //     is: "working" , 
    //     books
    //     })
    // });

}