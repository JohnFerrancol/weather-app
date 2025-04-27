const showLoading = () => {
  const weatherInformation = document.querySelector('.weather-information');
  weatherInformation.innerHTML = '';
  const loadingComponent = document.createElement('div');
  loadingComponent.classList.add('loader');
  weatherInformation.appendChild(loadingComponent);
  return loadingComponent;
};

export { showLoading };
