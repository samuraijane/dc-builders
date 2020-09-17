const button = document.getElementById('button');
const dataCont = document.getElementById("data-container");

$().ready(() => {
    $('button').click( () => {
        button.disabled = true;
        button.innerText = "Generating Doggo...";
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                var img = document.createElement('img');
                img.src = data.message;
                dataCont.appendChild(img);
                button.disabled = false;
                button.innerText = "Generate Doggo";
            });
    });
});