function Card({card}) {
  return (
    <li className="element" key={card._id}>
      <img className="element__foto" src={card.link} alt={card.name} />

      <div className="element__description">
        <p className="element__title">{card.name}</p>
        <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>

      <button className="element__trash-button" type="button"></button>
    </li>
  );
}

export default Card;
