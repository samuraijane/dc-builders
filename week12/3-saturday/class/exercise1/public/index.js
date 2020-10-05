console.log('Hello World')

function render(data) {
    let html = `<strong>${data.count}</strong>`
    return html
}

$().ready(()=>{
    fetch('./api/value')
        .then(res => res.json())
        .then(data => {
            $('#counter-value').html(render(data))
        
    })

    let incButton = document.getElementById('increment')
    incButton.addEventListener('click', ()=>{
        fetch('./api/increment', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            $('#counter-value').html(render(data))
        })
    })

    let decButton = document.getElementById('decrement')
    decButton.addEventListener('click', ()=>{
        fetch('./api/decrement', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            $('#counter-value').html(render(data))
        })
    })

    let resButton = document.getElementById('reset')
    resButton.addEventListener('click', ()=>{
        fetch('./api/reset', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            $('#counter-value').html(render(data))
        })
    })
    


})