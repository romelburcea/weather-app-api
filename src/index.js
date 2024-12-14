import "./styles.css";

async function getLocation() {
    const search = document.getElementById("search").value.toLowerCase();
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=metric&key=X8KY8DYWQDMDVJJ3WU8BZ27UW&contentType=json`;
    const response = await fetch(url);
    return response.json();
}

function getObject() {
    getLocation()
        .then(function (data) {
            const weather = {
                temperature: data.currentConditions.temp,
                feelsLike: data.currentConditions.feelslike,
                humidity: data.currentConditions.humidity,
                conditions: data.currentConditions.conditions,
            };

            updateWeatherDiv(weather); 
        })
        .catch(function (error) {
            console.error("Error fetching weather data:", error);
        });
}

function updateWeatherDiv(weather) {
    let weatherDiv = document.getElementById("weatherInfo"); 

    
    if (!weatherDiv) {
        weatherDiv = document.createElement("div");
        weatherDiv.id = "weatherInfo";
        document.body.appendChild(weatherDiv); 
        console.log("weatherInfo div created and appended!");
    }

    
    weatherDiv.innerHTML = `
        <div class="weather-detail"><strong>Temperature:</strong> ${weather.temperature} °C</div>
        <div class="weather-detail"><strong>Feels Like:</strong> ${weather.feelsLike} °C</div>
        <div class="weather-detail"><strong>Humidity:</strong> ${weather.humidity} %</div>
        <div class="weather-detail"><strong>Conditions:</strong> ${weather.conditions}</div>
    `;

    
    weatherDiv.style.display = "block";
}


document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", () => {
        getObject();
    });
});
