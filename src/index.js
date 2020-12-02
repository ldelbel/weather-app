import './styles.scss'
import weatherInfo from './fetch'
import { cityDom, tempDom, infoDom, submit } from './dom'

const displayWeather = async (input) => {
  let city = await weatherInfo(input);
  let obj = {
    name: city.name,
    country: city.sys.country,
    temp: Math.round(city.main.temp - 273),
    feels: Math.round(city.main.feels_like - 273),
    humidity: city.main.humidity,
    desc: city.weather[0].description,
    main: city.weather[0].main,
    wind: {
      deg: city.wind.deg,
      speed: city.wind.speed
    }
  }

  cityDom.textContent = `${obj.name}, ${obj.country}`;
  tempDom.textContent = `${obj.temp}°C`;
  infoDom.textContent = `Feels like ${obj.feels}°C | ${obj.desc} | Humidity ${obj.humidity} | Winds (Speed ${obj.wind.speed}, Deg ${obj.wind.deg})`
  console.log(obj.main)
  
} 

submit.onclick = (e) => {
  e.preventDefault;
  let input = document.getElementById('city-input').value;
  console.log(input)
  document.getElementById('city-input').value = '';
  displayWeather(input)
}




