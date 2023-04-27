import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onDeleteClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = (`element__like-button ${isLiked && 'element__like-button_checked'}`);

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
          <button className={cardLikeButtonClassName} type="button"></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>

      {isOwn && (
        <button
          className="element__trash-button"
          type="button"
          onClick={onDeleteClick}
        ></button>
      )}
    </li>
  );
}

export default Card;
