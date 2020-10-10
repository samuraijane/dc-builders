//const { all } = require("sequelize/types/lib/operators");

$().ready(function () {


    $('#form').on("submit", function(event){
        event.preventDefault();

        let author = $('#author').val();
        let title = $('#title').val();
        let date = $('#date').val();
        idCount++;

        let bookInfo = {
            "author": author,
            "title": title,
            "date": date
        }

        fetch("http://localhost:3001/books", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookInfo)
        })
        .then(response => console.log(response.status))
        console.log(bookInfo)
        
         $(".bookList").append(
                `${bookInfo.author} published their book, ${bookInfo.title}, on ${bookInfo.date} <br>`
            )
    })

      

})
