$(() => {
//console.log("Ready");

    function renderMovie(movieArray) {
            
            var movieHTML = movieArray.map(movie => {

                return`<div class="card movie" style="width: 15rem;"> 
                        <img class="card-img-top" src="${movie.Poster}"/> 
                        <div class="card-body">
                            <h5 class="card-title movie-title">${movie.Title}</h5> 
                            <p class="card-text movie-release-date">${movie.Year}</p>
                            <a href="#" onclick="saveToWatchlist('${movie.imdbID}')" class="btn btn-primary">Add</a>
                         </div>
                    </div>`

            });

        $(".results").html(movieHTML.join(" "));
        
        $(".movies-container").append(movieHTML);

    }

    $("#search-form").submit(function(e){
        e.preventDefault();
        $(".movies-container").empty();
        renderMovie(movieData);
    })

});

function saveToWatchlist(imdbID) {
    console.log("Add button works!");
    var movie = movieData.find((currentMovie) => {
      return currentMovie.imdbID == imdbID;
    });

}
