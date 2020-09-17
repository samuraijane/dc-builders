


$().ready(() => {
    console.log("Jquery is running!")


    $('#generate-dog-btn').click( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {

                var $dogImageTag = $('<img>')

                console.log($dogImageTag.attr('src'))

                $dogImageTag.attr('src', data.message)

                console.log($dogImageTag.attr('src'))

                $('#dog-image-div').append($dogImageTag)
        
                console.log(data)
            });
    });
})

