# Week 6 – Thursday

## Agenda
1. JavaScript FormData to capture form elements
2. JavaScript XMLHttpRequest
3. JavaScript Promise with asynchronous requests

### 1. JavaScript FormData to capture form elements
* add a _submit_ event handler to the `<form>` element
* include an `<input />` of type `submit` just before the closing `</form>` tag
* the handler must use `new FormData`
```
const handleSubmit = e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data);
  console.log(stringfied);
}
```
* one option to access the submitted data in a readable format is to stringify it
```
function stringifyFormData(fd) {
  const data = {}

  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }

  return JSON.stringify(data, null, 4);
}
```

### 2. XMLHttpRequest
* used to make requests to a server
* must be wrapped in a promise since it is asynchronous

### 3. JavaScript Promise with asynchronous requests
* a promise is a placeholder for a value that may or may not resolve
* functions that return a promise have a `.then` method through which data is passed to another function
* if you see `.then`, the method which precedes it returns a promise
* promises are chained so that we can specify a specific order for things to happen, for example
```
getSomeData().then(manipulateThatData).then(useThatDataInSomeWay);
```
