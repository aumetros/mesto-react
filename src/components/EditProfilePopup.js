import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionInputChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
      onSubmit={handleSubmit}
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
        value={name ?? ""}
        onChange={handleNameInputChange}
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
        value={description ?? ""}
        onChange={handleDescriptionInputChange}
      />
      <span className="popup__input popup__input_type_error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
