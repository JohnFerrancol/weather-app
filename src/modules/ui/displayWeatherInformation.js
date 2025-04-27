import uvIndexIcon from '../../assets/logos/white-balance-sunny.svg';
import humidityIcon from '../../assets/logos/water-percent.svg';
import precipProbIcon from '../../assets/logos/cloud-percent.svg';
import windSpeedIcon from '../../assets/logos/weather-windy.svg';
import mapMarkerIcon from '../../assets/logos/map-marker.svg';
import arrowUpIcon from '../../assets/logos/arrow-up.svg';
import arrowDownIcon from '../../assets/logos/arrow-down.svg';
import checkToggle from './checkToggle';
import { getDayOfTheWeek, formatDate, formatTime } from '../utils/dateUtils';

export default (processedData) => {
  // Clear all of the information on the weather information container and render the following sections of the code passing in the weather information container and the data
  let weatherInformation = document.querySelector('.weather-information');
  weatherInformation.innerHTML = '';

  renderCurrentConditionContainer(weatherInformation, processedData);
  renderMiscInformationContainer(weatherInformation, processedData);
  renderHourlyForecastContainer(weatherInformation, processedData);
  renderDailyForecastContainer(weatherInformation, processedData);
  checkToggle(processedData);
};

// Function used to the render the current condition of the location in the webpage
const renderCurrentConditionContainer = (weatherInformation, processedData) => {
  const currentConditionContainer = document.createElement('div');
  currentConditionContainer.classList.add('current-condition-container');
  weatherInformation.appendChild(currentConditionContainer);

  const currentConditionLeft = document.createElement('div');
  currentConditionLeft.classList.add('current-condition-left');
  currentConditionContainer.appendChild(currentConditionLeft);

  const locationWrapper = document.createElement('div');
  locationWrapper.classList.add('location-wrapper');
  currentConditionLeft.appendChild(locationWrapper);

  const locationWrapperIcon = document.createElement('img');
  locationWrapperIcon.classList.add('location-wrapper-icon');
  locationWrapperIcon.src = mapMarkerIcon;
  locationWrapperIcon.alt = 'Map Marker Icon';
  locationWrapper.appendChild(locationWrapperIcon);

  const resolvedAddress = document.createElement('h1');
  resolvedAddress.classList.add('location-wrapper-text');
  resolvedAddress.textContent = processedData.resolvedAddress;
  locationWrapper.appendChild(resolvedAddress);

  const currentDay = document.createElement('h2');
  currentDay.classList.add('current-day');
  currentDay.textContent = getDayOfTheWeek(
    processedData.forecastData[0].datetime
  );
  currentConditionLeft.appendChild(currentDay);

  const currentDate = document.createElement('h2');
  currentDate.classList.add('current-date');
  currentDate.textContent = formatDate(processedData.forecastData[0].datetime);
  currentConditionLeft.appendChild(currentDate);

  const currentTemperature = document.createElement('h1');
  currentTemperature.classList.add('current-temperature');
  currentTemperature.textContent = `${processedData.temperature} °C`;
  currentConditionLeft.appendChild(currentTemperature);

  const minMaxWrapper = document.createElement('div');
  minMaxWrapper.classList.add('min-max-wrapper');
  currentConditionLeft.appendChild(minMaxWrapper);

  const minMaxTemp = processedData.currentMinmaxTemp;
  for (let temp in minMaxTemp) {
    const tempWrapper = document.createElement('div');
    tempWrapper.classList.add('temp-wrapper');
    minMaxWrapper.appendChild(tempWrapper);

    const tempWrapperIcon = document.createElement('img');
    tempWrapperIcon.classList.add('temp-wrapper-icon');
    tempWrapper.appendChild(tempWrapperIcon);

    const tempWrapperTemperature = document.createElement('h2');
    tempWrapperTemperature.classList.add('temp-wrapper-temperature');
    tempWrapper.appendChild(tempWrapperTemperature);

    if (temp === 'minTemp') {
      tempWrapperIcon.src = arrowDownIcon;
      tempWrapperIcon.alt = 'Minimum Temperature';
      tempWrapperTemperature.textContent = `L: ${minMaxTemp[temp]} °C`;
      tempWrapperTemperature.id = 'min-temp';
    } else {
      tempWrapperIcon.src = arrowUpIcon;
      tempWrapperIcon.alt = 'Maximum Temperature';
      tempWrapperTemperature.textContent = `H: ${minMaxTemp[temp]} °C`;
      tempWrapperTemperature.id = 'max-temp';
    }
  }
  const currentConditionRight = document.createElement('div');
  currentConditionRight.classList.add('current-condition-right');
  currentConditionContainer.appendChild(currentConditionRight);

  const weatherConditionIcon = document.createElement('img');
  currentConditionRight.appendChild(weatherConditionIcon);
  weatherConditionIcon.classList.add('weather-condition-icon');

  // This async function is used to dynamically render the svg file from the icon attrivute from the data given
  (async () => {
    const weatherConditionSrc = await import(
      `../../assets/img/${processedData.icon}.svg`
    );

    weatherConditionIcon.src = weatherConditionSrc.default;
    weatherConditionIcon.alt = 'Current Condition Icon';
  })();

  const currentCondition = document.createElement('h1');
  currentCondition.classList.add('current-condition');
  currentCondition.textContent = processedData.currentCondition;
  currentConditionRight.appendChild(currentCondition);

  const feelLikeTemperature = document.createElement('h2');
  feelLikeTemperature.classList.add('feels-like-temperature');
  feelLikeTemperature.textContent = `Feels Like: ${processedData.feelsLike} °C`;
  currentConditionRight.appendChild(feelLikeTemperature);
};

const renderMiscInformationContainer = (weatherInformation, processedData) => {
  const miscInformationContainer = document.createElement('div');
  miscInformationContainer.classList.add('misc-information-container');
  weatherInformation.appendChild(miscInformationContainer);

  const miscInformationData = processedData.misc;
  const miscInformationMapper = {
    uvIndex: ['UV Index', '', uvIndexIcon],
    humidity: ['Humidity', '%', humidityIcon],
    precipprob: ['Rain Chance', '%', precipProbIcon],
    windspeed: ['Wind Speed', 'km/h', windSpeedIcon],
  };

  for (let miscData in miscInformationData) {
    const miscDataWrapper = document.createElement('div');
    miscDataWrapper.classList.add('misc-data-wrapper');
    miscDataWrapper.id = miscData;
    miscInformationContainer.appendChild(miscDataWrapper);

    const miscDataIcon = document.createElement('img');
    miscDataIcon.classList.add('misc-data-icon');
    miscDataIcon.src = miscInformationMapper[miscData][2];
    miscDataWrapper.appendChild(miscDataIcon);

    const miscallaneousDataText = document.createElement('div');
    miscallaneousDataText.classList.add('misc-data-text');
    miscDataWrapper.appendChild(miscallaneousDataText);

    const miscDataTextName = document.createElement('p');
    miscDataTextName.classList.add('misc-data-name');
    miscDataTextName.textContent = miscInformationMapper[miscData][0];
    miscallaneousDataText.appendChild(miscDataTextName);

    const miscDataTextValue = document.createElement('p');
    miscDataTextValue.classList.add('misc-data-value');
    // If the value is undefined, just put it as 0
    const miscDataTextNumber = miscInformationData[miscData]
      ? miscInformationData[miscData]
      : 0;
    miscDataTextValue.textContent = `${miscDataTextNumber} ${miscInformationMapper[miscData][1]}`;
    miscallaneousDataText.appendChild(miscDataTextValue);
  }
};

const renderHourlyForecastContainer = (weatherInformation, processedData) => {
  const hourlyForecastTitle = document.createElement('h1');
  hourlyForecastTitle.classList.add('hourly-forecast-title');
  hourlyForecastTitle.textContent = 'Hourly';
  weatherInformation.appendChild(hourlyForecastTitle);

  const hourlyForecastContainer = document.createElement('div');
  hourlyForecastContainer.classList.add('hourly-forecast-container');
  weatherInformation.appendChild(hourlyForecastContainer);

  const hourlyForecast = processedData.forecastDataHours;
  hourlyForecast.forEach((hour) => {
    const hourlyForecastWrapper = document.createElement('div');
    hourlyForecastWrapper.classList.add('hourly-forecast-wrapper');
    hourlyForecastContainer.appendChild(hourlyForecastWrapper);

    const hourlyForecastTime = document.createElement('p');
    hourlyForecastTime.classList.add('hourly-forecast-time');
    hourlyForecastTime.textContent = formatTime(
      new Date(`${processedData.forecastData[0].datetime}T${hour.datetime}`)
    );
    hourlyForecastWrapper.appendChild(hourlyForecastTime);

    const hourlyForecastIcon = document.createElement('img');
    hourlyForecastIcon.classList.add('hourly-forecast-icon');
    hourlyForecastWrapper.appendChild(hourlyForecastIcon);
    // This async function is used to dynamically render the svg file from the icon attrivute from the data given
    (async () => {
      const weatherConditionSrc = await import(
        `../../assets/img/${hour.icon}.svg`
      );

      hourlyForecastIcon.src = weatherConditionSrc.default;
      hourlyForecastIcon.alt = 'Current Condition Icon';
    })();

    const hourlyForecastTemp = document.createElement('p');
    hourlyForecastTemp.classList.add('hourly-forecast-temperature');
    hourlyForecastTemp.id = hour.datetime;
    hourlyForecastTemp.textContent = `${hour.temp} °C`;
    hourlyForecastWrapper.appendChild(hourlyForecastTemp);
  });
};

const renderDailyForecastContainer = (weatherInformation, processedData) => {
  const dailyForecastTitle = document.createElement('h1');
  dailyForecastTitle.classList.add('daily-forecast-title');
  dailyForecastTitle.textContent = 'Daily';
  weatherInformation.appendChild(dailyForecastTitle);

  const dailyForecastContainer = document.createElement('div');
  dailyForecastContainer.classList.add('daily-forecast-container');
  weatherInformation.appendChild(dailyForecastContainer);

  const hourlyForecast = processedData.forecastData;
  hourlyForecast.forEach((day) => {
    const dailyForecastWrapper = document.createElement('div');
    dailyForecastWrapper.classList.add('daily-forecast-wrapper');
    dailyForecastContainer.appendChild(dailyForecastWrapper);

    const leftWrapper = document.createElement('div');
    leftWrapper.classList.add('daily-forecast-left-wrapper');
    dailyForecastWrapper.appendChild(leftWrapper);

    const currentDay = document.createElement('h3');
    currentDay.classList.add('daily-forecast-day');
    currentDay.textContent = `${getDayOfTheWeek(day.datetime)}, ${formatDate(day.datetime)}`;
    leftWrapper.appendChild(currentDay);

    const currentConditions = document.createElement('p');
    currentConditions.classList.add('daily-forecast-conditions');
    currentConditions.textContent = day.conditions;
    leftWrapper.appendChild(currentConditions);

    const dailyForecastIcon = document.createElement('img');
    dailyForecastIcon.classList.add('daily-forecast-icon');
    dailyForecastWrapper.appendChild(dailyForecastIcon);

    // This async function is used to dynamically render the svg file from the icon attrivute from the data given
    (async () => {
      const weatherConditionSrc = await import(
        `../../assets/img/${day.icon}.svg`
      );

      dailyForecastIcon.src = weatherConditionSrc.default;
      dailyForecastIcon.alt = 'Current Condition Icon';
    })();

    const rightWrapper = document.createElement('div');
    rightWrapper.classList.add('daily-forecast-right-wrapper');
    dailyForecastWrapper.appendChild(rightWrapper);

    const dailyForecastMinmax = document.createElement('p');
    dailyForecastMinmax.classList.add('daily-forecast-temperature');
    dailyForecastMinmax.id = day.datetime;
    dailyForecastMinmax.textContent = `${day.temp} °C`;
    rightWrapper.appendChild(dailyForecastMinmax);

    const dailyForecastRain = document.createElement('p');
    dailyForecastRain.classList.add('daily-forecast-precipprob');
    dailyForecastRain.id = day.datetime;
    dailyForecastRain.textContent = `Chance Of Rain: ${day.precipprob} %`;
    rightWrapper.appendChild(dailyForecastRain);
  });
};
