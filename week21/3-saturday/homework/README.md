## Dynamic Drop Down Menus

Our application needs two drop down menus side-by-side. Each one has the same options–
  * checking
  * savings
  
### Summary
Make the menus dynamic but setting the value in one based on the selection of the other.
For example, if I choose "checking" in the first menu, the second one should automatically populate to reveal "savings". If I choose "savings", the second one should become "checking". The same should happen if I make my selections using the second menu instead of the first.
You do not need to do this in the application that we started today but can if you want. Using an online playground is acceptable.
The must be done in React using either the `useState` hook in a function component or a `state` object in a class component.
