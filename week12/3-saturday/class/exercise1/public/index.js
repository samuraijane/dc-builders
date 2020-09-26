console.log("Hello world");

$().ready(()=> {
    fetch('./api/value')
    .then(res => res.json())
    .then(data => {
        $('#counter-value').html(data)
    })
    // let incButton = document.getElementById('increment')
    // incButton.addEventListener('click', ()=> {
    //     fetch('./api/value')
    //     .then(res => res.json())
    //     .then(data => {
    //         $('#counter-value').html(data)            
    // })
})
