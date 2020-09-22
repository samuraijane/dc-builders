
function renderMovies(movies) {

    var moviesHTML = movies.map(function(movie){
        return `
            <div class="rounded bg-dark d-flex align-items-stretch my-3 p-2">
                <img width="200" height="296" src="${movie.poster}" />
                <div class="bg-light p-2 rounded ml-2" style="width: 200px;">
                    <h3>${movie.title}</h3>
                    <p>${movie.year}</p>
                    <p>IMDB Rating: <br />  ${movie.imdbRating} / 10</p>
                    <p>Rotten Tomatoes Rating: <br /> ${movie.rottenTomatoesRating * 100}%</p>
                </div>
            </div>
        `
    });

    return `
        <div class="d-flex flex-wrap justify-content-around align-items-start">
            ${moviesHTML.join('')}
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    axios.get('/api/movies').then(function (response) {
        content.innerHTML = renderMovies(response.data);
    });

}