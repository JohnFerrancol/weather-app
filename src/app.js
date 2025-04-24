import { fetchWeatherData } from './modules/data/fetchWeatherData.js';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', async () => {
  const weatherDataCelsius = await fetchWeatherData('singapore', 'metric');
  const weatherDataFahrenheit = await fetchWeatherData('singapore', 'us');
  console.log(weatherDataCelsius);
  console.log(weatherDataFahrenheit);
});
