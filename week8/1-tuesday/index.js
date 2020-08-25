$ (() => {
 console.log=('working?')


fetch('https://dog.ceo/api/breeds/list/all')
    .then(respone => response.json())
    .then(data => {

        var $dogSelect = $(`<select name="dog-breed" id="dog-select"></select>`)
        
        console.log(data);

        data.message.forEach((breed)=>{
            console.logo("In loop:" + breed);
            var breedOption =`<option value="${breed}">${breed}</option>`
            $dogSelect.append(breedOption);
        })

        $('#dog-div').empty();
        $('#dog-div').append($dogSelect)

        $dogSelect.change((target)=>{
            console.log('Changing: ');
            console.log($dogSelect.val());


        fetch(`https://dog.ceo/api/breed/${dogSelect.val()}/images/random`)
            .then(respone => response.json())
            .then(data => {});

        });


    });
    
});