$().ready(() => {
    $("#book-entry").submit((event) => {
        event.preventDefault();
        let bookTitle = $("#book-title").val();
        let bookAuthor = $("#book-author").val();
        let bookDate = $("#book-date").val();
        let bookPayload = {
            title : bookTitle, 
            author : bookAuthor,
            date : bookDate
        }

        fetch("http://localhost:3001/books", { //would chain author endpoint here first
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookPayload)
        })
        .then((response) => {
            console.log(response.status)
            // .fetch("http://localhost:3001/books", {
            //     method: "POST",
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(bookPayload)
            // }).then(response => response.status)
        })
    })
})