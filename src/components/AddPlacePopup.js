import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";
import { validators } from "../utils/validators";
import { useFormErrors } from "../hooks/useFormErrors";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading, onEsc }) {

  const { values, handleChange, setValues } = useForm();
  const { errors, setErrors } = useFormErrors();

  // const [placeName, setPlaceName] = React.useState("");
  // const [placeLink, setPlaceLink] = React.useState("");

  // function handlePlaceNameInputChange(e) {
  //   setPlaceName(e.target.value);
  // }

  // function handlePlaceLinkInputChange(e) {
  //   setPlaceLink(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: values.placeName,
      link: values.placeLink,
    });
  }

  React.useEffect(() => {
    setValues({
      placeName: '',
      placeLink: ''
    })
    // setPlaceName("");
    // setPlaceLink("");
  }, [isOpen, setValues]);

  React.useEffect(() => {
    const { placeName, placeLink } = values;

    const placeNameValidationResult = Object.keys(validators.placeName)
      .map((errorKey) => {
        const errorResult = validators.placeName[errorKey](placeName);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {});

    const placeLinkValidationResult = Object.keys(validators.placeLink)
      .map((errorKey) => {
        const errorResult = validators.placeLink[errorKey](placeLink);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {});

    setErrors({
      placeName: placeNameValidationResult,
      placeLink: placeLinkValidationResult,
    });
  }, [values, setErrors]);

  console.log(errors);

  return (
    <PopupWithForm
      title="Новое место"
      name="newcard"
      isOpen={isOpen}
      onClose={onClose}
      isDisabled={false}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onEsc={onEsc}
    >
      <input
        type="text"
        id="placeName"
        className="popup__input popup-newcard__input popup-newcard__input_type_name form-input"
        name="placeName"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={values.placeName || ''}
        onChange={handleChange}
      />
      <span className="popup__input popup__input_type_error place-name-error"></span>
      <input
        type="url"
        id="placeLink"
        className="popup__input popup-newcard__input popup-newcard__input_type_link form-input"
        name="placeLink"
        placeholder="Ссылка на картинку"
        required
        value={values.placeLink || ''}
        onChange={handleChange}
      />
      <span className="popup__input popup__input_type_error link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
