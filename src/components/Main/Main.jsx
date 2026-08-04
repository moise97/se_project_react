import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main({ clothingItems }) {
  return (
    <main className="main">
      <p className="main__text">Today is 75°F / You may want to wear:</p>
      <ul className="main__items">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} card={item} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
