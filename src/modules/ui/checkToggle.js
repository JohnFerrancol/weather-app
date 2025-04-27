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
    '#max-temp': processedData.currentMinmaxTemp.maxTemp,
    '#min-temp': processedData.currentMinmaxTemp.minTemp,
    '.feels-like-temperature': processedData.feelsLike,
    '.hourly-forecast-temperature': processedData.forecastDataHours,
    '.daily-forecast-temperature': processedData.forecastData,
  };

  for (let tempKey in temperatureMapper) {
    const temperatureElements = document.querySelectorAll(tempKey);
    temperatureElements.forEach((temperatureElement) => {
      temperatureElement.textContent = '';
      if (tempKey === '#max-temp') {
        temperatureElement.textContent = 'H: ';
      } else if (tempKey === '#min-temp') {
        temperatureElement.textContent = 'L: ';
      } else if (tempKey === '.feels-like-temperature') {
        temperatureElement.textContent = 'Feels Like: ';
      }
      let celsiusTemperature;
      if (
        tempKey === '.hourly-forecast-temperature' ||
        tempKey === '.daily-forecast-temperature'
      ) {
        let tempObject = temperatureMapper[tempKey].find(
          (tempItem) => temperatureElement.id === tempItem.datetime
        );

        celsiusTemperature = tempObject.temp;
      } else {
        celsiusTemperature = temperatureMapper[tempKey];
      }
      const fahrenheitTemperature =
        celsiusToFahrenheit(celsiusTemperature).toFixed(1);
      temperatureElement.textContent += `${isMetric ? celsiusTemperature : fahrenheitTemperature} ${temperatureSign}`;
    });
  }

  const windSpeed = document.querySelector('#windspeed .misc-data-value');
  const windSpeedKmh = processedData.misc.windspeed;
  const windSpeedMph = kmhToMph(processedData.misc.windspeed).toFixed(1);
  windSpeed.textContent = `${isMetric ? windSpeedKmh : windSpeedMph} ${speedSign}`;
};
