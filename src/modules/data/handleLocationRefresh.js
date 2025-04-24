import fetchWeatherData from './fetchWeatherData.js';
import processWeatherData from './processWeatherData.js';
import displayWeatherInformation from '../ui/displayWeatherInformation.js';

export default async (newLocation, unitGroup) => {
  const newLocationData = await fetchWeatherData(newLocation, unitGroup);
  const processNewLocationData = processWeatherData(newLocationData);
  displayWeatherInformation(processNewLocationData);
};
