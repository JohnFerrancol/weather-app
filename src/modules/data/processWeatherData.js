export default (response) => {
  const currentConditions = response.currentConditions;

  return {
    resolvedAddress: response.resolvedAddress,
    currentCondition: currentConditions.conditions,
    temperature: currentConditions.temp,
    feelsLike: currentConditions.feelslike,
    misc: {
      uvIndex: currentConditions.uvindex,
      humidity: currentConditions.humidity,
      precipprob: response.days[0].precipprob,
      windspeed: currentConditions.windspeed,
    },
    icon: currentConditions.icon,
    forecastData: response.days,
    currentMinmaxTemp: {
      maxTemp: response.days[0].tempmax,
      minTemp: response.days[0].tempmin,
    },
  };
};
