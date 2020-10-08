module.exports = (app, db) => {

    // -----------------------------------------------------------------------------
    //                                     POST
    // -----------------------------------------------------------------------------
    app.post('/users', async (req, res) => {
        const { firstName, lastName, email } = req.body; //also the same as req.body.firstName, req.body.lastName, etc but destructuring let's you do it all in one line
        const newUser = await db.User.create({
            firstName,
            lastName,
            email
        })
        
        // Send back the new user's ID in the response:
        res.json({
            id: newUser.id
        });
    });
    
}