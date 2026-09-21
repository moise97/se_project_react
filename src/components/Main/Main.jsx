import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { getWeatherCondition } from "../../utils/weatherApi.js";

function Main({ weatherData, clothingItems, onCardClick }) {
  const hasTemperature = typeof weatherData.temperature === "number";
  const weatherCondition = hasTemperature
    ? getWeatherCondition(weatherData.temperature)
    : null;

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        {hasTemperature
          ? `Today is ${weatherData.temperature}°F / You may want to wear:`
          : "Loading weather..."}
      </p>
      <ul className="main__items">
        {hasTemperature &&
          clothingItems
            .filter((item) => item.weather.toLowerCase() === weatherCondition)
            .map((item) => (
              <ItemCard key={item._id} card={item} onCardClick={onCardClick} />
            ))}
      </ul>
    </main>
  );
}

export default Main;
