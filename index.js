const api = {
    key: "753bb71f6b4f5e8ac0a2bbc174a1caab",
    base: "https://api.openweathermap.org/data/2.5/"
  };
  
  const searchbar = document.querySelector(".search-box");
  searchbar.addEventListener("keypress", passEnteredValue);
  
  function passEnteredValue(event) {
    if (event.keyCode == 13) {
      getWeather(searchbar.value);
    }
  }
  
  function getWeather(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => {
        return weather.json();
      })
      .then(showResults);
  }
  
  function showResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = formatDate(now);
  
    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  
    let current_weather = document.querySelector(".current .weather");
    current_weather.innerText = weather.weather[0].main;
  
    let celcius= document.querySelector(".hi-low");
    celcius.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
  }
  
  function formatDate(d) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${date} ${month} ${year}`;
  }