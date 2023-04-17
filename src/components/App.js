import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleDeleteClick() {
    setIsConfirmDeletePopupOpen(!isConfirmDeletePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="app">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onDeleteClick={handleDeleteClick}
      />
      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        isDisabled={false}
        children={
          <>
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
          </>
        }
      />

      <PopupWithForm
        title="Новое место"
        name="newcard"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        isDisabled={true}
        children={
          <>
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
          </>
        }
      />

      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        isDisabled={true}
        children={
          <>
            <input
              type="url"
              id="avatar-link"
              className="popup__input popup-edit-avatar__input form-input"
              name="link"
              placeholder="Введите cсылку на новый аватар"
              required
            />

            <span className="popup__input popup__input_type_error avatar-link-error"></span>
          </>
        }
      />

      <PopupWithForm
        title="Вы уверены?"
        name="confirm-delete"
        isOpen={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        isDisabled={false}
        children={""}
      />
    </div>
  );
}

export default App;
