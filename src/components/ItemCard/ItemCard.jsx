import "./ItemCard.css";

function ItemCard({ card }) {
  return (
    <li className="card">
      <h2 className="card__title">{card.name}</h2>
      <img src={card.link} alt={card.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
