$(document).ready(function() {
    console.log('HTML Loaded');
    fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then(data => {
        var $dogSelect = $('<select name="dog-breed" id="dog-select"></select>');
        data.message.forEach((breed) => {
            console.log("I am in the for loop " + breed);
            var breedOption = `<option value="${breed}">${breed}</option>`;
            $dogSelect.append(breedOption);
        });
        $('#data-container').append($dogSelect);
    });
});