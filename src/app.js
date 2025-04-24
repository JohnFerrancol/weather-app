import handleLocationRefresh from './modules/data/handleLocationRefresh.js';
import inputHandler from './modules/ui/inputHandler.js';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', async () => {
  handleLocationRefresh('singapore', 'metric');
  inputHandler();
});
