# Exercise: Portfolio Site With Client-side Navigation

Imagine that you are fabulous photographer and have some great images you wish to show the world. Build a portfolio website that matches your talent so that the rest of us know who you are! Then, sit back watch the (imaginary) money roll in.

## Requirements
1. Header with the following navigation items
    1. Home
    1. About
    1. Portfolio
    1. Contact
1. Main area whose content changes based on the nav item that was last clicked
    1. Home page – show the latest best image you have taken with a caption of its location and why it's special. Make it larger than the rest of the images on the site.
    1. About page – tell the world about where you've traveled, with whom you have studied, and why your vision is so unique
    1. Portfolio page – showcase at least 16 images that will move your audience.
    1. Contact page – add a contact form with fields for `name`, `email`, and `message`. Include a submit button that logs the input values to the console on submit. Also remember to use controlled components and local state.
    1. Credits – recognize those who made this website possible, including yourself and actual photographer of the images you use
1. Footer with one link that says "Credit
1. Use React Router for your navigation
1. Apply styling but keep it minimal so the site looks clean and not overdone
1. This does not need to be responsive but should look presentable when the browser width is between 992px and 1200px

## Strech Goals
1. Send yourself an email when the form is submitted
1. Change the color of the nav item when the view it is associated with is active
1. Use an icon for "Home" instead of text
1. Make the app fully responsive
1. Use the [Unsplash API](https://unsplash.com/developers) to source the photos for your portfolio

## Tips
1. If you need a solid foundation to start with, start with the solution in the previous exercise.
1. In `./src/api/giphy.js`, replace `YOUR_API_KEY` with your API key from the previous exercise.
1. You'll definitely want to review the documentation for the [Search API Endpoint](https://developers.giphy.com/docs/api/endpoint#search).
1. The `componentDidMount` method is still your friend.