import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {

  return (
    <PopupWithForm
      title="Новое место"
      name="newcard"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
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
  );
}

export default AddPlacePopup;
