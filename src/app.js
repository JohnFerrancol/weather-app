import handleLocationRefresh from './modules/utils/handleLocationRefresh.js';
import inputHandler from './modules/ui/inputHandler.js';
import geolocation from './modules/utils/geolocation.js';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', async () => {
  geolocation((latitude, longitude) => {
    handleLocationRefresh([latitude, longitude], true);
  });

  inputHandler();
});
