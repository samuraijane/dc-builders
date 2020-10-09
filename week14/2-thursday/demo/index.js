function stringifyFormData(fd) {
  const data = {};
  // create an empty data object here so the for loop below can add to it
  // key looks for name object
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  // using JSON's stringify method, return the data here
  var myJSON = JSON.stringify(data);
  console.log(data);
  return myJSON;
}
const buttonSubmit = (e) => {
  e.preventDefault();
  // stop the page from refreshing here
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data);
  // log out `stringified` here
  console.log(stringified);
  form.reset();
};
const form = document.getElementById("form");
form.addEventListener("submit", buttonSubmit);
