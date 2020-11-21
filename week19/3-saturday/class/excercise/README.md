# Exercise: Color Palette Generator

Your task is to implement a React color palette generator similar to the one at https://coolors.co

Your app should:
1) Have a "Randomize Colors" button
2) Show 5 colors on the screen
3) Each color should have a hex code and a "LOCK/UNLOCK" button
4) Clicking the "Randomize Colors" buton should only randomize the colors of the unlocked sections

Includes Bootstrap v4 for styling convenience. If you want an example of how to design your HTML, check out https://codepen.io/anon/pen/LqXPbB?editors=1000

## Hints

1. Use `create-react-app` to create this app in a new directory.
1. You WILL need to use class-based React components.
1. Consider which components you will need in your app - Can you have one App component with the business logic and one Swatch component just to display the component and button?
1. Start by modeling what data needs to be in your state.
1. You can generate a random color code with `'#' + Math.floor(Math.random() * 16777215).toString(16)`
1. You WILL need to pass functions as `props` into other components.

## Solution
Checkout the "solution" directory to see a working solution if you feel stuck.