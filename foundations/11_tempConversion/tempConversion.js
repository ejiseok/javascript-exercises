const convertToCelsius = function(temperature) {
  return Number(((temperature - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  return Number(((temperature * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
