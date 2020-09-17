// document.getElementById("button").addEventListener("click", function() {
//     document.getElementById("dog-button").innerHTML = "Generate Doggo";
//     console.log("dog-button")
// }

document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            var dataCont = document.getElementById('dog-');
            var item = document.createElement("p");
            var text = data.weather[0].description;
            // item.innerHTML = JSON.stringify(data);
            item.innerHTML = text;
            dataCont.appendChild(item);
            console.log(data);
        } );
  });


