import fetchWeatherData from './modules/data/fetchWeatherData.js';
import processWeatherData from './modules/data/processWeatherData.js';
import displayWeatherInformation from './modules/ui/displayWeatherInformation.js';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', async () => {
  const weatherDataCelsius = await fetchWeatherData('singapore', 'metric');
  const weatherDataFahrenheit = await fetchWeatherData('new york', 'us');
  const processweatherDataCelsius = processWeatherData(weatherDataCelsius);
  const processweatherDataFahrenheit = processWeatherData(
    weatherDataFahrenheit
  );
  displayWeatherInformation(processweatherDataCelsius);
  setTimeout(() => {
    displayWeatherInformation(processweatherDataFahrenheit);
  }, 5000);
});
