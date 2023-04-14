import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
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
        <Card card={cards[0]} />
      </ul>
    </main>
  );
}

export default Main;
