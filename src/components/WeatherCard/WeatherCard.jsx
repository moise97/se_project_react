import { useContext } from "react";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit.js";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature = weatherData.temperature[currentTemperatureUnit];

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature ?? "--"}°{currentTemperatureUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
