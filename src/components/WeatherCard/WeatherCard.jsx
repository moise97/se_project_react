import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {typeof weatherData.temperature === "number"
          ? `${weatherData.temperature}°F`
          : ""}
      </p>
    </section>
  );
}

export default WeatherCard;
