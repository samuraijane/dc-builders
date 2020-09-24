
function renderStudents(students) {
    var studentsHTML = students.map(function(student){
        return `
            <div class="m-3 p-3 w-25" style="background-color: ${student.isPresent ? "lightgreen" : "red" };">
                <h1>${student.name}</h1>
                <p>${student.isPresent ? "Present" : "Absent"}</p>
            </div>
        `
    });
    return `
        <div class="text-center mt-5 d-flex flex-column align-items-center">
            <h1>Roll Call!</h1>
            ${studentsHTML.join('')}
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    axios.get('/api/students').then(function (response) {
        content.innerHTML = renderStudents(response.data);
    });

}