let inputBox = document.getElementById("inputBox");
let searchBtn = document.getElementById("SearchBtn");
let weather_img = document.querySelector(".weather_img");
let temp = document.querySelector(".temp");
let condition = document.querySelector(".condition");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind-speed");
let location_not_found = document.querySelector(".error");
let weather_condition = document.querySelector(".weather-condition");
let weather_detail = document.querySelector(".weather-detail");
let card = document.querySelector(".card");
let body = document.querySelector("body");

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
function checkWeather(city) {
  const api_key = `f89ab436160afb31f7222a20213e5908`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  fetch(url)
    .then((response) => response.json())
    .then((weather_data) => {
      if (weather_data.cod == "404") {
        location_not_found.style.display = "flex";
        weather_condition.style.display = "none";
        weather_detail.style.display = "none";
        card.style.background = " #c5c4c4";
        body.style.background = "white";
        return;
      }
      location_not_found.style.display = "none";
      weather_condition.style.display = "flex";
      weather_detail.style.display = "flex";
      card.style.background = "";
      body.style.background = "";
      temp.innerHTML = Math.round(weather_data.main.temp - 273.15) + " °C ";
      condition.innerHTML = weather_data.weather[0].description;
      humidity.innerHTML = weather_data.main.humidity + " %";
      wind.innerHTML = weather_data.wind.speed + " km/H";
      console.log(weather_data);
      switch (weather_data.weather[0].main) {
        case "Clouds":
          weather_img.src = "image/clouds.png";
          break;
        case "Cloud-Day":
          weather_img.src = "image/cloudy-day.png";
          break;
        case "Clear":
          weather_img.src = "image/clear.png";
          break;
        case "Snow":
          weather_img.src = "image/snow.png";
          break;
        case "Thunderstorm":
          weather_img.src = "image/thunderstorm.png";
          break;
        case "Rain":
          weather_img.src = "image/rain.png";
          break;
        case "Windy":
          weather_img.src = "image/Windy.png";
          break;
        case "Haze":
          weather_img.src = "image/haze.png";
          break;
        case "Moon":
          weather_img.src = "image/full-moon.png";
          break;
        case "Cloudy-Night":
          weather_img.src = "image/cloudy-night.png";
          break;
      }
    });
}
