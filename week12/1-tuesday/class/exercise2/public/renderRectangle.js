
function renderRectangle(rectangle) {
    return `
        <div style="width: ${rectangle.width}px; height: ${rectangle.height}px; background-color: ${rectangle.color};"></div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    axios.get('/api/rectangle').then(function (response) {
        content.innerHTML = renderRectangle(response.data);
    });

}