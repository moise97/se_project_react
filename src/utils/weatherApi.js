import { apiKey, coordinates } from "./constants.js";
import { checkResponse } from "./api.js";

const FREEZING_POINT_F = 32;
const CELSIUS_CONVERSION_RATIO = 5 / 9;
const HOT_THRESHOLD_F = 86;
const WARM_THRESHOLD_F = 66;

function getWeather() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${apiKey}`,
  ).then(checkResponse);
}

function convertToCelsius(fahrenheit) {
  return Math.round((fahrenheit - FREEZING_POINT_F) * CELSIUS_CONVERSION_RATIO);
}

function parseWeatherData(data) {
  const fahrenheit = data.main.temp;
  return {
    city: data.name,
    temperature: {
      F: Math.round(fahrenheit),
      C: convertToCelsius(fahrenheit),
    },
  };
}

function getWeatherCondition(temperature) {
  if (temperature >= HOT_THRESHOLD_F) {
    return "hot";
  } else if (temperature >= WARM_THRESHOLD_F) {
    return "warm";
  } else {
    return "cold";
  }
}

export { getWeather, parseWeatherData, getWeatherCondition };
