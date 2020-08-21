const button=document.getElementById('doggo');
const content=document.getElementById("content");
button.addEventListener("click",function(){
    button.innerHTML="Generating Doggo..."
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>response.json())
    .then(data=>{
        console.log(data)
        let image=document.createElement("img");
        image.src=data.message;
        content.appendChild(image);
        button.innerHTML="Doggo Generated!"
    })
})