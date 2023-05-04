import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "../hooks/useForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading, onEsc }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser, isOpen, setValues]);

  console.log(values)

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onEsc={onEsc}
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
        value={values.name || ""}
        onChange={handleChange}
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
        value={values.about || ""}
        onChange={handleChange}
      />
      <span className="popup__input popup__input_type_error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
