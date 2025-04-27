import handleLocationRefresh from './modules/utils/handleLocationRefresh.js';
import inputHandler from './modules/ui/inputHandler.js';
import geolocation from './modules/utils/geolocation.js';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', async () => {
  // When the document is loaded, run the geolocation function to get the current location
  // Run the handleLocationRefresh function to get the data from the APIs, process it, and display the DOM
  geolocation((latitude, longitude) => {
    handleLocationRefresh([latitude, longitude], true);
  });

  // Run the function to listens to form submissions to change the location
  inputHandler();
});
