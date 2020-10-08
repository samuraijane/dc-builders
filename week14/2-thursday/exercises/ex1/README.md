* make a UI that has inputs for title, author, and publicationDate
* provide a submit button
* on click, capture the values of the <input />s and log them out to the console

To capture form data, keep the following in mind
* inputs need attributes for id, name, and type (all of these fields can be 'text' for the type, for now)
* a label's 'for' attribute should match the id of the input
* everything should be wrapped in a `<form>` tag
* the submit button, which should also be in the `<form>` tag must be of type `submit`
* you will need an event listener on the button
* remember to keep the page from refreshing, you'll use `e.preventDefault`
* the handler you write needs to implement an instance of `FormData`
* below are some hints

```

function stringifyFormData(fd) {
  // create an empty data object here so the for loop below can add to it
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  // using JSON's stringify method, return the data here
}

const handleSubmit = e => {
  // stop the page from refreshing here
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data);
  // log out `stringified` here
}

```