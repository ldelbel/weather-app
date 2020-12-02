const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const key = '&APPID=91322fba82fc1be8bdbdb3c2d5555e74';


const weatherInfo = async (city) => {
  try {
    const response = await fetch(`${url}${city}${key}`, { mode: 'cors'});
    const result = await response.json();
    return result;
  } catch(err) {
    err;
  }
}

export default weatherInfo;