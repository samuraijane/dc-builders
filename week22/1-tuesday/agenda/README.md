# Week 22 – Tuesday, Redux Redux

![Redux Zen](https://media.giphy.com/media/YA6dmVW0gfIw8/giphy.gif)

## Friendly reminder about the React Capstone
1. I starts in two days!
1. It is a solo project
1. It is due Tuesday, December 22

## Agenda
1. Homework Review / Demo of [dynamic drop down menus](../../../week21/3-saturday/homework/README.md)
1. Redux Review
1. Finish building the [ACME Bank application](../../../week21/3-saturday/class/acme-bank)

## Learning Objectives
1. Continue learning the basics of Redux

## References
1. [Basic Tutorial in Redux](https://react-redux.js.org/introduction/basic-tutorial)
1. [React + Redux Youtube Tutorial](https://www.youtube.com/playlist?list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt) (Shout out to Eli for sharing this!)
1. [Redux in the Learning Portal](https://learn.digitalcrafts.com/flex/#_20-redux) (This has way more information that we are covering and although we have added it here as a reference, the Basic Tutorial in Redux is aligned more with what we will do today.)

## A little review
One of the challenges to learning Redux is that there are many pieces that have to fit together in order to make it work so it's difficult to spell it all out in a linear fashion without feeling overwhelmed. Obviously, the more you work with it, the more it makes sense. But from a high-level perspective, here are the steps in case you forget.

#### 01 – Create a React project
* `npm install create-react app`

#### 02 – Install dependencies
* `npm install react-router-dom`
* `npm install redux`
* `npm react-redux`

#### 03 – Create file tree
* `mkdir src/components`
* `mkdir src/redux`
* `mkdir src/redux/reducers`

#### 04 – Add some components
`touch src/components/checking.jsx`
`touch src/components/landing.jsx`
`touch src/components/savings.jsx`

#### 05 – Build navigation with routing
* remember that you need to wrap the application with `<Router />`
* a good place to do this is in `index.js`

#### 06 – Create default state with hard-coded values
* `touch  src/redux/reducers/checking.js`
* `touch  src/redux/reducers/index.js`
* `touch  src/redux/reducers/savings.js`

#### 07 – Create a Redux Store
* don’t forget to add the plugin for Redux Dev Tools
* it looks like this: `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`

#### 08 – Add the store to the application
* again in `index.js`
* this time wrap everything in `<Provider store={store} />`

#### 09 – Inspect at the Redux store
* Use Redux Dev Tools
* Does it look like you expected?

#### 10 – Define Action Types
* `touch src/redux/actionTypes.js`

#### 11 – Connect the components to the Redux Store
* `mapStateToProps`
* test the connection by consuming values from the store and rendering them in the UI
* remember to export the component using `connect()`

#### 12 – Define some actions
* `touch src/redux/actions.js`

#### 13 – Import the actions into the components
* `mapDispatchToProps`
* add handlers that use the actions

## Homework
1. to be determined
