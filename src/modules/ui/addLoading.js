// While waiting for the response from the API, remove all components in the DOM and display a loader
export default () => {
  const weatherInformation = document.querySelector('.weather-information');
  weatherInformation.innerHTML = '';
  const loadingComponent = document.createElement('div');
  loadingComponent.classList.add('loader');
  weatherInformation.appendChild(loadingComponent);
  return loadingComponent;
};
