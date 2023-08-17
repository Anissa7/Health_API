const weatherAPIUrl = "'https://open-weather-map27.p.rapidapi.com/weather'" ;
const weatherAPIKey = "696cc32825mshf220551f0404d51p1201eajsn651d61b40bf0";

const tripAdvisorAPIUrl = "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport";
const tripAdvisorAPIKey = "696cc32825mshf220551f0404d51p1201eajsn651d61b40bf0";

const cityForm = document.querySelector("#cityForm");
const cityInput = document.querySelector("#cityInput");
const weatherDiv = document.querySelector("#weather");
const hotelsDiv = document.querySelector("#hotels");

cityForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const city = cityInput.value;

    // Fetch weather data
    const weatherResponse = await fetch(`${weatherAPIUrl}?q=${city}&appid=${weatherAPIKey}`);
    const weatherData = await weatherResponse.json();
    // Process weather data and display it in weatherDiv

    // Fetch hotel data
    const hotelsResponse = await fetch(`${tripAdvisorAPIUrl}/${city}/hotels?key=${tripAdvisorAPIKey}`);
    const hotelsData = await hotelsResponse.json();
    // Process hotel data and display it in hotelsDiv
});
