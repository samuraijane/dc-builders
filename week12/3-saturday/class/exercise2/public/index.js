$().ready(() =>{
    loadTodos();
    var form = document.getElementById("form");
    var submit = document.getElementById("submit");

    form.addEventListener('submit', (e) => {
        handleSubmit(e)
        loadTodos
    });







})


function loadTodos () {
    $('#todo').empty();
    fetch('./api/todos')
    .then(res => res.json())
    .then(data => {
        for(i = 0; i < data.length; i++){
            console.log(data[i].todo)
            $('#todo').append(data[i].todo + "<br>")
        }
       
    })
}

function stringifyFormData(fd){
        const data = {};
        for (let key of fd.keys()){
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 4);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const data = new FormData(e.target);
        const stringified = stringifyFormData(data);
        console.log(stringified)

        fetch('./api/todos', {
            method: 'POST'
        },
        {
            body: stringified
        })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });

    
    }
