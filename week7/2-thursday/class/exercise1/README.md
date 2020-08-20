# Exercise 1: Ajax Exercise

It's time to get your feet wet with AJAX!

Step 1:

- Visit the Dog api website at https://dog.ceo 

- Play around with the different endpoints in Postman!

Step 2:

- Create a quick, easy website that has a single button that says "Generate Doggo"

- Write a click listener on that button 

- Make the click listener change the text of the button to "Generating Doggo..."

Step 3:

- Inside your click listener, make a GET request using axios.get('https://dog.ceo/api/breeds/image/random'); 

- Confirm that a new AJAX request shows up in the Network tab of the developer tools everytime you click on the button

Step 4:

- Chain a `.then(function(data) {})` off of `axios.get(...)` or `fetch(...)`

- Make sure your callback function takes a parameter called "data"

- Use the image url contained in "data" to render a dog image to the screen using DOM manipulation. (remember, you can create a new image with document.createElement('img'), and you can set the src attribute of the image with javascript)

- Make the button text go back to "Generate Doggo" after the image is appended to the screen