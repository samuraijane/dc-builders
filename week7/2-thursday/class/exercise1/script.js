const button = document.getElementById('button')

button.addEventListener('click', function(){
    //console.log("Hello World");
    button.value="Generating Doggo...";
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function(data){
            const images = document.getElementById("images");
            const img = document.createElement("IMG");
            images.appendChild(img);
            images.innerHTML = data;
            
        })

    
})



  