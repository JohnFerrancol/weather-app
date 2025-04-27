// Function that allows the user to get its current location
export default (callback) => {
  // If the geolocation is valid, get the longitude and latitude and call a callback function based on this values
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        callback(latitude, longitude);
      },
      (error) => {
        console.error('Error getting geolocation: ', error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};
