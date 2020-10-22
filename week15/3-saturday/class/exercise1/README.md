# Express with Passport.js

Start a new Node.js application for this exercise. You're goal is to a functioning app connected to Github, Twitter, or Facebook and also add Users to a database sequelize.

## STEP 1
Write an express server that serves a simple website at the path '/'. The website should have a "Login with Github" form, 
a logout button,as  well as an h1 tag that will either say "Logged in" or "Not Logged in".

## STEP 2
Incorporate PassportJS into your application (using our class demo as a reference). 
Implement an strategy for your chosen OAuth2 provider that will let users create accounts and log in with thos services. 
The "login" and "logout" buttons on your website should trigger the "auth/login" and "auth/logout" 
routes respectively. Choose to render either "Logged in" or "Not Logged in" on the webpage depending on the status of `req.authenticated()`.

NOTE: You should have a functioning login at this step before continuing.

## STEP 3
Now we will add out Users to our database. Use Sequelize to create a new Postgres database with "users" table. 
The table should have at least the following columns:
* id
* email
* username

You will need to update your (de)serialization methods to add support fot the DB, as well as your Strategy's callback method. See comments 
in the demo code from class.

## BONUS
Update your server to also allow for the LocalStrategy login. Create a login form on your page to register new users and get them logged in with a button "local login". Consider mapping these Users to the existing ones in the "users" table.