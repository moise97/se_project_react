import { useContext } from "react";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { getWeatherCondition } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherData, clothingItems, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const hasTemperature = typeof weatherData.temperature.F === "number";
  const weatherCondition = hasTemperature
    ? getWeatherCondition(weatherData.temperature.F)
    : null;

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        {hasTemperature
          ? `Today is ${weatherData.temperature[currentTemperatureUnit]}°${currentTemperatureUnit} / You may want to wear:`
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
