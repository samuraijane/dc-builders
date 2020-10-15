// document.addEventListener("DOMContentLoaded", function () {
//   // Handler when the DOM is fully loaded
//   fetch("https://dog.ceo/api/breeds/list")
//     .then((response) => response.json())
//     .then((data) => {

//         var $dogSelect = $(`<select name= "dog-breed" id= "dog-select"></select>`)

//       data.message.map(function (e) {
//         //console.log(e);

//         let option = document.createElement("OPTION");
//         option.setAttribute("value", e);
//         option.setAttribute("name", e);
//         option.text = e;
//         document.getElementById("breed-options").appendChild(option);
//       });
//       let selectBreed = document.getElementById("breed-options");
//       selectBreed.addEventListener("change", function () {
//         //fetch('https://dog.ceo/api/breeds/list')/api/breed/{breed name}/images/random
//           .then((response) => response.json())
//           .then((data) =>{})
//       });
//       //console.log(data.message[56]);
//     });
// });
// $(()=>{
//     console.log('HTML Loades')
//     fetch("https://dog.ceo/api/breeds/list")
//         .then((response) => response.json())
//         .then((data) => {
    
//             var $dogSelect = $(`<select name= "dog-breed" id= "dog-select"></select>`)
    
//           data.message.forEach(function (breed) {
//             //console.log(e);
    
//             let option = document.createElement("OPTION");
//             option.setAttribute("value", e);
//             option.setAttribute("name", e);
//             option.text = e;
//             document.getElementById("breed-options").appendChild(option);
//           });

// })