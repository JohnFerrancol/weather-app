const celsiusToFahrenheit = (temp) => {
  return (temp * 9) / 5 + 32;
};

const kmhToMph = (kmh) => {
  return kmh * 0.621371;
};

export { celsiusToFahrenheit, kmhToMph };
