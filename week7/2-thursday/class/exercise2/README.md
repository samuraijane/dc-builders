# Exercise 2: Advanced Ajax!

Let's turn it up a notch! We're going to make it so that you can select a specific breed of dog to show to the screen

Step 1:

- Add an empty dropdown menu to your doggo website html (<select></select>)

Step 2:

- Using `axios` or `fetch`, make a GET request to https://dog.ceo/api/breeds/list when the page first loads

- Confirm that this AJAX request shows up in your network tab everytime you reload the page

Step 3:

- In the callback function of the `.then(function(data){})`, loop through the array of dog breeds that are in the "data" parameter

- For each dog breed, add a <option value="pitbull">Pit Bull</option> to the <select> tag

- Your drop down list should now contain a list of dog breeds

Step 4:

- add a change listener to the select dropdown, .addEventListener( 'change', function(){})

- In its callback function, make a GET request to /api/breed/{breed name}/images/random (replacing {breed name} with the currently selected breed. "this.value" should contain the currently selected breed )

- Verify that a new AJAX request shows up in the Network tab everytime you select a breed from the list

Step 5:

- In the callback function for the GET request, create a new dog Image and show it to the screen. (this is exactly like how you did it in the first exercise!)