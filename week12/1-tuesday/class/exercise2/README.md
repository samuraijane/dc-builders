# Build an API for the Rendering assignent

## Overview

Now that you have a feel for how to write a server using Express, we'll apply that knowledge to one of your prior front-end exercises. (It's the rendering exercise - Remember? The one where we rendered Circles, Tweets, and Albums? Yeah, that one!)

Let's take a quick tour of this repo:

### package.json
The main things you should notice about package.json is that 1) express is listed as a dependency, and 2) you can run `npm start` to start this server

### server.js
This is the server code! Notice that this server is currently only set up to server the files in the /public folder. You'll be doing your work in this file for this exercise.

### /public
This folder contains all of the front end html, css, and javascript. It's nearly identical to the files in my repo called 'rendering'

### /public/render**.js
Notice that each of the render functions make use of axios to fetch data from your server. (A couple weeks ago, there was no axios code here - instead, the abstractions were hardcoded as arrays and objects)

### /abstractions
These files all contain the abstractions we're interested in. Notice that we export the abstractions with `module.exports = ...`. These files are imported via `require()` statements in server.js

## Your Assignment
1) Install this project's depencies with `npm install`
2) Run the server `npm start`
3) Open `localhost:3000` in Google Chrome
4) Notice that the buttons don't work! That's because your buttons are trying to fetch data from the server at routes like `/api/albums` and `/api/poker`, but they aren't implemented yet!
5) Implement these routes in `server.js`. Restart your server and verify that your server is properly serving the data!