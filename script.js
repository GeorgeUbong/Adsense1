const inputTemp = document.getElementById('inputTemp');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const outputTemp = document.getElementById('outputTemp');
const convertButton = document.getElementById('convertButton');
const toggleDarkMode = document.getElementById('toggleDarkMode');

let isDarkMode = false;

function convertTemperature() {
  const temp = parseFloat(inputTemp.value);
  let convertedTemp;

  if (fromUnit.value === 'celsius') {
    if (toUnit.value === 'fahrenheit') {
      convertedTemp = (temp * 9/5) + 32;
    } else {
      convertedTemp = temp;
    }
  } else {
    if (toUnit.value === 'celsius') {
      convertedTemp = (temp - 32) * 5/9;
    } else {
      convertedTemp = temp;
    }
  }

  outputTemp.textContent = convertedTemp.toFixed(2);
}

convertButton.addEventListener('click', convertTemperature);

function toggleMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  if (isDarkMode) {
    toggleDarkMode.textContent = 'Light Mode';
  } else {
    toggleDarkMode.textContent = 'Light Mode';
  }
}

toggleDarkMode.addEventListener('click', toggleMode);
