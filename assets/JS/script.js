document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    fetchCurrentWeather(city);
    fetchForecast(city);
});

function fetchCurrentWeather(city) {
    const apiKey = '2b4d3eda7ae46f2ec2eab836e563b3a3'; // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data);
        });
}

function fetchForecast(city) {
    const apiKey = '2b4d3eda7ae46f2ec2eab836e563b3a3'; // Your API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayForecast(data);
        });
}

function displayCurrentWeather(data) {
    const weatherSection = document.getElementById('current-weather');
    weatherSection.innerHTML = `
        <h2>Current Weather: ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function displayForecast(data) {
    const forecastSection = document.getElementById('forecast');
    forecastSection.innerHTML = '<h2>5-Day Forecast:</h2>';
    for (let i = 0; i < data.list.length; i += 8) { // Every 8th item in list is approximately a day
        const dayData = data.list[i];
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <h3>${new Date(dayData.dt_txt).toDateString()}</h3>
            <p>Temp: ${dayData.main.temp}°C</p>
            <p>Humidity: ${dayData.main.humidity}%</p>
            <p>Wind Speed: ${dayData.wind.speed} m/s</p>
        `;
        forecastSection.appendChild(forecastItem);
    }
}




//need function to fetch info from openweather api first function for for current weather


//another function for 5 day forecast


