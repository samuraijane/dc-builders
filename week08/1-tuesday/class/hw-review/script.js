
$(()=> {
    console.log('HTML Loaded')

    fetch('https://dog.ceo/api/breeds/list')
        .then(response => response.json())
        .then(data => {

            // Whatever the top the top level thing is
             var $dogSelect = $('<select name="dog-breed" id="dog-select"></select>')

            // Add the options
            console.log(data)

            data.message.forEach((breed)=>{
                // console.log("Im in the for loop: " + breed)
                var breedOption=`<option value="${breed}">${breed}</option>`
                $dogSelect.append(breedOption)
            })

            $('#dog-div').empty()
            $('#dog-div').append($dogSelect)

            $dogSelect.change((target)=>{
                console.log('Changing: ')
                console.log($dogSelect.val())

                fetch(`https://dog.ceo/api/breed/${$dogSelect.val()}/images/random`)
                    .then(response => response.json())
                    .then(data => {
                        var $dogImage = $(`<img src="${data.message}" />`)
                        $('#dog-image-div').append($dogImage)
                        console.log("Fetch #2")
                        console.log(data)
                    })

            })
        });
})

// var generateDogBtn = document.getElementById('generate-dog-btn');

// generateDogBtn.addEventListener('click', ()=>{

//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://dog.ceo/api/breeds/list', false);  // `false` makes the request synchronous
//     request.send(null);

//     if (request.status === 200) {
//         console.log(request.responseText);
//     }

//     // fetch('https://dog.ceo/api/breeds/image/random')
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         var dogImageTag = document.createElement('img')
//     //         dogImageTag.setAttribute('src', data.message)
//     //         // dogImageTag.src = data.message;
//     //         // <img src={the url I got from the server/>

//     //         var dogDiv = document.getElementById('dog-image-div');
//     //         dogDiv.appendChild(dogImageTag);

//     //         console.log(data)
//     //     });
// })

