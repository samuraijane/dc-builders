
function renderBands(bands) {
    var bandsHTML = bands.map(function(currentBand){
        return renderBand(currentBand);
    });

    return `
        <div class="bandsContainer">
            ${bandsHTML.join('')}
        </div>
    `
}

function renderBand(band) {

    var albumsHTML = band.albums.map(function(currentAlbum){
        return renderAlbum(currentAlbum);
    });

    return `
        <div class="band">
            <h1>${band.artist}</h1>
            <hr />
            ${albumsHTML.join('')}
        </div>
    `
}

function renderAlbum(album) {

    var songsHTML = album.songs.map(function(currentSong){
        return renderSong(currentSong);
    });

    return `
        <div class="album">
            <img width="50" src="${album.albumCover}" />
            <h3 class="d-inline-block mb-4" >${album.title}</h3>
            ${songsHTML.join('')}
        </div>
    `
    // ${renderSong({ title: "hi", length: 50 })}
}


function renderSong(song) {
    return `
        <div class="song d-flex justify-content-between border-top border-bottom py-3">
            <b>${song.title}</b>
            <span>${song.length}</span>
        </div>
    `
}

function albums() {
    var content = document.getElementById('content');
    axios.get('/api/albums').then(function(response){
        content.innerHTML = renderBands(response.data);
    });
}