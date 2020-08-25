console.log("Script file is attached!")

var generateDogBtn = document.getElementById('generate-dog-btn');


generateDogBtn.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            var dogImageTag = document.createElement('img')
            dogImageTag.setAttribute('src', data.message)
            // dogImageTag.src = data.message;
            // <img src={the url I got from the server/>

            var dogDiv = document.getElementById('dog-image-div');
            dogDiv.appendChild(dogImageTag);

            console.log(data)
        });
})

