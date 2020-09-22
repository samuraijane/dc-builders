# Server Exercises
Let's try to write some simple servers. 

In a new directory, start an NPM project and install `express`. Create a new JS file and `npm script` for each of the following applications below.

## Ping Pong Server

This one should be relatively simple. Write a server that has only one route, GET /ping. This route should respond with the string "PONG". After you write the server, verify that it works using Postman.

## Counting Server

Write a server that keeps track of a counter! Initialize a global variable that holds the count (starting at 0). Write three routes called POST /increment, POST /decrement, and GET /value. The first two should increment and decrement the value respectively and then respond with the new counter value. The third route should just respond with the current value. Again, verify that your server works with Postman.