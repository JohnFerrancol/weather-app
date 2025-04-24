export default (response) => {
  const currentConditions = response.currentConditions;

  return {
    currentCondition: currentConditions.conditions,
    temperature: currentConditions.temp,
    feelslike: currentConditions.feelslike,
    humidity: currentConditions.humidity,
    precipprob: currentConditions.precipprob,
  };
};
