
function renderNametags(nametags) {

    var nametagsHTML = nametags.map(function(currentName){
        return ` 
            <div class="nametag mx-auto w-50 text-center border m-1">
                <div class="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
                <div class="name h4 p-5">${currentName}</div>
            </div>
        `;
    });   

    return `
        <div class="nametagContainer">
            ${nametagsHTML.join('')}           
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    axios.get('/api/nametags').then(function (response) {
        content.innerHTML = renderNametags(response.data);
    });
    
}