const button = document.getElementById('button');
const dataCont = document.getElementById('doggie');

button.addEventListener('click', function(e){
    e.preventDefault();
    button.disabled = true;
    button.innerText = "Generating Doggo...";
    
    // Handler when the DOM is fully loaded
    setTimeout(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            var dogPic = document.createElement('img');
            // item.innerHTML = JSON.stringify(data);
            // dogPic.src = data.message

            dogPic.setAttribute('src', data.message);
            dataCont.appendChild(dogPic);
            console.log(data);
        });
    button.disabled = false;
    button.innerText = "Generate Doggo";
    }, 300);
  });


  //set a promise to prevent button enabling until done
//   let form = document.getElementById("formcoookie");


// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     let subbut = document.getElementById("submit-button");
//     subbut.disabled=true;
//     let newDiv = document.createElement('div');
//     newDiv.innerHTML = "Please wait while we review your order..."
//     form.appendChild(newDiv);

//     console.log(e);
//     const data = new FormData(form);
//     console.log(stringifyFormData(data));
//     const stringified = stringifyFormData(data);

//     let dataInfo = data.forEach(listIt);

//     function listIt(item, index) {
//         newDiv.innerHTML += index + ": " + item + "<br />";
//     } 

//     postData(stringified).then(data => {
//         subbut.disabled=false;
//         console.log(`Your form has been submitted with the following data.\n\n${data}`)
//         let dataInfo = data.forEach(listIt);
//         function listIt(item, index) {
//             newDiv.innerHTML += index + ":" + item + "<br>"; 
//         }
//         newDiv.innerHTML = `Here is your order: ${dataInfo}`;
//     }
// );
// });

// function stringifyFormData(fd) {
//     const data = {};
//     for (let key of fd.keys()){
//         data[key] = fd.get(key);
//     }
//     return JSON.stringify(data,null,4);
// };


// const postData = (data) => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res(data);
//         }, 3000);
//     });
//     return promise;
// }
