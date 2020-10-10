console.log("Hello World")

function stringifyFormData(fd) {
    // create an empty data object here so the for loop below can add to it
    const data = {};
    $('#currentInfo').append(`<h2>ENTERED BOOK:</h2>`);
    // key looks for name object
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
      $('#currentInfo').append(`<ul><li>${data[key]}</li></ul>`);
    }
    // using JSON's stringify method, return the data here
    var myJSON = JSON.stringify(data);
    console.log(data);
    return myJSON;
  }


const postToServer = (url, body) => {
    return fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body})
}


const buttonSubmit = e => {
  // stop the page from refreshing here
    e.preventDefault();
    // Class (FormData)
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    // log out `stringified` here
    console.log(stringified)
    // sends stringified to endpoint
    postToServer('http://localhost:3001/books',stringified)
      .then(res => {
        return res.json()
        })
      .then(data => console.log(data));

    form.reset();
  }


const form = document.getElementById('form');
form.addEventListener('submit', buttonSubmit);

