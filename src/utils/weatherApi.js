import { apiKey, coordinates } from "./constants.js";
import { checkResponse } from "./api.js";

function getWeather() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${apiKey}`,
  ).then(checkResponse);
}

function parseWeatherData(data) {
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
  };
}

function getWeatherCondition(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}

export { getWeather, parseWeatherData, getWeatherCondition };
