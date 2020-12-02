import './styles.scss';
import displayWeather from './fetch';
import { submit, btn, toggle } from './dom';

submit.onclick = (e) => {
  e.preventDefault();
  const input = document.getElementById('city-input').value;
  document.getElementById('city-input').value = '';
  displayWeather(input);
};

btn.onclick = () => {
  toggle();
};
