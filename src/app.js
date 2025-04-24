import handleLocationRefresh from './modules/utils/handleLocationRefresh.js';
import inputHandler from './modules/ui/inputHandler.js';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', async () => {
  handleLocationRefresh('singapore');
  inputHandler();
});
