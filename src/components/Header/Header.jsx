import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

function Header({ location, onAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__info">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </Link>
        <p className="header__date-location">
          {currentDate}, {location}
        </p>
      </div>
      <div className="header__controls">
        <ToggleSwitch />
        <button
          className="header__add-clothes-btn"
          type="button"
          onClick={onAddClick}
        >
          + Add clothes
        </button>
        <Link to="/profile" className="header__user-container">
          <p className="header__username">Moise Michaud</p>
          <img src={avatar} alt="Moise Michaud" className="header__avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
