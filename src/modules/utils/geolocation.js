export default (callback) => {
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
