import { celsiusToFahrenheit, kmhToMph } from '../utils/conversionOfUnits.js';

export default (processedData) => {
  const checkBox = document.querySelector('.switch > input');

  handleUnitChange(processedData, checkBox.checked);

  checkBox.addEventListener('change', () => {
    handleUnitChange(processedData, checkBox.checked);
  });
};

const handleUnitChange = (processedData, isImperial) => {
  const temperatureSign = isImperial ? '°F' : '°C';
  const speedSign = isImperial ? 'mph' : 'km/h';

  const temperature = document.querySelector('.temperature');
  const celsiusTemperature = processedData.temperature;
  const fahrenheitTemperature = celsiusToFahrenheit(
    processedData.temperature
  ).toFixed(1);
  temperature.textContent = `${isImperial ? fahrenheitTemperature : celsiusTemperature} ${temperatureSign}`;

  const feelsLike = document.querySelector('#feelslike .misc-data-value');
  const celsiusFeelsLikeTemperature = processedData.misc.feelslike;
  const fahrenheitFeelsLikeTemperature = celsiusToFahrenheit(
    processedData.misc.feelslike
  ).toFixed(1);
  feelsLike.textContent = `${isImperial ? fahrenheitFeelsLikeTemperature : celsiusFeelsLikeTemperature} ${temperatureSign}`;

  const windSpeed = document.querySelector('#windspeed .misc-data-value');
  const windSpeedKmh = processedData.misc.windspeed;
  const windSpeedMph = kmhToMph(processedData.misc.windspeed).toFixed(1);
  windSpeed.textContent = `${isImperial ? windSpeedMph : windSpeedKmh} ${speedSign}`;
};
