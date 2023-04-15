import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
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
          <li className="element" key={card._id}>

          <img className="element__foto" src={card.link} alt={card.name}/>
      
          <div className="element__description">
            <p className="element__title">{card.name}</p>
            <div className="element__like-container">
              <button className="element__like-button" type="button"></button>
              <span className="element__like-counter">{card.likes.length}</span>
            </div>
          </div>
      
          <button className="element__trash-button" type="button"></button>
      
        </li>
        )  
        
        })}


        
      </ul>
    </main>
  );
}

export default Main;
