const form = document.getElementById("form");
form.addEventListener("click", function () {
  event.preventDefault();
  const data = new FormData(event.target);
  const stringified = stringifyFormData(data);
  console.log(stringified);
});

function stringifyFormData(fd) {
  const data = {};

  for (let field of fd.keys()) {
    data[field] = fd.get(field);
  }
  return JSON.stringify(data, null, 2);
}
