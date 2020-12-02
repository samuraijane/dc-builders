# Phase 3: React Project Requirements

These are the requirements for the Phase 3 React project for the Flex course at
[DigitalCrafts] Online. It is focused on using [React.js] with [Redux].

> NOTE: You must complete this project in accordance with the requirements laid out
  below in order to fulfill requirements for credit for the course. If
  you have any questions or concerns about the requirements, please see an
  instructor.

[DigitalCrafts]:https://www.digitalcrafts.com/
[React.js]:https://reactjs.org/
[Redux]:https://redux.js.org/

## Project Description

Write an interesting web application using [React.js] and [Redux]. By this point
in the class you should have a solid grasp of git, GitHub, web fundamentals, and
general development workflow.

The structure for this project is intentionally flexible in order to let you
explore ideas, challenge yourself, and build something you want to create. Let's
get creative and build the web :)

The focus of your project should be in the web browser (ie: frontend), and
specifically something that requires managing state using React.js and Redux. A
small game is an excellent project idea.

> # THE FOCUS OF THIS PROJECT IS COMPLETION, NOT COMPREHENSIVENESS

## Project Requirements

- You must use [React.js] and [Redux] in order to manage the state of a frontend application.
  - using [react-redux] is highly recommended, but not a hard required
- Your application must contain at least 6 React components.
- Organize components into separate files and `import` / `export` using es6 modules
  - In general it should be "one component per file"
  - There can be exceptions to this; use your best judgment on code organization
- You must have at least 5 separate Redux action types.
- At least one component must use local `state` and not participate in the Redux state management
  - Tip: pick a small component with some trivial, ephemeral state for this
  - When in doubt, store things in your Redux store
- At least one component must use a [lifecycle method](https://reactjs.org/docs/react-component.html#componentdidmount) like `componentDidMount`, `componentWillUnmount`, etc
- This is a *solo* project - just you (with the support of the teaching staff).

## Bonus Requirements

> NOTE: These are not required for the project, but advised for better understanding / comprehension of the topic.

- Use a component from an external library, loaded via `npm`
  - Example: [bulma-react-components](https://www.npmjs.com/package/react-bulma-components), [react-bootstrap](https://react-bootstrap.github.io/), etc
- Persist your Redux store somewhere like `localStorage` or an external database
  - When the user refreshes your page you should be able to load exactly the same state they were in when they left the page
- Instead of writing one large application, write two small ones
  - More projects is good for your portfolio
- Deploy your project somewhere where people can see and play with it
  - GitHub Pages
  - Surge
  - Firebase hosting
  - Netlify
  - etc

## Final Tips

- Remember to keep your `render` methods small.
  - Compose your application using re-usable components, not copy/paste JSX.
  - Less than 20 lines of JSX is a good rule of thumb.
- Good luck and have fun with this one :) We are in the home stretch!
