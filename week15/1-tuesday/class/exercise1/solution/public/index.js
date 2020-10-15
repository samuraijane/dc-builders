async function getTodos(){
    return fetch('./api/todos')
        .then(res => res.json())
        .then(data => {
            $('#todo-container').html(render(data))
        })
}

async function toggleTask(todoId) {

    // Generally, you would want to store all the tasks in a variable and access them
    // directly, but using the GET item call to illustrate all the endpoints
    let res = await fetch(`./api/todos/${todoId}`)
    let todo = await res.json()

    let payload = {
        id: todo.id,
        todo: todo.todo,
        isCompleted: !todo.isCompleted
    }

    await fetch(`./api/todos/${todo.id}`, { 
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
        }).catch( err => console.error(err))

    await getTodos()
}

async function deleteTask(todoId) {
    await fetch(`./api/todos/${todoId}`, { 
        method: 'DELETE'
        }).catch( err => console.error(err))
    await getTodos()
}

async function createTask(text) {

    let payload = {
        todo: text
    }

    await fetch(`./api/todos`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
        }).catch( err => console.error(err))

    await getTodos()
}

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

$(() => {
    getTodos()

    $("#new-todo").submit((e) => {
        e.preventDefault()
        text = $("#new-todo-text").val()
        createTask(text)
    })
})