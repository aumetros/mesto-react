import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="app">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onClose={closeAllPopups}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      {/* Секция попапов */
      /* Попап редактирования профиля */}
      <section
        className={`popup-profile popup ${
          isEditProfilePopupOpen && "popup_opened"
        }`}
      >
        <div className="popup-profile__container">
          <form
            className="popup__form popup__form-profile-edit"
            name="profile-edit"
            noValidate
          >
            <h2 className="popup-profile__title">Редактировать профиль</h2>

            <input
              type="text"
              id="name-input"
              className="popup__input popup-profile__input popup-profile__input_type_name form-input"
              name="name"
              placeholder="Введите своё имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input popup__input_type_error name-input-error"></span>

            <input
              type="text"
              id="about-input"
              className="popup__input popup-profile__input popup-profile__input_type_about form-input"
              name="about"
              placeholder="Напишите о себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input popup__input_type_error about-input-error"></span>

            <button className="popup__button" type="submit">
              <span className="popup__button-text">Сохранить</span>
              <span className="popup__button-spinner">Сохранение...</span>
            </button>
          </form>

          <button
            className="popup__close"
            type="button"
            onClick={closeAllPopups}
          ></button>
        </div>
      </section>

      {/* Попап добавления новой карточки */}
      <section
        className={`popup-newcard popup ${
          isAddPlacePopupOpen && "popup_opened"
        }`}
      >
        <div className="popup-newcard__container">
          <form
            className="popup__form popup-newcard__form-card-add"
            name="card-add"
            noValidate
          >
            <h2 className="popup-newcard__title">Новое место</h2>

            <input
              type="text"
              id="place-name"
              className="popup__input popup-newcard__input popup-newcard__input_type_name form-input"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input popup__input_type_error place-name-error"></span>

            <input
              type="url"
              id="link"
              className="popup__input popup-newcard__input popup-newcard__input_type_link form-input"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input popup__input_type_error link-error"></span>

            <button
              className="popup__button popup__button_disabled popup__new-card-button"
              type="submit"
              disabled
            >
              <span className="popup__button-text">Сохранить</span>
              <span className="popup__button-spinner">Сохранение...</span>
            </button>
          </form>

          <button
            className="popup__close"
            type="button"
            onClick={closeAllPopups}
          ></button>
        </div>
      </section>

      {/* Попап подтверждения удаления карточки */}
      <section className="popup-confirm-delete popup">
        <div className="popup-confirm-delete__container">
          <form className="popup__form popup-confirm-delete__form">
            <h2 className="popup-confirm-delete__title">Вы уверены?</h2>
            <button
              className="popup__button popup__confirm-delete-button"
              type="submit"
            >
              Да
            </button>
          </form>

          <button className="popup__close" type="button"></button>
        </div>
      </section>

      {/* Попап редактирования аватара пользователя */}
      <section
        className={`popup-edit-avatar popup ${
          isEditAvatarPopupOpen && "popup_opened"
        }`}
      >
        <div className="popup-edit-avatar__container">
          <form className="popup__form popup-edit-avatar__form">
            <h2 className="popup-edit-avatar__title">Обновить аватар</h2>

            <input
              type="url"
              id="avatar-link"
              className="popup__input popup-edit-avatar__input form-input"
              name="link"
              placeholder="Введите cсылку на новый аватар"
              required
            />

            <span className="popup__input popup__input_type_error avatar-link-error"></span>

            <button
              className="popup__button popup__button_disabled popup-edit-avatar__button"
              type="submit"
              disabled
            >
              <span className="popup__button-text">Сохранить</span>
              <span className="popup__button-spinner">Сохранение...</span>
            </button>
          </form>

          <button
            className="popup__close"
            type="button"
            onClick={closeAllPopups}
          ></button>
        </div>
      </section>
    </div>
  );
}

export default App;
