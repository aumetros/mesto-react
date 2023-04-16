function Card({ card, onCardClick, onDeleteClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img
        className="element__foto"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />

      <div className="element__description">
        <p className="element__title">{card.name}</p>
        <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>

      <button
        className="element__trash-button element__trash-button_showed"
        type="button"
        onClick={onDeleteClick}
      ></button>
    </li>
  );
}

export default Card;
