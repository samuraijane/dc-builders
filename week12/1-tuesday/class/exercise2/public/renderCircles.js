
function renderCircles(circles) {
    var circlesHTML = circles.map(function (circle) {
        return `
            <div style="width: ${circle.radius*2}px; height: ${circle.radius*2}px; border-radius: ${circle.radius}px; background-color: ${circle.color};">
                
            </div>
        `
    });

    return `
        <div class="d-flex flex-column align-items-center">
            ${circlesHTML.join('')}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    axios.get('/api/circles').then(function (response) {
        content.innerHTML = renderCircles(response.data);
    });

}