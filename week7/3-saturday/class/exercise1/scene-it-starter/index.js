$(function(){

	function renderMovies(movieArray) {

		var finalHTML = "";

		movieArray.forEach(function(currentMovie){

			finalHTML += '<div class="card" style="width: 20rem;">';
			finalHTML += '<img class="card-img-top" src="'+ currentMovie.Poster +'"/>';
			finalHTML += '<div class="card-body">';
			finalHTML += '<h4 class="card-title">'+ currentMovie.Title;
			finalHTML += '<span class="badge badge-secondary float-right">'+ currentMovie.Year +'</span>';
			finalHTML += '</h4>';
			finalHTML += '<a href="#" class="btn btn-primary addButton">Add!</a>';
			finalHTML += '</div>';
			finalHTML += '</div>';
		});

		return finalHTML;
	}

	$('form').submit(function(e){
		e.preventDefault();
		var movieHTML = renderMovies(movieData);
		$('.movie-container').html(movieHTML);
	});



})