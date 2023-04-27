import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((res) => {
        setCurrentUser(res[0]);
        setCards(res[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onDeleteClick={handleDeleteClick}
          onCardLike={handleCardLike}
          initialCards={cards}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          isDisabled={false}
        >
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
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="newcard"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          isDisabled={true}
        >
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
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="edit-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          isDisabled={true}
        >
          <input
            type="url"
            id="avatar-link"
            className="popup__input popup-edit-avatar__input form-input"
            name="link"
            placeholder="Введите cсылку на новый аватар"
            required
          />
          <span className="popup__input popup__input_type_error avatar-link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title="Вы уверены?"
          name="confirm-delete"
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          isDisabled={false}
          textButton="Удалить"
          textSpinner="Удаление..."
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
