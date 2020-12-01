# Exercise: Custom Giphy Search++Component

Your boss loved the work you did on the last component for the trending Giphy component, but now wants the ability to search for a GIF embedded in your company's site. 
Adapt your previous work to provided enhanced GIF search to your site!

## Requirements
1. Create a new component, `GifSearchForm`, to display a form for improved GIF search:
    1. A text box for searching a term of phrase
    1. A dropdown box for selecting the rating, including "all"
    1. A radio button that allows a search limit of 5, 20 or 50 GIFs.
    1. A submit button.
    1. A "More" button that is enabled when a search is present. When clicked it displays the next set of results.
1. Have this component's parent store the state and make the API call.
1. Reuse the card components you used in the previous exercise to display GIFs.

## Strech Goals
1. If you'd like to try `https://react-bootstrap.github.io/`, that would be fine.

## Tips
1. If you need a solid foundation to start with, start with the solution in the previous exercise.
1. In `./src/api/giphy.js`, replace `YOUR_API_KEY` with your API key from the previous exercise.
1. You'll definitely want to review the documentation for the [Search API Endpoint](https://developers.giphy.com/docs/api/endpoint#search).
1. The `componentDidMount` method is still your friend.