const button = document.getElementById('button')

document.addEventListener("DOMContentLoaded", function(data){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=ffe2cd367264d64431346733cc7afb14');
    console.log(data);
})

button.addEventListener('click', function(){
    //console.log("Hello World");
    button.value="Generating Doggo...";
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            //const breeds = [];
            //breeds.getElementById("breed");
            const images = document.getElementById("dog_images");
            const img = document.createElement("img");
            img.setAttribute('src',data.message);
            images.appendChild(img);
            button.value = "Generate Doggo";

            
            console.log(data);
        })

    
})



  