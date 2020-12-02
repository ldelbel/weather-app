import {
  cityDom, tempDom, infoDom, flag, background, letter, checkbox, btn,
} from './dom';

const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const key = '&APPID=91322fba82fc1be8bdbdb3c2d5555e74';


const weatherInfo = async (city) => {
  try {
    const response = await fetch(`${url}${city}${key}`, { mode: 'cors' });
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
};

const displayWeather = async (input) => {
  const city = await weatherInfo(input);
  const obj = {
    name: city.name,
    country: city.sys.country,
    temp: Math.round(city.main.temp - 273),
    feels: Math.round(city.main.feels_like - 273),
    humidity: city.main.humidity,
    desc: city.weather[0].description,
    main: city.weather[0].main,
    wind: {
      deg: city.wind.deg,
      speed: city.wind.speed,
    },
  };

  cityDom.textContent = `${obj.name}, ${obj.country}`;
  tempDom.textContent = `${obj.temp}°C`;
  infoDom.textContent = `Feels like ${obj.feels}°C | ${obj.desc} | Humidity ${obj.humidity}% | Winds (Speed ${obj.wind.speed}, Deg ${obj.wind.deg})`;

  const url = `https://www.countryflags.io/${obj.country}/shiny/64.png`;
  flag.src = url;
  flag.className = 'show';
  const status = obj.main.toLowerCase();
  background.className = `back-img-${status} fade-in`;

  checkbox.checked = true;
  btn.className = 'toggleWrapper-done';
  letter.textContent = '°C';
};

export default displayWeather;