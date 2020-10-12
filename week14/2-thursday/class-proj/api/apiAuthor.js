module.exports = (app, db) => {

    app.post('/author', async function(req, res) {
        console.log(req.body);
        const { author } = req.body; //destructuring. get author out of request body. in fetch stored in bookPayload variable
        
        // Find all authors in database where name is value from form
        // Raw SQL: SELECT * FROM "Authors" WHERE name = author;
        // Returns an empty object if can't find the givenAuthor in the database
        let givenAuthor = await Author.findOne({
          where: {
              name: author
          }
        })
    
        //if findOne produces an empty object, then create a new row in "Authors" with the given Author information
        if (!givenAuthor) {
          givenAuthor = await Author.create({
            name: author   
            //don't need to do id since Author model will populate id on its own
          })
        }

        res.send(author);
    })
}