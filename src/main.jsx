import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { getWeatherCondition } from "../../utils/weatherApi.js";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";

function Main({ weatherData, clothingItems, onCardClick }) {
  const weatherCondition = getWeatherCondition(weatherData.temperature);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temperature}°F / You may want to wear:
      </p>
      <ul className="main__items">
        {clothingItems
          .filter((item) => item.weather.toLowerCase() === weatherCondition)
          .map((item) => (
            <ItemCard key={item._id} card={item} onCardClick={onCardClick} />
          ))}
      </ul>
    </main>
  );
}

export default Main;
