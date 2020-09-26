

$().ready(() => {
    fetch('./count')
    .then(res => res.json())
    .then(data => {
        $('#counter-value').html(data);
    })

    $('#inc').click( function () {
        console.log('increment')
        fetch('./increment', {method: 'POST'})
        .then(res => res.json())
        .then(data =>
        {
            $('#counter-value').html(data)
        })
    })
    $('#dec').click(function() {
        console.log('decrement')
        fetch('./decrement', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            $('#counter-value').html(data)
        })
    })

    $('#reset').click(function() {
        console.log('reset count')
        fetch('./reset', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            $('#counter-value').html(data)
        })
    })

})