import { celsiusToFahrenheit, kmhToMph } from '../utils/conversionOfUnits.js';

export default (processedData) => {
  const radios = document.querySelectorAll('.toggle-units > input');
  const metricToggle = radios[0];

  handleUnitChange(processedData, metricToggle.checked);
  radios.forEach((toggle) => {
    toggle.addEventListener('change', () => {
      handleUnitChange(processedData, metricToggle.checked);
    });
  });
};

const handleUnitChange = (processedData, isMetric) => {
  const temperatureSign = isMetric ? '°C' : '°F';
  const speedSign = isMetric ? 'km/h' : 'mph';

  const temperatureMapper = {
    '.current-temperature': processedData.temperature,
    '.feels-like-temperature': processedData.feelsLike,
    '#max-temp': processedData.currentMinmaxTemp.maxTemp,
    '#min-temp': processedData.currentMinmaxTemp.minTemp,
  };

  for (let temp in temperatureMapper) {
    const temperature = document.querySelector(temp);
    temperature.textContent = '';
    if (temp === '#max-temp') {
      temperature.textContent = 'H: ';
    } else if (temp === '#min-temp') {
      temperature.textContent = 'L: ';
    } else if (temp === '.feels-like-temperature') {
      temperature.textContent = 'Feels Like: ';
    }

    const celsiusTemperature = temperatureMapper[temp];
    const fahrenheitTemperature =
      celsiusToFahrenheit(celsiusTemperature).toFixed(1);
    temperature.textContent += `${isMetric ? celsiusTemperature : fahrenheitTemperature} ${temperatureSign}`;
  }

  const windSpeed = document.querySelector('#windspeed .misc-data-value');
  const windSpeedKmh = processedData.misc.windspeed;
  const windSpeedMph = kmhToMph(processedData.misc.windspeed).toFixed(1);
  windSpeed.textContent = `${isMetric ? windSpeedKmh : windSpeedMph} ${speedSign}`;
};
