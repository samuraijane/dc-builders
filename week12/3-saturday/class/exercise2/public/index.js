$().ready(() => {
   
    fetch('/api/todos')
    .then(response => response.json())
    .then((data) => {
        for (let i=0; i<data.length; i++) {
            console.log(data[i].todo);
            $('#todo-items').append(`<li><input type='checkbox' value='${data[i].id}'>${data[i].todo}</li>`);
        }
    })

    //add event listener for submit button (add a todo), use post method

    $('#add-form').submit((e) => {
        e.preventDefault();
        let newTodo = $('#new-todo').val();
        console.log(newTodo);

        let body = {
            todo: newTodo
        };
        //need to let string that is inputted become the value of the todo key. POST will then create the id key
        // "{ "todo": "whateves" }"
        fetch('./api/todos', { 
            method: 'POST', 
            body: JSON.stringify(body), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
                console.log(data)
                $('#todo-items').append(`<li><input type='checkbox' value='${data.id}'>${data.todo}</li>`);
        })

    })

    //add event listener for remove button, use delete method
    $('#rm-btn').click(() => {
        let todoIDs = $('#todo-items li').has('input:checked')

        $('#todo-items li').has('input:checked').remove(); //this just removes item in browser

        function rmTodos(url, todoID) {
            fetch(url + "/" + todoID, {method: 'DELETE'})
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            })
        }
    })
})