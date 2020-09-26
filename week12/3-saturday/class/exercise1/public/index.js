console.log("Hello world");

$().ready(()=> {
    fetch('./api/value')
    .then(res => res.json())
    .then(data => {
        $('#counter-value').html(data)
    })

    let incButton = document.getElementById('increment')
    incButton.addEventListener('click', ()=> {
    fetch('./api/increment', {method: 'POST'})
    .then(res => res.json())
    .then(data => {
        $('#counter-value').html(data)
        })
    })

    let decButton = document.getElementById('decrement')
    decButton.addEventListener('click', ()=> {
    fetch('./api/decrement', {method: 'POST'})
    .then(res => res.json())
    .then(data => {
        $('#counter-value').html(data)
    })
    })

})
