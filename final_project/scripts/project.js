/* JavaScript for Responsive Navigation Menu */
const hamburgerButton = document.getElementById("menu");
const navMenu = document.querySelector("body header nav ul");
hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburgerButton.classList.toggle("open");
});
/*Use localStorage to keep track of the number of reviews completed by the user client by adding a counter 
to the form submission review.html page. Every time that page is loaded successfully upon form submission, 
add one to the counter.*/
let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
/*Uncaught TypeError: Cannot set properties of null (setting 'textContent')*/
document.getElementById("review-count").textContent = reviewCount;
//end of review count function
//end of responsive navigation menu code
/* Use •	Google Maps API: The most popular choice for embedding maps, directions, and location searches.
 You would integrate this to show the school's precise location and allow users to find their way there 
 from anywhere in San Pedro Sula. */
function initMap() {
  const schoolLocation = { lat: 15.5007, lng: -88.0335 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: schoolLocation,
  });
  const marker = new google.maps.Marker({
    position: schoolLocation,
    map: map,
    title: "Our School Location",
  });
  // 1. Define the content for the info window (can be plain text or HTML)
  const contentString =
    "<div>" +
    "<h1>Our School Location</h1>" +
    "<p>This is where the school is located in San Pedro Sula.</p>" +
    "</div>";

  // 2. Create the InfoWindow instance
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200, // Optional: restricts the maximum width of the window
  });

  // 3. Add a click event listener to the marker to open the info window
  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map,
      shouldFocus: false, // Optional: prevents the map from panning to focus the window
    });
  });
}
initMap();
//end of Google Maps API function
/*use the NASA Image and Video Library API to search for images based on a query 
term, */
async function handleImageSearch() {
  const query = document.getElementById("search-input").value;
  const response = await fetch(
    `https://images-api.nasa.gov/search?q=${encodeURIComponent(
      query
    )}&media_type=image`
  );
  const data = await response.json();
  const resultsContainer = document.getElementById("image-results");
  resultsContainer.innerHTML = ""; // Clear previous results
  data.collection.items.forEach((item) => {
    const imageUrl = item.links[0].href;
    const title = item.data[0].title;
    const description = item.data[0].description;
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    imageCard.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
    `;
    resultsContainer.appendChild(imageCard);
  });
}
