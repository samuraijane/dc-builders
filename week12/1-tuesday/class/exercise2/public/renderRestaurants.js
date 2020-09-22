
function renderRestaurants(restaurants) {

    var restaurantsHTML = restaurants.map(function(restaurant){
        return `
            <div class="bg-light rounded p-2 w-25 m-2">
                <h3>${restaurant.name}</h3>
                <h5 class="text-secondary">${restaurant.type}</h5>
                <div style="color: lightgreen; font-weight: bold;">${'$'.repeat(restaurant.priceRating)}</div>
            </div>
        `
    });

    return `
        <div class="mt-5 d-flex justify-content-center align-items-start">
            ${restaurantsHTML.join('')}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    axios.get('/api/restaurants').then(function (response) {
        content.innerHTML = renderRestaurants(response.data);
    });

}