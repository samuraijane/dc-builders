module.exports = (app, db) => { 


  app.post("/Author",async (req, res) => {
      const {title, author, pubdate} = req.body;

      const newAuthor = await db.Author.create({
          author
      })
  
      res.json({
          api: "Author",
          id: newAuthor.id,
          author
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