import React from "react";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

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

      <ul className="elements">{/* Контейнер для карточек */}</ul>
    </main>
  );
}

export default Main;
