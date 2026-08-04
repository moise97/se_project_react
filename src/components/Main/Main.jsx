import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main({ clothingItems, onCardClick }) {
  return (
    <main className="main">
      <p className="main__text">Today is 75°F / You may want to wear:</p>
      <ul className="main__items">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} card={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
