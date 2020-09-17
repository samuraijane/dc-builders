var doggoDiv = document.getElementById("doggo-container");
var doggoButton = document.getElementById("doggo-button");

doggoButton.addEventListener("click", function(e) {
    console.log(e);
    doggoButton.innerHTML = "Generating Doggo...";
    doggoButton.disabled=true;

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var doggoImg = document.createElement("img");
            doggoDiv.appendChild(doggoImg);
            doggoImg.src = data.message; 

        })
        .then(() => {
            doggoButton.innerHTML = "Generate Doggo";
            doggoButton.disabled=false;
        })
});




