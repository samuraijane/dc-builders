$().ready(() => {
    $("#bookForm").submit((event) => {
        event.preventDefault();
        let bookTitle = $("#titleName").val();
        let bookAuthor = $("#authorName").val();
        let pubDate = $("#pubDate").val();
        console.log(bookTitle + bookAuthor + pubDate);
    })
})
