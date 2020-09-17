let form = document.getElementById('form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(`event: ${JSON.stringify(e, null, for}`);
});
