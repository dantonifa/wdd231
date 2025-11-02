const APIkey = "fcf0db88f380fdf70c8b362e0d67f4ea";
const lat = 15.5061;
const lon = -88.025;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    document.getElementById("temp").innerText = temperature;
    //Send the weather data to the field with an id="weather"
    const weather = data.weather[0].description;
    document.getElementById("weather").innerText = weather;
  });
