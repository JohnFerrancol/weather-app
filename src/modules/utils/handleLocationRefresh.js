import fetchWeatherData from '../data/fetchWeatherData.js';
import processWeatherData from '../data/processWeatherData.js';
import displayWeatherInformation from '../ui/displayWeatherInformation.js';
import displayError from '../ui/displayError.js';

// Wrapper function that allows the user to get the new weather data, process it and display the UI
export default async (newLocation, isGeolocation) => {
  try {
    const newLocationData = await fetchWeatherData(newLocation, isGeolocation);
    const processNewLocationData = processWeatherData(newLocationData);
    displayWeatherInformation(processNewLocationData);
  } catch (e) {
    console.log(e);
    displayError();
  }
};
