import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";
import { validators } from "../utils/validators";
import { useFormErrors } from "../hooks/useFormErrors";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading, onEsc }) {
  const { values, handleChange, setValues } = useForm();
  const { errors, setErrors } = useFormErrors();

  const isPlaceNameInvalid = Object.values(errors.placeName).some(Boolean);
  const isPlaceLinkInvalid = Object.values(errors.placeLink).some(Boolean);
  const isFormInvalid = isPlaceNameInvalid || isPlaceLinkInvalid;

  const [visibilityValidate, setVisibilityValidate] = React.useState({placeName: false, placeLink: false});

  const placeNameErrorClassName = `popup__input popup__input_type_error ${
    visibilityValidate.placeName && isPlaceNameInvalid && "popup__error_visible"
  }`;

  const placeLinkErrorClassName = `popup__input popup__input_type_error ${
    visibilityValidate.placeLink && isPlaceLinkInvalid && "popup__error_visible"
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: values.placeName,
      link: values.placeLink,
    });
  }

  function handleChangeInput(e) {
    handleChange(e);
    setVisibilityValidate({...visibilityValidate, [e.target.name]: true});
  }

  function showPlaceNameErrors() {
    if (visibilityValidate.placeName) {
      return (
        <>
          {errors.placeName.required &&
            errors.placeName.minLenght &&
            "Заполните это поле."}
          {!errors.placeName.required &&
            errors.placeName.minLenght &&
            "Текст должен быть не короче 2 симв."}
          {errors.placeName.maxLength && "Текст должен быть не длинее 30 симв."}
        </>
      );
    }
  }

  function showPlaceLinkErrors() {
    if (visibilityValidate.placeLink) {
      return (
        <>
          {errors.placeLink.required &&
            errors.placeLink.url &&
            "Заполните это поле."}
          {!errors.placeLink.required && errors.placeLink.url && "Введите URL."}
        </>
      );
    }
  }

  React.useEffect(() => {
    setValues({ ...values, placeName: "", placeLink: "" });
    setVisibilityValidate({placeName: false, placeLink: false});
  }, [isOpen, setValues, setVisibilityValidate]);

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
      ...errors,
      placeName: placeNameValidationResult,
      placeLink: placeLinkValidationResult,
    });
  }, [values, setErrors]);

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
      isInvalid={isFormInvalid}
    >
      <input
        type="text"
        id="placeName"
        className="popup__input popup-newcard__input"
        name="placeName"
        placeholder="Название"
        value={values.placeName}
        onChange={handleChangeInput}
      />
      <span className={placeNameErrorClassName}>{showPlaceNameErrors()}</span>
      <input
        type="url"
        id="placeLink"
        className="popup__input popup-newcard__input"
        name="placeLink"
        placeholder="Ссылка на картинку"
        value={values.placeLink}
        onChange={handleChangeInput}
      />
      <span className={placeLinkErrorClassName}>{showPlaceLinkErrors()}</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
