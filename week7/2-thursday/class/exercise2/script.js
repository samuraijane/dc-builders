var doggoDiv = document.getElementById("doggo-container");
var doggoButton = document.getElementById("doggo-button");
var breedSelector = document.getElementById("breed-selector");

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

fetch("https://dog.ceo/api/breeds/list")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var breedsList = data.message;

        function breedPopulator() {
            for (let i=0; i < 94; i++) {
                var breedOption = document.createElement("option");
                breedOption.value = breedsList[i];
                breedOption.innerHTML = breedsList[i];
                breedSelector.appendChild(breedOption);
                i++;
            }
        }

        breedPopulator();
    }
)

breedSelector.addEventListener("change", function() {
    console.log(this.value);
    fetch(`https://dog.ceo/api/breed/${this.value}/images/random`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            doggoDiv.innerHTML=""; // clears the div so only have 1 picture show
            let doggoByBreedImg = document.createElement("img");
            doggoByBreedImg.src = data.message;
            doggoDiv.appendChild(doggoByBreedImg);
            doggoButton.innerHTML="Doggo Generated!";
        })

    })