function stringifyFormData(fd) {
  const data = {
    title: fd.get("title"),
    author: fd.get("author"),
    publicationDate: fd.get("publicationDate"),
  };
  return JSON.stringify(data, null, 4);
}

async function postData(url, data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.

    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: data, // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data);
  postData("http://localhost:3001/books", stringified);
};
// .then((data) =>
//     console.log("data", data)
//   );

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

// fetch('http://localhost:3001/book').thens
