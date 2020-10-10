$().ready(() => {
    $("#book-entry").submit((event) => {
        event.preventDefault();
        let bookTitle = $("#book-title").val();
        let bookAuthor = $("#book-author").val();
        let bookDate = $("#book-date").val();
        // console.log(`The book submitted was ${bookTitle} by ${bookAuthor} with a publication date of ${bookDate}.`);
        // console.log($("#book-entry").serialize());
        // console.log($("#book-entry").serializeArray());
        let bookPayload = {
            "book title": bookTitle, 
            "book author": bookAuthor,
            "book publication date": bookDate
        }

        fetch("http://localhost:3001/books", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookPayload)
        })
        .then(response => console.log(response.status))
    })
})