document.getElementById("dog-button").addEventListener("click", function() {
    document.getElementById("dog-button").innerHTML = "Generate Doggo...";
    // console.log("dog-button")
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
     .then(data => {
            
        // .then(function(data) {

        // })
        // .then(data => {
        //     var dataCont = document.getElementById('dog-button');
        //     var image = document.createElement('img');
        //     image.src = ('https://dog.ceo/api/breeds/image/random');
        //     document.getElementById('.dog-data').appendChild(image);
        // });
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


