import "./Header.css";

function Header(props) {
  return <p>{props.location}</p>;
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <p className="header__logo">WTWR</p>
      <p className="header__date-location">{currentDate}, New Jersey</p>
      <button className="header__add-clothes-btn" type="button">
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__date-location">
          {currentDate}, {location}
        </p>
        <img src="" alt="Moise Michaud" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
