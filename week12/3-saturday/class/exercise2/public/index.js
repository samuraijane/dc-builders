let render = (dataArray) => {
    let todoArray = dataArray.map((todoItem) => {
        return `<li>${todoItem['todo']} <a href="#" onclick="deleteItem(${todoItem['id']})" id="trash-delete"><i class="fas fa-trash"></i></a></li>`
    })
    return todoArray.join('\n')
}

let deleteItem = (itemID) => {
    console.log(itemID)
    fetch('/api/todos/:id', {method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            $('#todo-list').html(render(data))
        })
}

$().ready(() => {
    fetch('./api/todos')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            $('#todo-list').html(render(data))
        })
})