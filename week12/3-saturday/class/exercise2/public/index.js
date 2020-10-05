console.log('Hello World')

let render = (dataArray) => {
    let todoArray = dataArray.map((toDoItem) => {
        return `<li>${toDoItem['todo']} <button id="trash">delete</button></li>`
    })
    return todoArray.join('\n')
}

$().ready(()=>{
    fetch('./api/todos')
        .then(res => res.json())
        .then(data => {
            console.log(data[0].todo)
            console.log(data.length)
            $('#tdList').html(render(data))
   
    })

    let newItem = document.getElementById('addItem')
    newItem.addEventListener('click', ()=>{
        fetch('./api/todos', {method: 'POST'})
        .then(res => res.json())
        .then(data => {
            $('#tdList').html(render(data))
        })
    })

    let deleteItem = document.getElementById('trash')
    deleteItem.addEventListener('click', ()=>{
        fetch('./api/todos/:id', {method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
           console.log(data)
        })
    })

//     let resButton = document.getElementById('reset')
//     resButton.addEventListener('click', ()=>{
//         fetch('./api/reset', {method: 'POST'})
//         .then(res => res.json())
//         .then(data => {
//             $('#counter-value').html(render(data))
//         })
//     })
    


})