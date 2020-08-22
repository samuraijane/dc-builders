const submitButton = document.getElementById("submit-button");
const theDiv = document.getElementById("the-div")

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    submitButton.value = "Generating Doggo...";
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            let newImg = document.createElement('img');
            newImg.setAttribute("src", data.message);
            newImg.setAttribute("class", "new-dog")
            theDiv.appendChild(newImg);
            submitButton.value = "Generate Doggo";
        })
});