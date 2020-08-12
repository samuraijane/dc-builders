
// to get in ABC order: pull the input entries into an array and then use the .sort method
// not working due to the fact that not pushing the array into the DOM?!

let movieGenres = [];

function genresArray() {
    genreVal = document.getElementByName("movie-question").value;
    movieGenres.push(genreVal);
}

genresArray();

movieGenres.sort();

