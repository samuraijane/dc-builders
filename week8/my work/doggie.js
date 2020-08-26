$ (() => {
 console.log=('working?')


fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {

        var $dogSelect = $(`<select name="dog-breed" id="dog-select"></select>`)
        
        console.log(data);

        data.message.forEach((breed)=>{
            console.logo("In loop:" + breed);
            var breedOption =`<option value="${breed}">${breed}</option>`
            $dogSelect.append(breedOption);
        });

        $('#dog-div').empty();
        $('#dog-div').append($dogSelect)

        $dogSelect.change((target)=>{
            console.log('Changing: ');
            console.log($dogSelect.val());


        fetch(`https://dog.ceo/api/breed/${dogSelect.val()}/images/random`)
            .then(response => response.json())
            .then(data => {

                var dogImage = $(`<img src="${data.message}>"`)
                $('#dog-div').append($dogSelect)
                console.log('Fetch 2:' + data);
            });

        });


    });
    
});