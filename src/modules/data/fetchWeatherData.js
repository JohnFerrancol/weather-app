export default async (location) => {
  const API_KEY = 'FYE3FRSLPHW96PES77BBKQUBS';

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`
  );
  const data = await response.json();

  return data;
};
