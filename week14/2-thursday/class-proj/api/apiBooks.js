module.exports = (app, db) => {

    app.post('/books', async function(req, res) {
        console.log(req.body);
        const {author, title, date } = req.body; //destructuring. get title and date out of request body. in fetch stored in bookPayload variable
        
        let givenAuthor = await Author.findOne({
            where: {
                name: author
            }
          })
        
        if (!givenAuthor) {
            givenAuthor = await Author.create({
                name: author   
                //don't need to do id since Author model will populate id on its own
              })
            }

        // Find all books in database where title is value from form and author.id is the id associated with the author from the given form
        // Raw SQL: SELECT * FROM "Books" WHERE title = title,  authorId = givenAuthor.id;
        // Returns an empty object if can't find the givenBook in the database
        let givenBook = await Books.findOne({
            where: {
                title,
                authorId: givenAuthor.id 
            }
        })
    
        //if findOne produces an empty object, then create a new row in "Books" with the given Book information
        if (!givenBook) {
            givenBook = await Books.create({
                title: title,
                authorId: givenAuthor.id,
                pubDate: date 
            //don't need to do id for book since Books model will populate id on its own
            })
        }
    
        res.send(req.body);
    })
}