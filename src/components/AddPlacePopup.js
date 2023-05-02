import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading, onEsc }) {
  const [placeName, setPlaceName] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  function handlePlaceNameInputChange(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceLinkInputChange(e) {
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }

  React.useEffect(() => {
    setPlaceName("");
    setPlaceLink("");
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onEsc);
      return () => document.removeEventListener("keydown", onEsc);
    }
  }, [isOpen, onEsc]);

  return (
    <PopupWithForm
      title="Новое место"
      name="newcard"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
        value={placeName}
        onChange={handlePlaceNameInputChange}
      />
      <span className="popup__input popup__input_type_error place-name-error"></span>
      <input
        type="url"
        id="link"
        className="popup__input popup-newcard__input popup-newcard__input_type_link form-input"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={placeLink}
        onChange={handlePlaceLinkInputChange}
      />
      <span className="popup__input popup__input_type_error link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
