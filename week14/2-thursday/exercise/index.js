$().ready(() => {
  const submit = document.getElementById("submit");

  function stringifyFormData(fd) {
    let data = {};
    for (let field of fd.keys()) {
      data[field] = fd.get(field);
    }
    return JSON.stringify(data);
  }

  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    return response.json();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const data = new FormData(form);
    const stringified = stringifyFormData(data);
    postData("http://localhost:3001/authors", stringified);
  };

  submit.addEventListener("click", (event) => {
    handleSubmit(event);
  });
});

// $().ready(() => {
//     $("#book-entry").submit((event) => {
//         event.preventDefault();
//         let bookTitle = $("#book-title").val();
//         let bookAuthor = $("#book-author").val();
//         let bookDate = $("#book-date").val();
//         console.log(`The book submitted was ${bookTitle} by ${bookAuthor} with a publication date of ${bookDate}.`)
//     })
// })
