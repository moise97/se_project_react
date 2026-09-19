import "./ItemCard.css";

function ItemCard({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <h2 className="card__title">{card.name}</h2>
      <img
        src={card.imageUrl}
        alt={card.name}
        className="card__image"
        onClick={handleClick}
      />
    </li>
  );
}

export default ItemCard;
