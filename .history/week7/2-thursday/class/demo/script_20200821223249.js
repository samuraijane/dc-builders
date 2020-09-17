document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=ffe2cd367264d64431346733cc7afb14')
        .then(response => response.json())
        .then(data => {
            var dataCont = document.getElementById('weather-data');
            var item = document.createElement("p");
            // var text = data.weather[0].description;
            // item.innerHTML = JSON.stringify(data);
            item.innerHTML = text;
            dataCont.appendChild(item);
            console.log(data);
        } );
  });
