import fetchWeatherData from './modules/data/fetchWeatherData.js';
import processWeatherData from './modules/data/processWeatherData.js';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', async () => {
  const weatherDataCelsius = await fetchWeatherData('singapore', 'metric');
  const weatherDataFahrenheit = await fetchWeatherData('singapore', 'us');
  const processweatherDataCelsius = processWeatherData(weatherDataCelsius);
  const processweatherDataFahrenheit = processWeatherData(
    weatherDataFahrenheit
  );
  console.log(processweatherDataCelsius);
  console.log(processweatherDataFahrenheit);
});
