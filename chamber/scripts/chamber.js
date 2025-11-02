// Store the selected elements that we are going to use.
const mainnav = document.querySelector(".nav-link");
const hambutton = document.querySelector("#menu");
// Add a click event listener to the hamburger button and use a
// callback function that toggles the list element's list of classes.
// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});
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
  
