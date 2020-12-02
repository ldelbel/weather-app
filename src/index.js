import './styles.scss'
import weatherInfo from './fetch'


const displayWeather = async () => {
  let city = await weatherInfo('London');
  console.log(city.sys.country)
}

displayWeather()



