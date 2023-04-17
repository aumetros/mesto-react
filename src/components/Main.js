import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onDeleteClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((res) => {
        setUserName(res[0].name);
        setUserDescription(res[0].about);
        setUserAvatar(res[0].avatar);

        setCards(res[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
          onClick={onEditAvatar}
        >
          <div className="profile__avatar-overlay"></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>

          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          ></button>

          <p className="profile__about">{userDescription}</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <ul className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
