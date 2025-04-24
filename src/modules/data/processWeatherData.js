export default (response) => {
  const currentConditions = response.currentConditions;

  return {
    resolvedAddress: response.resolvedAddress,
    currentCondition: currentConditions.conditions,
    temperature: currentConditions.temp,
    misc: {
      feelslike: currentConditions.feelslike,
      humidity: currentConditions.humidity,
      precipprob: response.days[0].precipprob,
      windspeed: currentConditions.windspeed,
    },
  };
};
