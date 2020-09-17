# Class Exercise 2
Use a promise to mimic a network request that takes two seconds to complete before returning data

## Requirements
1. Write two functions– `getData` and `printData`
2. Make sure that `getData` returns a promise
3. The data that it returns when the promise resolves can be any data type and it can be hard-coded
4. You will need `setTimeout` to create an artificial delay of two seconds
5. `printData` will receive the data from `getData` once the promise resolves and print it to the console
6. Connect `getData` to a single button in the UI that says _Get Data_
