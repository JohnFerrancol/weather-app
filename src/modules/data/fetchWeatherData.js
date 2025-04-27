import { showLoading } from '../ui/addLoading.js';

export default async (location, isGeolocation) => {
  const VISUAL_CROSSING_API_KEY = 'FYE3FRSLPHW96PES77BBKQUBS';
  const OPENCAGE_API_KEY = '2b6a2dd80bd6466896cd2800bd78a154';

  const loadingComponent = showLoading();
  try {
    if (!isGeolocation) {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${VISUAL_CROSSING_API_KEY}&contentType=json`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const [latitude, longitude] = [location];
      const locationResponse = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`
      );
      const locationData = await locationResponse.json();
      const currentCountry = locationData.results[0].components.country;

      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentCountry}?unitGroup=metric&key=${VISUAL_CROSSING_API_KEY}&contentType=json`
      );
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (e) {
    console.log(e);
  } finally {
    loadingComponent.remove();
  }
};
