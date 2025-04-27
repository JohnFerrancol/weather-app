export default (response) => {
  // Filter the current response JSON to all of teh data we need for the weather app
  const currentConditions = response.currentConditions;

  return {
    resolvedAddress: response.resolvedAddress,
    currentCondition: currentConditions.conditions,
    temperature: currentConditions.temp,
    feelsLike: currentConditions.feelslike,
    currentTime: currentConditions.datetime,
    misc: {
      uvIndex: currentConditions.uvindex,
      humidity: currentConditions.humidity,
      precipprob: response.days[0].precipprob,
      windspeed: currentConditions.windspeed,
    },
    icon: currentConditions.icon,
    forecastData: response.days,
    forecastDataHours: response.days[0].hours,
    currentMinmaxTemp: {
      maxTemp: response.days[0].tempmax,
      minTemp: response.days[0].tempmin,
    },
  };
};
