console.log("Hello World")
$().ready(()=> {

    // fetch('localhost:3000/api/')

    async function getTodos(){
        return fetch('./api/todos')
            .then(res => res.json())
            .then(data => {
                $('.todoList').html(render(data))
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

//Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);



//Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}


//Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove(); 
}

})