let render = (dataArray) => {
    let todoArray = dataArray.map((todoItem) => {
        return `<li>${todoItem['todo']} <a href="#" onclick="deleteItem(${todoItem['id']})" id="trash-delete"><i class="fas fa-trash"></i></a></li>`
    })
    return todoArray.join('\n')
}

let fetchItems = () => {
    fetch('/api/todos')
        .then(res => res.json())
        .then(data => {
            $('#todo-list').html(render(data))
        })
} 

let deleteItem = (itemID) => {
    console.log(itemID)
    fetch('/api/todos/' + itemID, {method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            //$('#messaging').text(data.msg) 
            fetchItems()
        })
}

$().ready(() => {
    fetchItems()

    $('#add-item').click(() => {
        console.log('hello');
        let newListItem = $('#list-item-value').val()
        console.log(newListItem)
        // addItem(newListItem)
    })
})