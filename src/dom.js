const cityDom = document.getElementById('city');
const tempDom = document.getElementById('temp');
const infoDom = document.getElementById('info');
const submit = document.getElementById('submit');
const flag = document.getElementById('flag');
const background = document.getElementById('back-img');
const checkbox = document.getElementById('toggle');
const letter = document.getElementById('let');
const btn = document.getElementById('btn');

const toggle = () => {
  let value = parseInt(tempDom.textContent, 10);
  if (checkbox.checked) {
    btn.className = 'toggleWrapper';
    letter.textContent = '°F';
    value = (value * 9) / 5 + 32;
    tempDom.textContent = `${Math.round(value)}°F`;
  } else {
    btn.className = 'toggleWrapper-done';
    letter.textContent = '°C';
    value = ((value - 32) * 5) / 9;
    tempDom.textContent = `${Math.round(value)}°C`;
  }
};

export {
  cityDom, tempDom, infoDom, submit, flag, background, checkbox, letter, btn, toggle,
};