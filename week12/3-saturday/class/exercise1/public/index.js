$().ready(() => {
    console.log("Hello World");

    //add fetch for api value

    fetch('./api/value')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        $('#count-value').html(data)
    })
    .catch((err) => {
        console.log(`There was an: ${err}`);
    })

    //add click listener and fetch (POST) for api increment
    $('#increment').click(() => {
        fetch('./api/increment', { method: 'POST'})
        .then(response => response.json())
        .then((data) => {
            $('#count-value').html(data)
        })
    })

    //add click listener and fetch (POST) for api decrement

    $('#decrement').click(() => {
        fetch('./api/decrement', { method: 'POST'})
        .then(response => response.json())
        .then((data) => {
            $('#count-value').html(data)
        })
    })

    //add click listener for reset

    //TBD
})
