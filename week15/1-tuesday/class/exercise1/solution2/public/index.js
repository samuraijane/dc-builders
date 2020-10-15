// GET

function getTodos(){
    fetch('./api/todos')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $('#todo-container').html(`${render(data)}`)
    })
    .catch(err => {
        console.error(err);
        console.log("There was an error");
    })
}

// POST

async function createTask(text) {
let payload = {
    todo: text,
    isCompleted: false
}
await fetch('./api/todos', { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
    }).catch( err => console.error(err))

await getTodos()
}

// RENDER

function render(todoArray) {
// let html = ''
todoArray = todoArray.map(item => {
    let completed = item.isCompleted ? 'class="completed"' : ""
    let span = `<span ${completed}>${item.todo}</span>`
    let controls = `<button onclick="toggleTask(${item.id})">Completed</a> <button onclick="deleteTask(${item.id})">Delete</a>`
    return `<li> ${span}  ${controls}</li>`
})

return todoArray.join('\n')
}

// PUT

async function toggleTask(todoId) {

    await fetch(`./api/todos/${todoId}`, { 
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
//        body: JSON.stringify(payload) NO NEED FOR A BODY SINCE HOOKED UP WITH DATABASE
        }).catch( err => console.error(err))

    await getTodos()
}

// DELETE

async function deleteTask(todoId) {
    await fetch(`./api/todos/${todoId}`, { 
        method: 'DELETE'
        }).catch( err => console.error(err))
    
    await getTodos()
}


// INSIDE DOC READY; EVENT LISTENER

$(() => {
    console.log("JQuery is running...");

    getTodos();

    $("#new-todo").submit((e) => {
        e.preventDefault()
        text = $("#new-todo-text").val()
        createTask(text)
    })
})