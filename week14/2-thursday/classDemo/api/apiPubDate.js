module.exports = (app, db) => { 


    app.post("/pubDate",async (req, res) => {
        const {title, author, pubdate} = req.body;

        const newPubdate = await db.pubdate.create({
            pubdate
        })
    
        res.json({
            api: "pubdate",
            id: newPubdate.id,
            pubdate
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