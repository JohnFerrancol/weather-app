import error404Icon from '../../assets/logos/404.svg';

// Display an error message when the API response is not valid
export default () => {
  const weatherInformation = document.querySelector('.weather-information');
  weatherInformation.innerHTML = '';
  const errorMessage = document.createElement('h1');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'ERROR 404: Location Not Found!';

  const errorIcon = document.createElement('img');
  errorIcon.classList.add('error-icon');
  errorIcon.src = error404Icon;
  errorIcon.alt = 'Error 404 Icon';

  weatherInformation.appendChild(errorMessage);
  weatherInformation.appendChild(errorIcon);
};
