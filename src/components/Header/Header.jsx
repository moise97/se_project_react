import "./Header.css";

function Header({ location, onAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <p className="header__logo">WTWR</p>
      <p className="header__date-location">
        {currentDate}, {location}
      </p>
      <button
        className="header__add-clothes-btn"
        type="button"
        onClick={onAddClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Moise Michaud</p>
        <img src="" alt="Moise Michaud" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
