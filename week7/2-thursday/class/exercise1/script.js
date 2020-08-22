var button = document.getElementById("button");

button.addEventListener("click", function(){
    console.log("event");
    button.innerHTML = "Generating Doggo...";
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var doggoChamber = document.getElementById('doggoChamber');
        var doggoIMG = document.createElement('img');
        doggoIMG.src = data.message;
        doggoChamber.appendChild(doggoIMG);
    } );
});

