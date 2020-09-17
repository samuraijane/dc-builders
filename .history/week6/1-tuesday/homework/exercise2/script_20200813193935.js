let form = document.getElementById('form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e);
    const data = new FormData(form)
});


