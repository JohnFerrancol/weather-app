import fetchWeatherData from '../data/fetchWeatherData.js';
import processWeatherData from '../data/processWeatherData.js';
import displayWeatherInformation from '../ui/displayWeatherInformation.js';

export default async (newLocation) => {
  const newLocationData = await fetchWeatherData(newLocation);
  const processNewLocationData = processWeatherData(newLocationData);
  displayWeatherInformation(processNewLocationData);
};
