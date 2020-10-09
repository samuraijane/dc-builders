function stringifiedFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifiedFormData(data);
  console.log(stringified);
};

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit());
