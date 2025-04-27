import { celsiusToFahrenheit, kmhToMph } from '../utils/conversionOfUnits.js';

export default (processedData) => {
  // Render the function when the user loads a new location to render the units correctly if it is imperial
  const radios = document.querySelectorAll('.toggle-units > input');
  const metricToggle = radios[0];

  handleUnitChange(processedData, metricToggle.checked);

  // When there is a change in the toggle slider, also run the function to change the unit
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
        // For forecast temperatures, find the object associated the current HTML element to properly change the element in the UI
        let tempObject = temperatureMapper[tempKey].find(
          (tempItem) => temperatureElement.id === tempItem.datetime
        );

        celsiusTemperature = tempObject.temp;
      } else {
        celsiusTemperature = temperatureMapper[tempKey];
      }

      // Run the function to convert the temperature to fahrenheit and run the ternary operator to determine which unit to render
      const fahrenheitTemperature =
        celsiusToFahrenheit(celsiusTemperature).toFixed(1);
      temperatureElement.textContent += `${isMetric ? celsiusTemperature : fahrenheitTemperature} ${temperatureSign}`;
    });
  }

  // Run the function to convert the speed to mph and run the ternary operator to determine which unit to render
  const windSpeed = document.querySelector('#windspeed .misc-data-value');
  const windSpeedKmh = processedData.misc.windspeed;
  const windSpeedMph = kmhToMph(processedData.misc.windspeed).toFixed(1);
  windSpeed.textContent = `${isMetric ? windSpeedKmh : windSpeedMph} ${speedSign}`;
};
