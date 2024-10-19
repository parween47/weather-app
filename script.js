// Get elements from the DOM
var inputBox = document.getElementById("inputBox");
var searchBtn = document.getElementById("SearchBtn");
var weatherImg = document.querySelector(".weather_img");
var temp = document.querySelector(".temp");
var condition = document.querySelector(".condition");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind-speed");
var locationNotFound = document.querySelector(".error");
var weatherCondition = document.querySelector(".weather-condition");
var weatherDetail = document.querySelector(".weather-detail");
var card = document.querySelector(".card");
var body = document.querySelector("body");
// Add event listener to the search button
searchBtn.addEventListener("click", function () {
    checkWeather(inputBox.value);
});
// Function to check weather based on city name
function checkWeather(city) {
    var apiKey = "f89ab436160afb31f7222a20213e5908";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey);
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (weatherData) {
        if (weatherData.cod === "404") {
            locationNotFound.style.display = "flex";
            weatherCondition.style.display = "none";
            weatherDetail.style.display = "none";
            card.style.background = "#c5c4c4";
            body.style.background = "white";
            return;
        }
        locationNotFound.style.display = "none";
        weatherCondition.style.display = "flex";
        weatherDetail.style.display = "flex";
        card.style.background = "";
        body.style.background = "";
        temp.innerHTML = Math.round(weatherData.main.temp - 273.15) + " °C ";
        condition.innerHTML = weatherData.weather[0].description;
        humidity.innerHTML = weatherData.main.humidity + " %";
        wind.innerHTML = weatherData.wind.speed + " km/H";
        console.log(weatherData);
        switch (weatherData.weather[0].main) {
            case "Clouds":
                weatherImg.src = "image/clouds.png";
                break;
            case "Cloud-Day":
                weatherImg.src = "image/cloudy-day.png";
                break;
            case "Clear":
                weatherImg.src = "image/clear.png";
                break;
            case "Snow":
                weatherImg.src = "image/snow.png";
                break;
            case "Thunderstorm":
                weatherImg.src = "image/thunderstorm.png";
                break;
            case "Rain":
                weatherImg.src = "image/rain.png";
                break;
            case "Windy":
                weatherImg.src = "image/Windy.png";
                break;
            case "Haze":
                weatherImg.src = "image/haze.png";
                break;
            case "Moon":
                weatherImg.src = "image/full-moon.png";
                break;
            case "Cloudy-Night":
                weatherImg.src = "image/cloudy-night.png";
                break;
            default:
                weatherImg.src = ""; // Optional: fallback for unrecognized weather
                break;
        }
    })
        .catch(function (error) {
        console.error("Error fetching weather data:", error);
        locationNotFound.style.display = "flex"; // Show error message
    });
}
"";
