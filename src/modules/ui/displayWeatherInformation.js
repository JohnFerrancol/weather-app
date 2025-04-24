import feelsLikeIcon from '../../assets/logos/thermometer-alert.svg';
import humidityIcon from '../../assets/logos/water-percent.svg';
import precipProbIcon from '../../assets/logos/cloud-percent.svg';
import windSpeedIcon from '../../assets/logos/weather-windy.svg';

export default (processedData) => {
  let weatherInformation = document.querySelector('div');
  weatherInformation.innerHTML = '';

  const currentCondition = document.createElement('h1');
  currentCondition.classList.add('current-condition');
  currentCondition.textContent = processedData.currentCondition;
  weatherInformation.appendChild(currentCondition);

  const resolvedAddress = document.createElement('h1');
  resolvedAddress.classList.add('resolved-address');
  resolvedAddress.textContent = processedData.resolvedAddress;
  weatherInformation.appendChild(resolvedAddress);

  const temperature = document.createElement('h1');
  temperature.classList.add('temperature');
  temperature.textContent = `${processedData.temperature}°C`;
  weatherInformation.appendChild(temperature);

  const miscInformationContainer = document.createElement('div');
  miscInformationContainer.classList.add('misc-information-container');
  weatherInformation.appendChild(miscInformationContainer);

  const miscInformationData = processedData.misc;
  const miscInformationMapper = {
    feelslike: ['Feels Like', '°C', feelsLikeIcon],
    humidity: ['Humidity', '%', humidityIcon],
    precipprob: ['Chance of Rain', '%', precipProbIcon],
    windspeed: ['Wind Speed', 'km/h', windSpeedIcon],
  };

  for (let miscData in miscInformationData) {
    const miscDataWrapper = document.createElement('div');
    miscDataWrapper.classList.add('misc-data-wrapper');
    miscInformationContainer.appendChild(miscDataWrapper);

    const miscDataIcon = document.createElement('img');
    miscDataIcon.classList.add('misc-data-icon');
    miscDataIcon.src = miscInformationMapper[miscData][2];
    miscDataWrapper.appendChild(miscDataIcon);

    const miscallaneousDataText = document.createElement('div');
    miscallaneousDataText.classList.add('misc-data-text');
    miscDataWrapper.appendChild(miscallaneousDataText);

    const miscDataTextName = document.createElement('p');
    miscDataTextName.classList.add('miscallenous-data-name');
    miscDataTextName.textContent = miscInformationMapper[miscData][0];
    miscallaneousDataText.appendChild(miscDataTextName);

    const miscDataTextValue = document.createElement('p');
    miscDataTextValue.classList.add('miscallenous-data-name');
    const miscDataTextNumber = miscInformationData[miscData]
      ? miscInformationData[miscData]
      : 0;
    miscDataTextValue.textContent = `${miscDataTextNumber} ${miscInformationMapper[miscData][1]}`;
    miscallaneousDataText.appendChild(miscDataTextValue);
  }
};
