console.log("Hello World");

$().ready(() => {
    fetch('./api/value')
    .then(res => res.json())
    .then(data => {
        $('#counter-value').html(data)
    })

    $('#increment').click(() => {
        fetch('./api/increment', {method: 'POST'})
            .then(res => res.json())
            .then(data => {
            $('#counter-value').html(data)
        })
    })

    $('#decrement').click(() => {
        fetch('./api/decrement', {method: 'POST'})
            .then(res => res.json())
            .then(data => {
            $('#counter-value').html(data)
        })
    })

    $('#reset').click(() => {
        fetch('./api/reset', {method: 'POST'})
            .then(res => res.json())
            .then(data => {
            $('#counter-value').html(data)
        })
    })
})