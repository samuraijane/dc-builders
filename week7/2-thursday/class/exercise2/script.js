const breed=document.getElementById("breed")
const button=document.getElementById('doggo');
const content=document.getElementById("content");

document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    fetch("https://dog.ceo/api/breeds/list ")
        .then(response => response.json())
        .then(data => {
            for (i of data.message){
                let option=document.createElement("option");
                option.text=i;
                breed.add(option);
            }
           console.log(data);
        } );
    });
breed.addEventListener("change", function(event){
    button.innerHTML="Generating Doggo..."
    fetch(`https://dog.ceo/api/breed/${this.value}/images/random`)
    .then(response =>response.json())
    .then(data=>{
        console.log(data)
        let image=document.createElement("img");
        image.src=data.message;
        content.appendChild(image);
        button.innerHTML="Doggo Generated!"
    })
})