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