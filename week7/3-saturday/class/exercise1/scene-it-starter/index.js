$().ready(() => {

    function renderMovie(movieArray) {
        movieHTML = movieArray.map(movie => {
            return `<p>${movie.Title}</p>`
            console.log(movie.Title);
        });

        $(".results").html(movieHTML.join(" "));
    }

    renderMovie(movieData);
});