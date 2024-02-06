//for search button and to fetch weather and forecast
document.getElementById('search').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    fetchCurrentWeather(city);
    fetchForecast(city);
});

//using api key to fetch and display weather
function fetchCurrentWeather(city) {
    var apiKey = '2b4d3eda7ae46f2ec2eab836e563b3a3'; // Your API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data);
        });
}

//using api key to fetch and diplay forecast
function fetchForecast(city) {
    var apiKey = '2b4d3eda7ae46f2ec2eab836e563b3a3'; // Your API key
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayForecast(data);
        });
}

//once we get info show by 4 categories which is current weather, temperature, humidity, wind speed
function displayCurrentWeather(data) {
    var weatherSection = document.getElementById('current-weather');
    weatherSection.innerHTML = `
        <h2>Current Weather: ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

//function 4loop to display all info
function displayForecast(data) {
    var forecastSection = document.getElementById('forecast');
    forecastSection.innerHTML = '<h2>5-Day Forecast:</h2>';
    for (let i = 0; i < data.list.length; i += 8) { // Every 8th item in list is approximately a day
        var dayData = data.list[i];
        var forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <h3>${new Date(dayData.dt_txt).toDateString()}</h3>
            <p>Temp: ${dayData.main.temp}°F</p>
            <p>Humidity: ${dayData.main.humidity}%</p>
            <p>Wind Speed: ${dayData.wind.speed} m/s</p>
        `;
        forecastSection.appendChild(forecastItem);
    }
}







