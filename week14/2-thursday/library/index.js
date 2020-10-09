$(document).ready(() => {
    console.log("Ready")
    $("#bookData").on("submit", function (e) {
        e.preventDefault();
        console.log("Submitting!")
        // console.log(e)
        console.log("Book Title: " + e.currentTarget[0].value) //can cause problems if order gets changed
        console.log("Author Name: " + e.currentTarget[1].value)
        console.log("Publication Date: " + e.currentTarget[2].value)
    })
})