// Get elements from the DOM
const inputBox = document.getElementById("inputBox") as HTMLInputElement;
const searchBtn = document.getElementById("SearchBtn") as HTMLButtonElement;
const weatherImg = document.querySelector(".weather_img") as HTMLImageElement;
const temp = document.querySelector(".temp") as HTMLElement;
const condition = document.querySelector(".condition") as HTMLElement;
const humidity = document.getElementById("humidity") as HTMLElement;
const wind = document.getElementById("wind-speed") as HTMLElement;
const locationNotFound = document.querySelector(".error") as HTMLElement;
const weatherCondition = document.querySelector(".weather-condition") as HTMLElement;
const weatherDetail = document.querySelector(".weather-detail") as HTMLElement;
const card = document.querySelector(".card") as HTMLElement;
const body = document.querySelector("body") as HTMLBodyElement;

// Add event listener to the search button
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

// Function to check weather based on city name
function checkWeather(city: string): void {
  const apiKey: string = `f89ab436160afb31f7222a20213e5908`;
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((weatherData: any) => { // Use 'any' if you don't have a specific type for weatherData
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
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      locationNotFound.style.display = "flex"; // Show error message
    });
}
`` 