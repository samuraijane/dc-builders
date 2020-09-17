document.getElementById("dog-button").addEventListener("click", function() {
    document.getElementById("dog-button").innerHTML = "Generate Doggo...";
    // console.log("dog-button")
    fetch('https://dog.ceo/api/breeds/image/random')
        
        .then(function(data) {

        })
        .then(data => {
            let dataCont 


        });
});

// document.addEventListener("DOMContentLoaded", function(){
//     // Handler when the DOM is fully loaded
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(data => {
//             var dataCont = document.getElementById('dog-button');
//             var item = document.createElement("image");
//             // var text = data.weather[0].description;
//             dataCont.innerHTML = JSON.stringify(data);
//             // item.innerHTML = text;
//             // dataCont.appendChild(item);
//             // console.log(data);
//         } );
//   });


