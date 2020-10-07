module.exports = (app, db) => {

    // -----------------------------------------------------------------------------
    //                                     POST
    // -----------------------------------------------------------------------------
        app.post('/users', async (req, res) => {
            const { firstName, lastName, email } = req.body;
            const newUser = await db.User.create({ //db is the model
                firstName,
                lastName,
                email
            })
            
            // Send back the new user's ID in the response:
            res.json({
                id: newUser.id
            });
        });
    
        app.get("/users", function(req, res) {//ensure server working
            res.json({

    "firstName": "Billy",
    "lastName": "Bradford",
    "email": "billy@email.com"

            });
          });
    }